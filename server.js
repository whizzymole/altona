const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client'))
// app.use(express.static(__dirname + 'public'));

app.post('/subscribe', (req, res) => {
  console.log('email saved')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
