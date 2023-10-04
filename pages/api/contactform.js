require('dotenv').config();
const nodemailer = require('nodemailer');

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const message = {
    to: 'bankrot.cntr@gmail.com',
    subject: `Запись на консультацию. Клиент ${req.body.valueName}`,
    text: `${req.body.valueText}. 
    Имя: ${req.body.valueName}, Телефон: ${req.body.valuePhone}`,
  };

  transporter.sendMail(message, (err, data) => {
    if (err) {
      console.log(err);
      res.send('error' + JSON.stringify(err));
    } else {
      console.log('mail send');
      res.send('success');
    }
  });
};
