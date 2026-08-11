import nodemailer from 'nodemailer';

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== 'false';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is missing. Please set SMTP_HOST, SMTP_USER and SMTP_PASSWORD.');
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return transporter;
}

export async function sendMail(options: {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const from = process.env.SMTP_USER;

  const t = getTransporter();

  return t.sendMail({
    from: `"JSSC Website" <${from}>`,
    to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}
