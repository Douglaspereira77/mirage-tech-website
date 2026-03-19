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

const auditFormSchema = z.object({
    businessName: z.string().min(1),
    websiteUrl: z.string().min(1),
    industry: z.string().min(1),
    challenges: z.array(z.string()),
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    specificNotes: z.string().optional(),
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
            from: `"Mirage Tech AI" <${smtpUser}>`, // sender address
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

export async function sendAuditEmail(formData: z.infer<typeof auditFormSchema>) {
    console.log("Audit Server Action called with:", formData);

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");

    if (!smtpUser || !smtpPass) {
        console.error("Missing SMTP credentials (SMTP_USER or SMTP_PASS)");
        return { error: "Server configuration error: Missing Email Credentials" };
    }

    const validatedFields = auditFormSchema.safeParse(formData);

    if (!validatedFields.success) {
        console.error("Audit Validation failed:", validatedFields.error);
        return { error: "Invalid form data" };
    }

    const { businessName, websiteUrl, industry, challenges, fullName, email, phone, specificNotes } = validatedFields.data;

    try {
        console.log("Attempting to send audit email via SMTP (" + smtpHost + ")...");

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: true,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const info = await transporter.sendMail({
            from: `"Mirage Tech AI" <${smtpUser}>`,
            to: "info@gomiragetech.com",
            replyTo: email,
            subject: `New AI Audit Request from ${businessName}`,
            html: `
        <h2>New Audit Request from Website</h2>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Website:</strong> ${websiteUrl}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Challenges:</strong> ${challenges.join(", ")}</p>
        <hr />
        <h3>Contact Info</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Specific Notes:</strong> ${specificNotes || "None"}</p>
      `,
        });

        console.log("Audit Email sent successfully:", info.messageId);
        return { success: true, data: { id: info.messageId } };
    } catch (error: any) {
        console.error("Audit Server error:", error);
        return { error: error.message || "Failed to send audit request" };
    }
}
