import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromAddress = process.env.SMTP_FROM || 'no-reply@shadman.tech';
    const toAddress = process.env.CONTACT_TO || 'info@shadman.tech';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { ok: false, error: 'Email server is not configured. Missing SMTP env vars.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `New message from portfolio: ${name}`;
    const textBody = [
      `You have a new message from your portfolio contact form:`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject,
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 });
  }
}
