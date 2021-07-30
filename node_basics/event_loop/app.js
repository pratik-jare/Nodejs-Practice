const fs = require('fs');

const fileName = "target.txt"

// event loop
// fs.watch(fileName, () => console.log(' File  changed'));


// asyn program
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })


// sync program

const data = fs.readFileSync(fileName)

console.log(data.toString());


console.log('node async progmming');


