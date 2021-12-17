// In terminal, first type node, then it becomes more like console
// By pressing Tab key 2 times, saare global variables REPL me aa jayenge

const http = require('http');
const fs = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("Hello World");

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });