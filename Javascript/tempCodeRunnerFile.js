.replace("my","your");

console.log("the content of this file is");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("dele2.txt",text);