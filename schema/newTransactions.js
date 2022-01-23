const mongoose = require('mongoose')
const {Schema} = mongoose

const transactionModel = new Schema({
    TransactionID: Number,
    DateTime: String,
    TransactionType: String,
    Items:[{
        ItemID: String,
        StockNum: Number,
        Quantity: Number,
    }]
})

module.exports = transactionModel

// {
//     "TransactionID":3740234,
//     "DateTime":"2022-01-17",
//     "TransactionType":"Pending",
//     "Items":[
//         {
//             "ItemID":8374,
//             "Quantity":2
//         },
//         {
//             "ItemID":3489,
//             "Quantity":1
//         }
//     ]
// }