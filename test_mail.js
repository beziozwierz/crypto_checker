const nodemailer = require('nodemailer')
require('dotenv').config(); //read variables from .env file

const transport = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_FROM_APP_PASSWORD
  }
});

function send_mail(){
    const mailOptions = {
      from: process.env.MAIL_FROM_ALIAS,
      to: process.env.MAIL_TO,
      subject: `Test mail`,
      text: `FOO BAR`,
    };
  
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(error);
      }
    });
}

send_mail();