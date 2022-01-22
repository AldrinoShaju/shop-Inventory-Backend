const mongoose = require('mongoose')
const {Schema} = mongoose

const itemModel = new Schema({
    itemID: Number,
    Img: String,
    Name: String,
    Barcode: Number,
    Stock:[{
        Quantity: Number,
        ProductionDate: String,
        ExpiryDate: String,
        BuyPrice: Number,
        MRP: Number,
        SellPrice: Number
    }]
})

module.exports = itemModel

// {
//     "ItemID":38833,
//     "Img":"",
//     "Name":"Milk",
//     "Barcode":49747392384,
//     "Stock":[
//         {
//             "Quantity":20,
//             "ProductionDate":"2022-01-17",
//             "ExpiryDate":"2022-01-20",
//             "BuyPrice":23.5,
//             "MRP":25,
//             "SellPrice":25
//         }
//     ]
// }