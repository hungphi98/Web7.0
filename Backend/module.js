console.log('Include module.js');
const fs = require('fs');

// function readFile(){
//
// }

let readFile =() => {
    let result = fs.readFileSync('helloworld.txt','utf-8');
    console.log(`read file done ${result}`);
}

module.exports = {
    readFile
}
