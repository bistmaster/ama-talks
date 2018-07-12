let http = require('http');
let fs = require('fs');

fs.readFile('../files/demo.file1.txt', 'utf8', function(err, data) {
    console.log(' I am reading the ', data)
});