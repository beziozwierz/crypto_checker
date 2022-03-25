const logger = require('./logger')
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_FROM_PASSWORD
  }
});

function send_mail(coin_name, old_price, new_price){
  const diff = ((new_price - old_price) / new_price * 100)

  const mailOptions = {
    from: 'Crypto Notification',
    to: process.env.MAIL_TO,
    subject: `Price change of '+${coin_name}`,
    text: `Price change of ${coin_name}. Was ${old_price}, is: ${new_price}. Difference: ${diff}%. Tracking new price.`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    logger.log_mail(coin_name)
  });
}

exports.send_mail = send_mail
