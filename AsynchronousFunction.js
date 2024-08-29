function PrintUp(n) {
    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

// //The below two functions are asynchronous
setTimeout(PrintUp, 1000);
// // setInterval(PrintUp,1000);
console.log("sum");

// another asyncronous function is readFile()

let fs = require("fs");

fs.readFile("Class.js", "utf-8", function(err, data) {
    console.log(data);
})