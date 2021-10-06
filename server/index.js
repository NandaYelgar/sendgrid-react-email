//require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())

const sgMail = require('@sendgrid/mail');

const API_KEY = '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';
//  sgMail.setApiKey(API_KEY)
  //sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 // const msg = {
 //   to: ['ynanda.89@gmail.com'], // Change to your recipient
  //  from: 'smksolutions2@gmail.com', // Change to your verified sender
 //   subject: 'testing with sendgrid',
  //  text: 'first mail ',
  //  html: '<strong>first mail</strong>',
 // }

  app.get('/', (req, res) => {
      res.send('server is working')
  });

  app.get('/email',(req, res) => {
   
   // const { to, from, subject, text } = req.query;
   sgMail.setApiKey(API_KEY);
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   const msg = {
    to: 'ynanda.89@gmail.com', // Change to your recipient
    from: 'smksolutions2@gmail.com', // Change to your verified sender
    subject: 'testing with sendgrid',
    text: 'first mail ',
    html: '<strong>first mail</strong>',
  }

  sgMail.send(msg)
  .then((msg) => console.log('Email sent'));
 // })
 // .catch((error) => {
 //   console.error(error)
 // })
  });
  app.listen(3009, () => console.log("Running on Port 3009"))