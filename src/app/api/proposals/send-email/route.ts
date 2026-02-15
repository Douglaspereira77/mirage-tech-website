import nodemailer from "nodemailer";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");

    if (!smtpUser || !smtpPass) {
        return NextResponse.json(
            { error: "Missing SMTP credentials" },
            { status: 500 }
        );
    }

    try {
        const { restaurantId, restaurantName, recipientEmail, subject, htmlContent } =
            await req.json();

        if (!recipientEmail || !subject || !htmlContent) {
            return NextResponse.json(
                { error: "Missing required fields: recipientEmail, subject, htmlContent" },
                { status: 400 }
            );
        }

        const brandedHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:0; background:#f4f4f5; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5; padding: 32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7C3AED, #4F46E5); padding: 32px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">Mirage Tech AI</h1>
              <p style="color:#e0d4fc; margin:8px 0 0; font-size:14px;">Smart Digital Solutions for Your Business</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 32px;">
              ${htmlContent}
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding: 0 32px 32px; text-align:center;">
              <a href="https://gomiragetech.com" style="display:inline-block; background:#7C3AED; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:8px; font-weight:bold; font-size:16px;">
                Learn More
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#1e1e2e; padding:24px 32px; text-align:center;">
              <p style="color:#a1a1aa; margin:0; font-size:12px;">
                Mirage Tech AI · Kuwait · <a href="https://gomiragetech.com" style="color:#7C3AED;">gomiragetech.com</a>
              </p>
              <p style="color:#71717a; margin:8px 0 0; font-size:11px;">
                You received this because your business listing was reviewed on Best of Kuwait.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: true,
            auth: { user: smtpUser, pass: smtpPass },
        });

        const info = await transporter.sendMail({
            from: `"Mirage Tech AI" <${smtpUser}>`,
            to: recipientEmail,
            subject,
            html: brandedHtml,
        });

        // Log to database
        try {
            await sql`
                INSERT INTO proposal_logs (restaurant_id, restaurant_name, email_sent, email_sent_at, proposal_content)
                VALUES (${restaurantId}, ${restaurantName}, TRUE, NOW(), ${htmlContent})
            `;
        } catch (dbErr) {
            console.error("Failed to log proposal send:", dbErr);
        }

        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error: unknown) {
        console.error("Send email error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
