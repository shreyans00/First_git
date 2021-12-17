const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('5.Events.html');

// Apna server bnayenge
const server = http.createServer((req,res)=>{  // request, response
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
})

// First go to the required directory in terminal by cd, here web_dev/javascript
// Then type node http.js to start the server