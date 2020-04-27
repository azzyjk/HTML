let fs = require('fs');
fs.readFile('./file/sample.txt', 'utf-8', function(err, data){
    console.log(data);
});