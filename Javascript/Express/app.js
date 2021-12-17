// Hmne server wale folder mai home, about, contact; sbke liye alag se codes likhe thae aur if-else ka use bhi krna pra tha, to unn sbko simplify krne ke liye express ka use krte hai
// express handles all URL parsing, routing, scalability with its functions

const express = require("express");    // importing express module
const path = require("path");
const app = express();
const port = 80;
 
// for serving static files
app.use('/static', express.static('static'));  // last static is folder_name

// Set the template engine for pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hey there', message: "This is so called pubG!"})
})

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app I created");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app");
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
