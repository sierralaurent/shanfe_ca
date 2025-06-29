import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, phone, email, homeAddress, mailingAddress, courses } = req.body;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Gmail address
      pass: process.env.EMAIL_PASS, // app password 
    },
  });


  const mailOptions = {
    from: `"Shanfe.ca" <${process.env.EMAIL_USER}>`,
    to: "mechal@shanfe.ca",
    subject: "New Shanfe Course Registration Form Submitted",
    html: `
      <h2>New Registration Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Home Address:</strong> ${homeAddress}</p>
      <p><strong>Mailing Address:</strong> ${mailingAddress}</p>
      <p><strong>Courses Selected:</strong><br/>${courses.map((c: string) => `- ${c}`).join("<br/>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Email send failed", err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
}