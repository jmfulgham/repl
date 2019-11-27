const mongoose = require('mongoose');
const assert = require('assert');
mongoose.Promise = global.Promise;


const db = mongoose.connect(`mongodb://localhost:27017/product-inventory`);

const productSchema = mongoose.Schema({
    PRODUCT_NAME: String,
    WAREHOUSE_NO: Number,
    STOCK: [{
        SKU: String,
        WAREHOUSE_NO: Number,
        QTY: Number
    }],
    UNSTOCK: [{
        SKU: String,
        WAREHOUSE_NO: Number,
        QTY: Number
    }]
});
