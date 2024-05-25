const nodemailer = require('nodemailer');

// Configuración del servidor SMTP de Mailtrap
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "62d9db5227ac12",
      pass: "ccf80510594cca"
    }
  });

// Función para enviar correo
function sendEmail(email, subject, text, callback) {
    const mailOptions = {
        from: 'ch269297@gmail.com',
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, callback);
}

module.exports = sendEmail;

    