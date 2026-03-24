"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { createGHLContact, createGHLOpportunity } from "@/lib/ghl";

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
    _partial: z.boolean().optional(),
});

function createTransport() {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");

    if (!smtpUser || !smtpPass) throw new Error("Missing SMTP credentials");

    return nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: true,
        auth: { user: smtpUser, pass: smtpPass },
    });
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
    const validatedFields = formSchema.safeParse(formData);
    if (!validatedFields.success) {
        return { error: "Invalid form data" };
    }

    const { name, email, phone, company, platform, message } = validatedFields.data;

    try {
        const transporter = createTransport();
        const smtpUser = process.env.SMTP_USER!;

        const info = await transporter.sendMail({
            from: `"Mirage Tech AI" <${smtpUser}>`,
            to: "info@gomiragetech.com",
            replyTo: email,
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

        console.log("Contact email sent:", info.messageId);

        // Push to GHL — contact + opportunity
        try {
            const [firstName, ...lastNameParts] = name.split(" ");
            const ghlResult = await createGHLContact({
                firstName,
                lastName: lastNameParts.join(" "),
                email,
                phone,
                companyName: company,
                tags: ["Website Lead", "Contact Form", platform],
                customFields: { message_content: message },
            });

            if (ghlResult.success && ghlResult.contactId) {
                await createGHLOpportunity({
                    contactId: ghlResult.contactId,
                    name: `${name} — Contact Form`,
                    source: "Website Contact Form",
                });
            }
        } catch (ghlError) {
            console.error("[GHL] Non-blocking error:", ghlError);
        }

        return { success: true, data: { id: info.messageId } };
    } catch (error: any) {
        console.error("Contact form error:", error);
        return { error: error.message || "Failed to send" };
    }
}

// ─── Audit / Discovery Form ───────────────────────────────────────────────────
export async function sendAuditEmail(formData: z.infer<typeof auditFormSchema>) {
    const validatedFields = auditFormSchema.safeParse(formData);
    if (!validatedFields.success) {
        return { error: "Invalid form data" };
    }

    const {
        businessName,
        websiteUrl,
        industry,
        challenges,
        fullName,
        email,
        phone,
        specificNotes,
        _partial,
    } = validatedFields.data;

    // ── Push to GHL (always — partial or full) ────────────────────────────────
    try {
        const [firstName, ...lastNameParts] = fullName.split(" ");
        const tags = _partial
            ? ["Website Lead", "Early Capture"]
            : ["Website Lead", "Audit Request", "Full Submission", industry, ...challenges];

        const ghlResult = await createGHLContact({
            firstName,
            lastName: lastNameParts.join(" "),
            email,
            phone,
            companyName: businessName,
            website: websiteUrl,
            tags,
            customFields: {
                industry: industry || "Pending",
                challenges: challenges.length > 0 ? challenges.join(", ") : "Pending",
                specific_notes: specificNotes || "None",
            },
        });

        // Create Opportunity only on full submission
        if (!_partial && ghlResult.success && ghlResult.contactId) {
            await createGHLOpportunity({
                contactId: ghlResult.contactId,
                name: `${businessName} — AI Audit Request`,
                source: "Website Audit Form",
            });
        }
    } catch (ghlError) {
        console.error("[GHL] Audit non-blocking error:", ghlError);
    }

    // ── Early capture stops here ───────────────────────────────────────────────
    if (_partial) {
        return { success: true, message: "Lead captured in CRM" };
    }

    // ── Send email on full submission ─────────────────────────────────────────
    try {
        const transporter = createTransport();
        const smtpUser = process.env.SMTP_USER!;

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

        console.log("Audit email sent:", info.messageId);
        return { success: true, data: { id: info.messageId } };
    } catch (error: any) {
        console.error("Audit email error:", error);
        return { error: error.message || "Failed to send audit request" };
    }
}
