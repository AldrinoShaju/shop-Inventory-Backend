const express = require('express')
const bodyParser = require('body-parser')


const itemService = require('../service/item')
const transactionService = require('../service/transaction')
const distributerService = require('../service/distributer')
const customerService = require('../service/customer')
const app = express()
app.use(bodyParser.json({extended: true}))
// Enable below line after the frontend is ready
// app.use(bodyParser.urlencoded({extended: true}))
const port = 3000

const controller = ()=>{
    // Initial root dir
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/getItemByName', async(req, res) => {
    
    let result = await itemService.getItemByName(req.body.Name);
    
    res.send(result)
  })

  app.get('/getItemByID', async(req, res) => {
    
    let result = await itemService.getItemByID(req.body.itemID);
    
    res.send(result)
  })
  
  // Add new items
  app.post('/addItem', async(req,res)=>{
    // console.log(req.body);
    let result = await itemService.addItem(req.body);
    res.send(result);
  })
  
  // Add new stock to exsisting items
  app.post('/addItemStock', async(req,res)=>{
    // console.log(req.body);
    let result = await itemService.addItemStock(req.body);
    res.send(result);
  })
  
  // Transaction Request
  app.post('/transactionReq', async (req,res)=>{
    console.log(req.body);
    let result = await transactionService.addTransaction(req.body);
    res.send(result);
  })

  app.get('/getTransaction', async (req,res)=>{
    // console.log(req.body);
    let result = await transactionService.getTransaction(req.body);
    res.send(result);
  })
  
  // Add new Dealer
  app.post('/addDistributer', async (req,res)=>{
    let result = await distributerService.addDistributer(req.body);
    console.log(result);
    res.send(result);
  })

  app.get('/getDistributer', async (req,res)=>{
    let result = await distributerService.getDistriByID(req.body);
    console.log(result);
    res.send(result);
  })
  
  // Add exsisting dealer order
  // app.post('/addDistributerOrder', (req,res)=>{
  //   console.log(req.body);
  //   res.send("Msg recieved");
  // })
  
  // Customer Search
  app.get('/getCustomer', async (req,res)=>{
    console.log(req.body);
    let result = await customerService.getCustomerByID(req.body);
    res.send(result);
  })

  app.post('/addCustomer', async (req,res)=>{
    let result = await customerService.addCustomer(req.body);
    res.send(result);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

module.exports = controller
