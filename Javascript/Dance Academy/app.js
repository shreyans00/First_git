const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/contactDancer', {useNewUrlParser: true});
const port = 80;

// in terminal first intilise npm, so type npm init & fill & also need to install express, pua

// Define mongoose schema like columns in which our database will save
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

var Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) 
app.use(express.urlencoded())   

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views')) 

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get("/contact", (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})

// To save the data into database
app.post('/contact', (req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Data Saved")
    }).catch(()=>{
        res.status(404).send("Data Not Saved")
    });
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
