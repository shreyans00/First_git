// getting-started.js & connecting with the database to use MongoDb easily
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));  // connection to the test database

db.once('open', function() {  
    console.log("We are connected...")    // this follows non-blocking IO model
});

// Let's make a schema(type of data user want to store)
var kittySchema = new mongoose.Schema({
    name: String
});

// To add speak functionality
kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name
    console.log(greeting);
};

// To lock the changes in schema by converting into model
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
var kitten = mongoose.model('CuteKitties',kittySchema);   // it goes to the collection "CuteKitties" & there we are going to do CRUD (create, read, update, delete)

var nameKitty = new kitten({name: 'nameKitty'});
console.log(nameKitty.name);
nameKitty.speak();

// To save it in model name, here CuteKitties
nameKitty.save(function (err, nameKitty) {
    if (err) return console.error(err);
    nameKitty.speak();
});

// To find
kitten.find({name: "CuteKitties"}, function (err, kittens){
    if (err) return console.error(err);
    console.log(kittens);
})

/*
// ANOTHER WAY TO WRITE THE CODES (NO NEED TO SEE)

// getting-started.js & connecting with the database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');  // connection to the test database
}

// Let's make a schema(type of data user want to store)
const kittySchema = new mongoose.Schema({
    name: String
  });

// To lock the changes in schema by converting into model
const Kitten = mongoose.model('Kitten', kittySchema);

// create a new kitten document
const silence = new Kitten({ name: 'Silence' });

// To add speak functionality
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
};

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); 

// To save
// await fluffy.save(function(err, fluffy));
// fluffy.speak();
fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
});

// To find
const kittens = await Kitten.find();
console.log(kittens);

// To find with a particular feature
await Kitten.find({ name: /^fluff/ });
*/
