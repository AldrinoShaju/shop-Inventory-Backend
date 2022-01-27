const mongoose = require('mongoose')
const newCustomerSchema = require('../schema/newCustomer')

const CustomerModel = mongoose.model('Customer', newCustomerSchema);

var foundItem = null;

const addCustomer = async(newCustomer)=>{
    let result = "";
    var resp = {
        result: "",
        id: ""
    }
    const newCustomer1 = new CustomerModel(newCustomer);
    // var id = newItem1.id;
    // console.log(newItem1.id);
    await newCustomer1.save()
    .then(cust=>{cust==newCustomer1? result="Successful" : result="failed"; id = cust.id})
    .catch(err=>console.log(err));
    resp = {
        result: result,
        id: id
    }
    // console.log(newItem.id);
    return resp;
}

// const itemRespProcess = (item) =>{
//     item==newItem1? result="Successful" : result="failed"
//     resp = {
//         result: result,
//         id: item.id
//     }
// }

const getCustomerByID = async(custID)=>{
    let result = await CustomerModel.findById(custID.id)
    return result;
}

const getCustomerByName = async (custName)=>{
    
    let result = await CustomerModel.find({ Name: custName.Name})
    return result;   
}

// const addItemStock = async (newStock)=>{
//     let result = "";
//     let resp = await getItemByID(newStock.ItemID)
//     let req = {
//         Quantity:newStock.Quantity,
//         ProductionDate:newStock.ProductionDate,
//         ExpiryDate:newStock.ExpiryDate,
//         BuyPrice:newStock.BuyPrice,
//         MRP:newStock.MRP,
//         SellPrice:newStock.SellPrice
//     }
//     resp.Stock.push(req);
//     let newItem1 = new ItemModel(resp);
//     await newItem1.save()
//     .then(item=>{item==newItem1? result="Successful" : result="failed"})
//     .catch(err=>console.log(err));

//     return result;
// }

module.exports = {addCustomer, getCustomerByID, getCustomerByName}
