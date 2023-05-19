- Main thing to learn :- CRUD operations - Create, read, update and read

Mongo DB commands:-
In mongodb, the database is called collection - that is the table.
And the rows are called documents.
MongoDb stores data in BSON(binary json format), its faster than json.
This bson has data types, like Number, string, object, array.
find is a cursor
;
cls;
    - clear screen
show dbs;
    - To see the available databases
use products;
    - To create a new DB products
db.products.insertOne({ 
    "name":"book",
    "price":40.12, 
    "description":"This is an awesome book" 
    })
    
    - Adding document to collection

 db.products.insertMany([{
...     "name": "Book",
...     "price": 40.12,
...     "description": "This is an awesome book"
... },
... {
...     "name": "Laptop",
...     "price": 534.12,
...     "description": "This is an awesome latptop"
... }])

db.products.find();
    - Returns everything

db.products.find({name:'book'});
    - Find object based on attribute

Insert, replace, find, update.

- Relationships
- embedded documents
- To link two tables, is called aggregation, like using id of product in users table to get product from the product table
    https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/#:~:text=Definition-,%24lookup,from%20the%20%22joined%22%20collection.





