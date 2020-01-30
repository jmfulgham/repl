const config = require('./config/config');
const mongoose = require('mongoose');
const dbUrl = config.DATABASE_URL;

const program = require('commander');
const {addProduct, getProducts, Product} = require('./lib/product/model');

mongoose.connect(dbUrl, {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.on('error', err => {
    if (err) {
        console.error("Error connecting to the database", err);
        mongoose.disconnect();
    }
});

Product.createCollection().then(function (collection) {
    console.log(`Product-Inventory collection created`)
});


program.version('0.0.1').description('Product Inventory System');

program.command('ADD_PRODUCT <NAME> <SKU>')
    .description('Add a product name and sku')
    .action((name, sku) => {
        addProduct({name, sku})
    });

program.command('LIST_PRODUCTS').description('List all products')
    .action(getProducts);

program.parse(process.argv);