const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const assert = require('assert');

function toLower(input) {
    return input.toLowerCase();
}

const productSchema = new mongoose.Schema({
    name: {type: String, set: toLower},
    sku: {type: String, set: toLower}

});

const Product = mongoose.model('product', productSchema);

function addProduct(newProduct) {
    let sku = newProduct.sku;
    try {
        Product.findOne({sku}).exec((err, result) => {
            if (result) {
                console.log(`Error adding ${newProduct.name}, the SKU already exists`);
                mongoose.disconnect();
            } else {
                Product.create(newProduct, (err) => {
                    assert.strictEqual(null, err);
                    console.log("Added new product ", newProduct, "!! Be sure to take me out!!!!!");
                    mongoose.disconnect();
                });
            }
        });
    } catch (err) {
        console.error(err)
    }
}

function getProducts() {
    try {
        Product.find().exec((err, products) => {
            assert.strictEqual(null, err);
            console.log(products);
            mongoose.disconnect();
        });
    } catch (e) {
        console.log(e)
    }
}

module.exports = {addProduct, getProducts, Product};


