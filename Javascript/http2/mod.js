// This is the method in which we create our custom modules
console.log("This is module, so it prints whenever the module is called");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    name: "Shreyans",
    repo: "GitHub"
}
