// Node modules : place where all modules related to a project kept
// Package : some files written by others which we use in our project

// npm : it helps to manage packages

// npm install slugify 1.3.5
// here 1: major, 3: minor, 5: patch(number of bugs fixed)
// npm install slugify ^1.3.5  .... ^ means exact that version install
// npm install slugify ~1.3.5  .... ~ any updated version if available
// npm view slugify version : to check the version installed

// npm install nodemon --save-dev                install or i : both can work
// npm install nodemon --global (to access the module from any of my folder)

// In dependencies of package.json, only local packages install there, not global packages like nodemon since it is for entire system

console.log("This is package");