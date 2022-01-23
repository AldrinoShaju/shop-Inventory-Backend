const mongoose = require('mongoose')
const {Schema} = mongoose

const customerModel = new Schema({
    CustomerID: Number,
    CustomerName: String,
    PhoneNumber: Number,
    Transaction:[{
        TransactionID: Number,
        PaymentStatus: String,
        ClosedOn: String,
    }]
})

module.exports = customerModel

// "CustomerID":34234,
// "CustomerName":"Bot",
// "PhoneNumber": 837249342,
// "Transaction":[
//     {
//         "TransactionID":3234,
//         "PaymentStatus":"Paid",
//         "ClosedOn":"2022-02-01"
//     }
// ]