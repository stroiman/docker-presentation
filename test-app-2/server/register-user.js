const nodemailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT } = process.env;

if (!SMTP_HOST) {
  console.error("Missing SMTP_HOST env variable");
  process.exit(1);
};
if (!SMTP_PORT) {
  console.error("Missing SMTP_PORT env variable")
  process.exit(1);
};

let transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
});

const registerUser = async email => {
  let mailOptions = {
    from: '"Docker Test Application" <sender@example.com>',
    to: email,
    subject: 'Email confirmation',
    text: 'Thank you for signing up. Click somewhere to confirm your e-mail address',
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending mail", error);
        return reject(error);
      }
      console.log("Message sent: %s", info.messageId);
      resolve();
    });
  });
}

module.exports = registerUser;
