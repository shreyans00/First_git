// Synchronous or blocking - line by line execution (normal programming)

// Asynchronous or non-blocking - line by line execution not guaranteed
//                              - callbacks will fire, doesn't block other codes till its processing

const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");

let text2 = fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(err, data);
    console.log("Asynchronous: ",data);   
    // these lines executed early but printed at last after calc error i.e. Asynchronous
})  

console.log("The content of the file is: ",text);
text = text.replace("my", "your");

console.log("The content of new file is: ",text)

console.log("Creating a new file...\n")
fs.writeFileSync("dele2.txt", text);