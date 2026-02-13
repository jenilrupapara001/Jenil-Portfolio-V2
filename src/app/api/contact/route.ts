import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Connect to SMTP Server
        // const transporter = nodemailer.createTransport({
        //   host: process.env.SMTP_HOST,
        //   port: parseInt(process.env.SMTP_PORT || '587'),
        //   secure: false, 
        //   auth: {
        //     user: process.env.SMTP_USER,
        //     pass: process.env.SMTP_PASS,
        //   },
        // });

        // await transporter.sendMail({
        //   from: process.env.SMTP_FROM,
        //   to: process.env.CONTACT_EMAIL,
        //   subject: `New Message from Portfolio: ${name}`,
        //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
        // });

        // Mock success for now
        console.log(`Received message from ${name} (${email}): ${message}`);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
