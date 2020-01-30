# CLI/Mongo REPL Challenge
(A work in progress)

## How to run the program
1. Clone the repository
2. npm install 
3. npm start 

## Problem Statement
Create a command line REPL to manage product inventory.

Managing product inventory requires adding products to a product catalog and adding warehouses to store the products.

There are 7 commands to use this functionality:
1. ADD PRODUCT
2. ADD WAREHOUSE
3. STOCK
4. UNSTOCK
5. LIST PRODUCTS
6. LIST WAREHOUSES
7. LIST WAREHOUSE

## Details
- The application will take in user input one line at a time.

Bold text denotes text that will be entered as-is, italics denote arguments that will be replaced by a value. Optional arguments are surrounded by square brackets ([]).

1. **ADD PRODUCT** *"PRODUCT NAME"* *SKU*
- This command adds a new product to our product catalog.
- We can have products with the same names but not the same SKU.
- "PRODUCT NAME" - STRING (Do not store the enclosing quotes they are there for us to be able to pass in space seperated product names.
- SKU - Unique Identifier.

2. **ADD WAREHOUSE** *WAREHOUSE#*  *[STOCK_LIMIT]*
- Creates a new warehouse where we can stock products.
- We assume that our warehouses can store infinitely many products if an optional stock limit argument is not specified.
- WAREHOUSE# - INTEGER
- STOCK_LIMIT - Optional, INTEGER

3. **STOCK** *SKU* *WAREHOUSE#* *QTY*
- Stocks QTY amount of product with SKU in WAREHOUSE# warehouse.
- SKU - Unique Identifier, must be a valid sku (is in product catalog).
- Warehouse# - INTEGER, must be a valid warehouse number
- QTY - Integer
- If a store has a stock limit that will be exceeded by this shipment, ship enough product so that the Stock Limit is fulfilled.

4. **UNSTOCK** *SKU* *WAREHOUSE#* *QTY*
- Unstocks QTY amount of product with SKU in WAREHOUSE# warehouse.
- SKU - Unique Identifier, must be a valid sku (is in product catalog).
- Warehouse# - INTEGER, must be a valid warehouse number
- QTY - Integer
- If a store has a stock that will go below 0 for this shipment only unstock enough products so stock stays at 0.

5. **LIST PRODUCTS**
- List all produts in the product catalog.

6. **LIST WAREHOUSES**
- List all warehouses.

7. **LIST WAREHOUSE** *WAREHOUSE#**
- List information about the warehouse with the given warehouse# along with a listing of all product stocked in the warehouse.
