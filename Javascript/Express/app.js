// to work upon this, in terminal(code), type node app.js but before this make sure you are working on express directory(folder), if not, then using cd, change your directory to Express,
// then for restarting server easily and some other stuffs, type nodemon app.js

// Express is a web development framework. if/else and routing is handled by express
const express = require("express");     // we import express module
const app = express();      // we make an app
const port = 80;        // we want to run our app on port 80

const path = require("path");
// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('views/demo', { title: 'Hey bro', message: 'Thanks for telling me how to use pubG(pug)!' })
});

app.get("/",(req,res) => {
    res.status(200).send("This is my first express app");
});

// Postman is used to get request, post request, etc..
app.get("/about", (req, res)=>{
    res.send("This prints when get is selected in Postman");
});

app.post("/about", (req, res)=>{
    res.send("This prints when post is selected in Postman");
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website");
});

app.listen(port,() =>{
    console.log(`The application has started successfully on the port ${port}`);
})

// To install nodemon package locally
    // "scripts": {
    //   "serve": "nodemon server.js"
    // },