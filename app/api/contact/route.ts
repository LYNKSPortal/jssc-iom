import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, event, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Subject: ${subject}`,
      event ? `Event: ${event}` : null,
      '',
      'Message:',
      message,
    ].filter(Boolean);

    await sendMail({
      subject: `[JSSC Contact Form] ${subject}`,
      text: lines.join('\n'),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
