"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    company: z.string().min(1),
    platform: z.string().min(1),
    message: z.string().min(10),
});


export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
    console.log("Server Action called with:", formData);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");

    if (!smtpUser || !smtpPass) {
        console.error("Missing SMTP credentials (SMTP_USER or SMTP_PASS)");
        return { error: "Server configuration error: Missing Email Credentials" };
    }

    const validatedFields = formSchema.safeParse(formData);

    if (!validatedFields.success) {
        console.error("Validation failed:", validatedFields.error);
        return { error: "Invalid form data" };
    }

    const { name, email, phone, company, platform, message } = validatedFields.data;

    try {
        console.log("Attempting to send email via SMTP (" + smtpHost + ")...");

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: true, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const info = await transporter.sendMail({
            from: `"Mirage Tech Website" <${smtpUser}>`, // sender address
            to: "info@gomiragetech.com", // Your receiving email
            replyTo: email, // Allow replying directly to the user
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Platform Interest:</strong> ${platform}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        console.log("Email sent successfully using Nodemailer:", info.messageId);
        return { success: true, data: { id: info.messageId } };
    } catch (error: any) {
        console.error("Unexpected Server error:", error);
        return { error: error.message || "Failed to send email" };
    }
}
