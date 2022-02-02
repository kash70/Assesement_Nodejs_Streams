
const fs = require("fs");
data = '';


const myReadStream = fs.createReadStream("readMe2.txt",'utf-8');

myReadStream.on('data', (chunk) => {
   console.log("new chunk received");
   data += chunk;
});
myReadStream.on('end',() => {
   // console.log(data);
});
myReadStream.on('error', err => {
   console.log(err.stack);
});

