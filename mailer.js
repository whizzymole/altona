require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = {
  sendEmail: function (message, email) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
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
  },
  downloadMessage: function (host) {
    return `<div style="background: #fff; width: 100%; height: 100%; padding: 3rem 0; font-family: 'Georgia'">
    <div style="width: 50vw; background: #FFF; display: block; margin: 0 auto; padding: 0; border: 1px solid #c39a6e;">
      <div style=" background: #00bfa5;">
        <h2 style="color: white; text-align: center; line-height: 10vh; background: #c39a6e; margin: 0;">Altona Brochure</h2>
      </div>
      <div style="text-align: center; padding: 0.5rem;">
        <p style="font-size: 1rem;">Hello there,</p>
        <p style="font-size: 1rem;">Here's your Altona brochure</p>
        <a style="padding: 0.7rem 2rem; background: #c39a6e; color: white; text-decoration: none; border-radius: 2px;" href="${host}/brochure.pdf">DOWNLOAD</a>
        <p style="padding: 0.5rem;"></p>
      </div>
    </div>
  </div>`;
  },
  subscriptionMessage: function (email) {
    return `<div style="background: #fff; width: 100%; height: 100%; padding: 3rem 0; font-family: 'Georgia'">
    <div style="width: 50vw; background: #FFF; display: block; margin: 0 auto; padding: 0; border: 1px solid #c39a6e;">
      <div style=" background: #00bfa5;">
        <h2 style="color: white; text-align: center; line-height: 10vh; background: #c39a6e; margin: 0;">Altona Email Subscription</h2>
      </div>
      <div style="text-align: center; padding: 0.5rem;">
        <p style="font-size: 1rem;">Hello there,</p>
        <p style="font-size: 1rem;">Someone just downloaded your brochure</p>
        <p style="font-size: 1rem;">Here's their email: ${email}</p>
      </div>
    </div>
  </div>`
  }
}
