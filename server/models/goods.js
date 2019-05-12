var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "name": String,
    "desc" : String
    // "productId" : {type:String},
    // "productName" : {type:String},
    // "salePrice" : Number,
    // "productImage" : String
});

module.exports = mongoose.model("Good",productSchema);