import nodemailer from "nodemailer"
import nodemailMaligun from "nodemailer-mailgun-transport"

const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.MAILGUN_DOMAIN

const auth = {
  api_key: API_KEY,
  domain: DOMAIN
}

let transporter = nodemailer.createTransport(nodemailMaligun(auth))

const messageData = {
  from: 'Excited User <laslesVPN@gmail.com>',
  to: 'marcosadrianmuga@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

transporter.sendMail(messageData, function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log("MUY BIEN!!!!!");
  }
});

