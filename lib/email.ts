// Configuração de email com Nodemailer (opcional)
// Para usar, instale: pnpm add nodemailer @types/nodemailer

/*
import nodemailer from "nodemailer";

export const sendEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // Configure seu transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email para você receber o contato
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || "contato@techlog.com",
    subject: `[Site] ${data.subject}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Assunto:</strong> ${data.subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${data.message}</p>
    `,
    replyTo: data.email,
  };

  await transporter.sendMail(mailOptions);

  // Email de confirmação para o cliente
  const confirmationMail = {
    from: process.env.SMTP_USER,
    to: data.email,
    subject: "Recebemos sua mensagem - TechLog Sistemas",
    html: `
      <h2>Olá ${data.name},</h2>
      <p>Recebemos sua mensagem e entraremos em contato em breve!</p>
      <p><strong>Sua mensagem:</strong></p>
      <p>${data.message}</p>
      <br>
      <p>Atenciosamente,</p>
      <p><strong>TechLog Sistemas</strong></p>
    `,
  };

  await transporter.sendMail(confirmationMail);
};
*/

// Para usar o envio de email, descomente o código acima e adicione no .env.local:
// SMTP_HOST=smtp.gmail.com (ou seu provedor)
// SMTP_PORT=465
// SMTP_USER=seu-email@gmail.com
// SMTP_PASS=sua-senha-de-app
// CONTACT_EMAIL=contato@techlog.com
