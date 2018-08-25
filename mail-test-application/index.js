const nodemailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT } = process.env;

if (!SMTP_HOST) { throw new Error("Missing SMTP_HOST env variable") };
if (!SMTP_PORT) { throw new Error("Missing SMTP_PORT env variable") };


let transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
});

let mailOptions = {
  from: '"Docker Test Application" <sender@example.com>',
  to: '"Recipient" <receiver@example.com>',
  text: 'Hello from node-js application',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending mail", error);
    process.exit(1);
  }
  console.log("Message sent: %s", info.messageId);
  process.exit(0);
});
