// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) {
      res.status(500).send(err);
    }
  })
});

app.get('/data', (req, res) => {
  res.status(200).json(jsonData);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
