require('dotenv').config();
const mongoose = require('mongoose');
const controller = require('./controller/shopController');
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

const uri="mongodb+srv://familyshop:"+password+"@cluster0.awwvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

console.log("Connecting to MongoDb");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {connectSuccessfull();},
  err => { console.log(err); }
);

const connectSuccessfull = ()=>{
    console.log("Connected to MongoDb");
    controller();
}