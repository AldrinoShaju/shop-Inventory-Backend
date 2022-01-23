const express = require('express')
const bodyParser = require('body-parser')


const itemService = require('../service/item')
const transactionService = require('../service/transaction')
const distributerService = require('../service/distributer')
const customerService = require('../service/customer')
const constants = require('../constant/serviceConstants')
const app = express()
app.use(bodyParser.json({extended: true}))
// Enable below line after the frontend is ready
// app.use(bodyParser.urlencoded({extended: true}))
const port = 3000

const controller = ()=>{
  let frontendResponse;
    // Initial root dir
  app.get('/', (req, res) => {
    res.status(500).send({
      ErrorCode:3453,
      ErrorClass: "Business",
      ErrorMessage: "Invalid Field"
    });
  })

  app.get('/getItem', async(req, res) => {
    
    if(req.body.type===constants.ID){
      frontendResponse = await itemService.getItemByID(req.body.itemID);
    }else if(req.body.type===constants.NAME){
      frontendResponse = await itemService.getItemByName(req.body.Name);
    }
    res.send(frontendResponse)
  })

  // app.get('/getItemByID', async(req, res) => {
    
  //   let result = await itemService.getItemByID(req.body.itemID);
    
  //   res.send(result)
  // })
  
  // Add new items
  app.post('/addItem', async(req,res)=>{
    // console.log(req.body);
    frontendResponse = await itemService.addItem(req.body);
    res.send(frontendResponse);
  })
  
  // Add new stock to exsisting items
  app.post('/addItemStock', async(req,res)=>{
    // console.log(req.body);
    frontendResponse = await itemService.addItemStock(req.body);
    res.send(frontendResponse);
  })
  
  // Transaction Request
  app.post('/transactionReq', async (req,res)=>{
    // console.log(req.body);
    frontendResponse = await transactionService.addTransaction(req.body);
    res.send(frontendResponse);
  })

  app.get('/getTransaction', async (req,res)=>{
    // console.log(req.body);
    frontendResponse = await transactionService.getTransaction(req.body);
    res.send(frontendResponse);
  })
  
  // Add new Dealer
  app.post('/addDistributer', async (req,res)=>{
    frontendResponse = await distributerService.addDistributer(req.body);
    // console.log(result);
    res.send(frontendResponse);
  })

  app.get('/getDistributer', async (req,res)=>{
    let type = req.body.type;
    if(type==="ID"){
      frontendResponse = await distributerService.getDistriByID(req.body);
    }else if(type==="Name"){
      frontendResponse = await distributerService.getDistriByName(req.body);
    }
    
    // console.log(result);
    res.send(frontendResponse);
  })
  
  // Add exsisting dealer order
  // app.post('/addDistributerOrder', (req,res)=>{
  //   console.log(req.body);
  //   res.send("Msg recieved");
  // })
  
  // Customer Search
  app.get('/getCustomer', async (req,res)=>{
    // console.log(req.body);
    let type = req.body.type;
    if(type==="ID"){
      frontendResponse = await customerService.getCustomerByID(req.body);
    }else if(type==="Name"){
      frontendResponse = await customerService.getCustomerByName(req.body);
    }
    
    res.send(frontendResponse);
  })

  app.post('/addCustomer', async (req,res)=>{
    frontendResponse = await customerService.addCustomer(req.body);
    res.send(frontendResponse);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

module.exports = controller
