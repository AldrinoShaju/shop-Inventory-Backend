const mongoose = require('mongoose')
const newDistributerSchema = require('../schema/newDistributer')
const itemService = require('../service/item')
const DistributerModel = mongoose.model('Distributer', newDistributerSchema);
const newItemSchema = require('../schema/newItem')

const ItemModel = mongoose.model('Item', newItemSchema);
var foundItem = null;

const addDistributer = async(newDistri)=>{
    let result = "";
    let itemsArray = newDistri.Order[0].Items;
    let respItemsArray = addItemsFromOrder(itemsArray);
    // for(const item of itemsArray){
    //     const newItem = {
    //         "ItemID":38833,
    //         "Img":"",
    //         "Name":item.Name,
    //         "Barcode":49747392384,
    //         "Stock":[
    //             {
    //                 "Quantity":item.Quantity,
    //                 "ProductionDate":item.ProductionDate,
    //                 "ExpiryDate":item.ExpiryDate,
    //                 "BuyPrice":item.BuyPrice,
    //                 "MRP":item.MRP,
    //                 "SellPrice":item.SalePrice
    //             }
    //         ]
    //     }
    //     const newItem1 = new ItemModel(newItem);
    //     let resp = await itemService.addItem(newItem1);
    //     itemIDArray.push(resp.id);
    //     delete item.Name;
    //     delete item.Quantity;
    //     delete item.ProductionDate;
    //     delete item.ExpiryDate;
    //     delete item.BuyPrice;
    //     delete item.MRP;
    //     delete item.SalePrice;

    //     item.itemID = resp.id;
    // }
    console.log(respItemsArray);
    newDistri.Order[0].Items = respItemsArray
    console.log(newDistri.Order[0]);
    const newDistri1 = new DistributerModel(newDistri);
    console.log(newDistri1.Order[0]);
    await newDistri1.save()
    .then(distri=>distri==newDistri1? result="Successful" : result="failed")
    .catch(err=>console.log(err));

    return result;
}

const getDistriByID = async(distriID)=>{
    let result = await DistributerModel.findById(distriID)
    return result;
}

const getDistriByName = async (distriName)=>{
    
    let result = await DistributerModel.find({ Name: distriName})
    return result;   
}

// const addDistributerOrder = async (newOrder)=>{
//     let result = "";
//     let resp = await getDistriByID(newOrder.DistributerID)
//     delete resp.DistributerID
//     let respItemsArray = addItemsFromOrder(resp.Items);
//     resp.Order.push(req);
//     let newItem1 = new ItemModel(resp);
//     await newItem1.save()
//     .then(item=>{item==newItem1? result="Successful" : result="failed"})
//     .catch(err=>console.log(err));

//     return result;
// }

const addItemsFromOrder = async (itemsArray)=>{
    let itemsArrayCp = itemsArray
    
    for(const item of itemsArrayCp){
        const newItem = {
            "ItemID":38833,
            "Img":"",
            "Name":item.Name,
            "Barcode":49747392384,
            "Stock":[
                {
                    "Quantity":item.Quantity,
                    "ProductionDate":item.ProductionDate,
                    "ExpiryDate":item.ExpiryDate,
                    "BuyPrice":item.BuyPrice,
                    "MRP":item.MRP,
                    "SellPrice":item.SalePrice
                }
            ]
        }
        const newItem1 = new ItemModel(newItem);
        let resp = await itemService.addItem(newItem1);
        itemIDArray.push(resp.id);
        delete item.Name;
        delete item.Quantity;
        delete item.ProductionDate;
        delete item.ExpiryDate;
        delete item.BuyPrice;
        delete item.MRP;
        delete item.SalePrice;

        item.itemID = resp.id;
    }

    return itemsArrayCp;
}

module.exports = {addDistributer, getDistriByID}
