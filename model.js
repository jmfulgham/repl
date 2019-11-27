const mongoose = require('mongoose');
const assert = require('assert');
mongoose.Promise = global.Promise;


const db = mongoose.connect(`mongodb://localhost:27017/product-inventory`);

function toLower(input){
    return input.toLowerCase();
}

const productSchema = mongoose.Schema({
    PRODUCT_NAME: { type: String, set: toLower },
    WAREHOUSE_NO: Number,
    STOCK: [{
        SKU: { type: String, set: toLower },
        WAREHOUSE_NO: Number,
        QTY: Number
    }],

    UNSTOCK: [{
        SKU:{ type: String, set: toLower },
        WAREHOUSE_NO: Number,
        QTY: Number
    }]

});

const product = mongoose.model('Product', productSchema);

module.exports(product);