const mongoose = require('mongoose')
const newTransactionSchema = require('../schema/newTransactions')
const itemService = require('../service/item');
const TransactionModel = mongoose.model('Transaction', newTransactionSchema);



const addTransaction = async(reqTransaction)=>{
    let result = "";
    const reqTransactMongo = new TransactionModel(reqTransaction);
    await reqTransactMongo.save()
    .then(transact=>transact==reqTransactMongo? result="Successful" : result="failed")
    .catch(err=>console.log(err));

    return result;
}

const getTransaction = async(reqTransaction)=>{
    var resp = await TransactionModel.findById(reqTransaction.TransactionID)
    let respCopy = JSON.parse(JSON.stringify(resp));
    let itemArray = respCopy.Items;
    let respProccesed = await respProcess(itemArray);
    respCopy.ItemDetails=respProccesed;
    // console.log(respCopy);
    return respCopy;
}

const respProcess = async (itemArray)=>{
    var itemDetailArray = [];
    for(const item of itemArray){
        let a = item.StockNum;
        let itemDetails = await itemService.getItemByID(item.ItemID);
        let itemCopy = JSON.parse(JSON.stringify(itemDetails));
        // console.log(itemCopy.Name);
        itemCopy.Stock[a].Name = itemCopy.Name;
        itemCopy.Stock[a].Quantity = item.Quantity;
        itemDetailArray.push(itemCopy.Stock[a]);
    }
    
    return itemDetailArray;
    
}

// const getItemByID = async(itemID)=>{
//     let result = await ItemModel.findById(itemID)
//     return result;
// }

// const getItemByName = async (ItemName)=>{
    
//     let result = await ItemModel.find({ Name: ItemName})
//     return result;   
// }

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

module.exports = {addTransaction, getTransaction}
