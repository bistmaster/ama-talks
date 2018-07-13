const express = require('express')
const app = express();
let fs = require('fs');

app.get('/hello', (req, res) => {
    fs.readFile('../files/demo.file1.txt', 'utf8')
        .then(function (data) {
            res.send('Hello World!')
        })
});

app.get('/hi', (req, res) => {
    res.send('Hi World!')
  });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});