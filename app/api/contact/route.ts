import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Compose and send the email
    const data = await resend.emails.send({
      from: "Abhishek Portfolio <onboarding@resend.dev>", // required verified sender
      to: ["abhishekus073@gmail.com"], // your receiving email
      subject: `Message from ${name} <${email}>`,
      replyTo: email,
      text: `
You received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
