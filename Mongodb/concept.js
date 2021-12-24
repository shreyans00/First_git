 // to show all your database
show dbs

// to switch to a collection, type use collection-name
use harryKart  
 
// collection stored in RDBMS(Relational DataBase Management Systems)
show collection

// to add a single data by copy pasting the code in powershell
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

// to add multiple data
db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])  // we can add a extra feature to any of the data

// here we have created 2 Samsung 30s but the objects are stored in the database with different id's, so in this way data persist in our MongoDb database

// to see the whole list of documents 
db.items.find()

// to see the data of a particular field (filter object)
// gte: greater than or equal to, gt: greater than, lt: less than
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})   
// And operator
db.items.find({rating: {$gte: 3.5}, price: {$gt: 40000}})  
// Or operator
db.items.find({
    $or:[{rating: {$lt: 3.5}}, {price: {$gt: 40000}}]
})

// to see specific data of a particular field (filter object)
db.items.find({rating: 3.5}, {rating: 1, qty: 1})  // here only rating & qty field reflect for rating 3.5

// to delete items from the Mongo Database
db.items.deleteOne({price: 22000})  
// deleteOne deletes the matching document entry & will delete the first entry in case of multi document match
// deleteMany deletes all the matching entries
db.items.deleteMany({price: 22000})

// for adding another collection, other than items(db.items....)
db.anotherCollection.insertOne({a:80})

// to update data - db.items.update({jiska change krna hai}, {$set: {jisko change krna hai}})
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
