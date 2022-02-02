
const fs = require("fs");
data = 'hello';
const myWriteStream = fs.createWriteStream("writeMe.txt");

myWriteStream.write(data,'UTF8');

myWriteStream.end();

myWriteStream.on('finish', function() {
    console.log("Writing data completed.");
});
myWriteStream.on('error', function(err){
   console.log(err.stack);
});




