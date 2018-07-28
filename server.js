const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
// const nodemailer = require('nodemailer');
const mailer = require('./mailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client'))
// app.use(express.static(__dirname + 'public'));

app.post('/subscribe', (req, res) => {

  if (!req.body.email || !req.body.host) {
    return res.status(400).send({ success: false, message: 'Bad request' })
  }

  downloadMessage = mailer.downloadMessage(req.body.host);
  subscriptionMessage = mailer.subscriptionMessage(req.body.email);

  mailer.sendEmail(downloadMessage, req.body.email)
  mailer.sendEmail(subscriptionMessage, process.env.RECEIPIENT_EMAIL)

  res.status(200).send({ success: true, message: 'Email sent' });
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
