const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body); // Extract form data
    const { name, email, message } = data;

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtpout.europe.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "info@wtfit.co.in", // Your email
        pass: process.env.GODADDY_EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <info@wtfit.co.in>`, // Sender address
      to: "info@wtfit.co.in", // Recipient address
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send email.",
        error: error.message,
      }),
    };
  }
};
