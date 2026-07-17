import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for contact messages (swap for MongoDB/Atlas in production)
const messages = [];

// Email transporter — sends a notification to EMAIL_TO whenever the
// contact form is submitted. Requires EMAIL_USER/EMAIL_PASS (a Gmail
// App Password) to be set in backend/.env. If they're missing, the
// server still runs and stores messages, but email sending is skipped.
const canSendEmail = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

const transporter = canSendEmail
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  : null;

if (!canSendEmail) {
  console.warn(
    "EMAIL_USER / EMAIL_PASS not set — contact form messages will be stored but no email will be sent. See backend/.env.example."
  );
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "nanthakumar-portfolio-backend" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };
  messages.push(entry);

  console.log("New contact message:", entry);

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <p>You received a new message from your portfolio contact form.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      });
    } catch (err) {
      console.error("Failed to send contact email:", err.message);
      // Message is already saved above, so we don't fail the request —
      // just let the sender know their message was received.
    }
  }

  res.status(201).json({ success: true, message: "Message received. Thank you!" });
});

app.get("/api/contact", (req, res) => {
  // Simple endpoint to view stored messages (remove or protect in production)
  res.json({ count: messages.length, messages });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
