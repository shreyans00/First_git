const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('Events.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'Loops/html'});
    res.end(fileContent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
})