
const nodeMailer = require("nodemailer");
 
exports.sendEmailWithNodemailer = (req, res, emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "athomsen2639@gmail.com", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
      pass: "iolmdzoxmsutyfye", // MAKE SURE THIS PASSWORD IS YOUR GMAIL APP PASSWORD WHICH YOU GENERATED EARLIER
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
 
  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message sent: ${info.response}`);
      return res.json({
        message: `Email has been sent to your email. Follow the instruction to activate your account`,
      });
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
};

// const nodeMailer = require("nodemailer");

// exports.sendEmailWithNodemailer = (req, res, emailData) => {
//     const transporter = nodeMailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         requireTLS: true,
//         auth: {
//             user: "athomsen2639@gmail.com", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
//             pass: "awjdovubibgmsdvv", // MAKE SURE THIS PASSWORD IS YOUR GMAIL APP PASSWORD WHICH YOU GENERATED EARLIER, "your_app_specific_gmail_password"
//         },
//         tls: {
//             ciphers: "SSLv3",
//         },
//     });

//     return transporter
//         .sendMail(emailData)
//         .then((info) => {
//             console.log(`Message sent: ${info.response}`);
//             return res.json({
//                 message: `Email has been sent to your email. Follow the instruction to activate your account`,
//             });
//         })
//         .catch((err) => console.log(`Problem sending email: ${err}`));
// };