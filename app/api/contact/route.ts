import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();

    const data = await resend.emails.send({
      from: 'Agency Contact <onboarding@resend.dev>', // Later you can use your own domain
      to: ['afnancheranthodika@gmail.com'], // Where you want to receive the messages
      subject: `New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {

    return NextResponse.json({ success: false,  error });
  }
}