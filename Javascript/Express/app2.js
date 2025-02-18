const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())   // used to get the data of submitted form to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/',(req,res)=>{
    name2 = req.body.name  //.name is accessed by name(not id) we defined in index.pug
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `The name of the client is ${name2}, ${age} years old, ${gender}, resident at ${address}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
