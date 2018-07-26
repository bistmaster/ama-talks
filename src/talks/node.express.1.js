const express = require('express')
const app = express();


app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

app.get('/ama', (req, res) => {
  res.send('Hello AMA')
});


app.get('/hi', (req, res) => {
    res.send('Hi World!')
  });


app.listen(5000, () => {
  console.log('Example app listening on port 8000!')
});