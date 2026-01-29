import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  category: string;
  message: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  product: "Product Inquiry",
  service: "Service Inquiry",
  education: "Education Inquiry",
  partnership: "Partnership Inquiry",
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, company, phone, category, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const categoryLabel = CATEGORY_LABELS[category] || category;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "contact@popcornsar.com";

    const htmlBody = `
      <h2>New Contact Inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold; width: 120px;">Name</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Company</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${escapeHtml(company || "-")}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${escapeHtml(phone || "-")}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">Category</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${escapeHtml(categoryLabel)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"PopcornSAR Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Website Inquiry] ${categoryLabel} - ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
