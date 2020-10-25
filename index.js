'use strict';

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome Home Sanitarium Dooooode!!!');
});

app.get('/country', (req, res) => {
  res.send(`${process.env.COUNTRY}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
