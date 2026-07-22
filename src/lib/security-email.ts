import nodemailer from "nodemailer";

export async function sendPasswordChangeOtp(email: string, otp: string) {
  const user = process.env.GMAIL_USER || process.env.ADMIN_EMAIL || process.env.ADMIN_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD || process.env.googleapppassword;
  if (!user || !user.includes("@") || !appPassword) {
    throw new Error("Security email is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: appPassword.replaceAll(" ", "") },
  });
  await transporter.sendMail({
    from: `OrganoCity Security <${user}>`,
    to: email,
    subject: "Your OrganoCity password verification code",
    text: `Your verification code is ${otp}. It expires in 10 minutes. If you did not request this, keep your current password and secure your email account.`,
    html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto"><h2>Confirm your password change</h2><p>Enter this code in the OrganoCity admin:</p><div style="font-size:32px;font-weight:700;letter-spacing:8px;padding:18px;background:#f7f3e8;text-align:center">${otp}</div><p>This code expires in 10 minutes. If you did not request this, do not share the code.</p></div>`,
  });
}
