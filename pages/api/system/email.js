const nodemailer = require('nodemailer');

export default function handler(req, res) {

  if (req.method !== 'POST') {
    res.status(405).send({ code: 405, message: 'Only POST requests allowed' })
    return
  }

  if (req.method === 'OPTIONS') {
    res.status(200).send({ code: 200, message: 'Only POST' })
    return
  }

  let body = JSON.parse(req.body);

  let message = {
    from: body.email,
    to: process.env.user+'@ya.ru',
    subject: 'Письмо с сайта AveTemp.ru',
    text: body.message,
  }

  let status = main(message).catch(console.error);

  status.then((status) => {
    if (status) {
      res.status(200).end(JSON.stringify({ code: 200, message: 'Success' }));
    } else {
      res.status(400).end(JSON.stringify({ code: 400, message: 'Error' }));
    }
  })
}

async function main(message) {
  let transporter = nodemailer.createTransport({
    host: process.env.email_host,
    port: Number(process.env.email_host),
    secure: true, 
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
  });

  let info = await transporter.sendMail(message);

  return true;
}