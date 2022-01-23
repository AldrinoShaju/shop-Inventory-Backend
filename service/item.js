const mongoose = require('mongoose')
const newItemSchema = require('../schema/newItem')

const ItemModel = mongoose.model('Item', newItemSchema);

var foundItem = null;

const addItem = async(newItem)=>{
    let result = "";
    const newItem1 = new ItemModel(newItem);
    await newItem1.save()
    .then(item=>item==newItem1? result="Successful" : result="failed")
    .catch(err=>console.log(err));

    return result;
}

const getItemByID = async(itemID)=>{
    let result = await ItemModel.findById(itemID)
    return result;
}

const getItemByName = async (ItemName)=>{
    
    let result = await ItemModel.find({ Name: ItemName})
    return result;   
}

const addItemStock = async (newStock)=>{
    let result = "";
    let resp = await getItemByID(newStock.ItemID)
    let req = {
        Quantity:newStock.Quantity,
        ProductionDate:newStock.ProductionDate,
        ExpiryDate:newStock.ExpiryDate,
        BuyPrice:newStock.BuyPrice,
        MRP:newStock.MRP,
        SellPrice:newStock.SellPrice
    }
    resp.Stock.push(req);
    let newItem1 = new ItemModel(resp);
    await newItem1.save()
    .then(item=>{item==newItem1? result="Successful" : result="failed"})
    .catch(err=>console.log(err));

    return result;
}

module.exports = {addItem, getItemByID, getItemByName, addItemStock}
