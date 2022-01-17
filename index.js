const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({extended: true}))
// Enable below line after the frontend is ready
// app.use(bodyParser.urlencoded({extended: true}))
const port = 3000

// Initial root dir
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Add new items
app.post('/addItem', (req,res)=>{
  console.log(req.body);
  res.send("Msg recieved");
})

// Add new stock to exsisting items
app.post('/addItemStock', (req,res)=>{
  console.log(req.body);
  res.send("Msg recieved");
})

// Transaction Request
app.post('/transactionReq', (req,res)=>{
  console.log(req.body);
  res.send("Msg recieved");
})

// Add new Dealer
app.post('/addDistributer', (req,res)=>{
  console.log(req.body);
  res.send("Msg recieved");
})

// Add exsisting dealer order
app.post('/addDistributerOrder', (req,res)=>{
  console.log(req.body);
  res.send("Msg recieved");
})

// Paylater Customer Search
app.post('/paylaterCustSearch', (req,res)=>{
  console.log(req.body);
  res.send("Msg recieved");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})