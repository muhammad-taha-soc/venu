require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { fullName, companyName, title, email, contactNumber } = req.body;

  // Create a transporter for Nodemailer (make sure to configure with your SMTP provider)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Custom SMTP host
    port: process.env.SMTP_PORT, // Custom SMTP port (587 for TLS)
    secure: true, // Set true if using SSL (465), false if using TLS (587)
    auth: {
      user: process.env.EMAIL_USER, // Use the email from the .env file
      pass: process.env.EMAIL_PASS, // Use the password from the .env file
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Send to the user's email
    subject: "Welcome to the Pre-Launch Beta!",
    text: `
            Thank you for signing up for our Pre-Launch Beta!

            Here are your details:
            - Full Name: ${fullName}
            - Company Name: ${companyName}
            - Title: ${title}
            - Email: ${email}
            - Contact Number: ${contactNumber || "Not provided"}

            We are excited to have you on board!
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
