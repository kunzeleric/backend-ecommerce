const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9fc7c75130a46c",
      pass: "7c60cc8b7a7965"
    }
  });

  module.exports = transport;