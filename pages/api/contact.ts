import type { NextApiRequest, NextApiResponse } from "next";
import type { ContactFormData, ContactResponse } from "@/types/contact";

// Função de validação de email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar os dados do formulário
const validateFormData = (data: ContactFormData): string | null => {
  if (!data.name || data.name.trim().length < 2) {
    return "Nome deve ter pelo menos 2 caracteres";
  }
  if (!data.email || !isValidEmail(data.email)) {
    return "Email inválido";
  }
  if (!data.subject || data.subject.trim().length < 3) {
    return "Assunto deve ter pelo menos 3 caracteres";
  }
  if (!data.message || data.message.trim().length < 10) {
    return "Mensagem deve ter pelo menos 10 caracteres";
  }
  return null;
};

// Função para enviar email usando Resend
const sendEmailResend = async (formData: ContactFormData) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY não configurada");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "TechLog Contato <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL || "seu-email@seudominio.com",
    replyTo: formData.email,
    subject: `[Site] ${formData.subject}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Assunto:</strong> ${formData.subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${formData.message}</p>
    `,
  });
};

// Função para enviar email usando SMTP Hostinger
const sendEmailSMTP = async (formData: ContactFormData) => {
  const nodemailer = await import("nodemailer");

  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    replyTo: formData.email,
    subject: `[Site] ${formData.subject}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Assunto:</strong> ${formData.subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${formData.message}</p>
    `,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  // Apenas método POST é permitido
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método não permitido",
    });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validar dados
    const validationError = validateFormData(formData);
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    // Escolher método de envio
    const emailMethod = process.env.EMAIL_METHOD || "console";

    if (emailMethod === "resend") {
      await sendEmailResend(formData);
    } else if (emailMethod === "smtp") {
      await sendEmailSMTP(formData);
    } else {
      // Modo console (desenvolvimento)
      console.log("📧 Novo contato recebido:");
      console.log("Nome:", formData.name);
      console.log("Email:", formData.email);
      console.log("Assunto:", formData.subject);
      console.log("Mensagem:", formData.message);
    }

    // Resposta de sucesso
    return res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    });
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
    });
  }
}
