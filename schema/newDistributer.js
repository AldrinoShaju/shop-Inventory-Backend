const mongoose = require('mongoose')
const {Schema} = mongoose
const item = require('./newItem');
const distributerModel = new Schema({
    DistributerID: Number,
    DealerName: String,
    PhoneNumber: Number,
    Order:[{
        OrderID: Number,
        Items: [
            {
                itemID: String,
                Remarks:String
            }
        ]
    }]
})

module.exports = distributerModel

// {
//     "DistributerID":23423,
//     "DealerName":"Test",
//     "PhoneNumber":8473883423,
//     "Order":[
//         {
//             "OrderID":3424,
//             "Items":[
//                 {
//                     "Name":"qwer",
//                     "Quantity":34,
//                     "BuyPrice":12,
//                     "MRP":20,
//                     "SalePrice":18,
//                     "ProductionDate":"2022-01-18",
//                     "ExpiryDate":"2022-01-30",
//                     "Remarks":""
//                 },
//                 {
//                     "Name":"dfer",
//                     "Quantity":12,
//                     "BuyPrice":45,
//                     "MRP":60,
//                     "SalePrice":55,
//                     "ProductionDate":"2022-01-18",
//                     "ExpiryDate":"2022-01-30",
//                     "Remarks":""
//                 }
//             ],
//             "isRecieved":"True",
//             "RecieveDate":"2022-02-01"
//         }
//     ]
// }