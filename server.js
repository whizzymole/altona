const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client'))
// app.use(express.static(__dirname + 'public'));

app.post('/subscribe', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.PASSWORD
    }
  });

  const message = `<div style="background: #fff; width: 100%; height: 100%; padding: 3rem 0; font-family: 'Georgia'">
    <div style="width: 50vw; background: #FFF; display: block; margin: 0 auto; padding: 0; border: 1px solid #c39a6e;">
      <div style=" background: #00bfa5;">
        <h2 style="color: white; text-align: center; line-height: 10vh; background: #c39a6e; margin: 0;">Altona Email Subscription</h2>
      </div>
      <div style="text-align: center; padding: 0.5rem;">
        <p style="font-size: 1rem;">Hello there,</p>
        <p style="font-size: 1rem;">Someone just downloaded your brochure</p>
        <p style="font-size: 1rem;">Here's their email: ${req.body.email}</p>
      </div>
    </div>
  </div>`

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECEIPIENT_EMAIL,
    subject: 'Altona Email Subscription',
    html: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log(`Email sent: ${info.response}`);
    return `Email sent: ${info.response}`;
  });

  res.status(200).send({ success: true, message: 'Email sent' });
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
