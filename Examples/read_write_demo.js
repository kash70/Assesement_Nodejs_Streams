const http = require("http"); 
const fs = require("fs");
data = '';
const myReadStream = fs.createReadStream("readMe2.txt",'utf-8');
const myWriteStream = fs.createWriteStream("writeMe.txt");


myReadStream.on('data', (chunk) => {
   console.log("new chunk received");
   myWriteStream.write(chunk);
});


