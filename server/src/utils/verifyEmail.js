import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const contactEmail = process.env.NODEMAILER_USER;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

const generateVerificationTemplate = (
  email,
  fname,
  lname,
  verificationOTP,
  contactEmail
) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Email</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: grid;
        place-content: center;
        font-family: "Segoe UI", Arial, sans-serif;
        background-color: #fff;
      }

      .container {
        max-width: 600px;
        background-color: #fefefe;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }

      header {
        padding: 20px;
        color: #fff;
      }

      header h1 {
        color: #ff385c;
        font-size: 30px;
        font-weight: 700;
      }

      .message {
        width: 100%;
        padding: 20px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }

      .message h2,
      .message h3 {
        margin-bottom: 10px;
      }

      .message p {
        line-height: 1.5;
        margin-bottom: 10px;
      }

      .message p span {
        color: #ff385c;
        font-weight: 600;
      }

      .message .note {
        font-weight: 600;
      }

      .message .contact-us {
        font-weight: 600;
        text-decoration: none;
      }

      .message .otp {
        text-align: center;
      }

      .message .reset-btn {
        display: inline-block;
        text-decoration: none;
        background-color: #ff385c;
        color: #fff;
        padding: 10px 20px;
        margin: 10px 0 20px;
        border-radius: 6px;
        transition: background-color 0.3s ease;
      }

      .message .reset-btn:hover {
        background-color: #fb2b50;
      }

      footer {
        text-align: center;
        padding: 20px;
        color: #333;
        font-size: 14px;
        font-weight: 600;
      }

      footer p {
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <header>
        <h1>Jai Kosha Foundation</h1>
      </header>
      <section class="message">
        <h2>Welcome to Jai Kosha Foundation.!</h2>
        <h3>Dear ${fname} ${lname},</h3>
        <p>
          We’re excited to welcome you to <span>Jai Kosha Foundation</span>. Before we can get started, we need to verify your email address. Please use the OTP below to confirm your email address ${email}:
        </p>
          
        <h2 class="otp">${verificationOTP}</h2>

        <p class="note">
          Note: This OTP is only valid for 5 minutes.
        </p>
        <p>
          If you did not sign up for our service, please ignore this email.
          <br />
          Need further assistence?
          
          <a class="contact-us" href="mailto:${contactEmail}">Contact us</a>
        </p>
        <p>- Jai Kosha Team</p>
      </section>
      <footer>
        <p>Sent with &hearts; from Jai Kosha Foundation.</p>
        <p></p>
        <p>&copy; 2025 Mad Adz. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
`;
export const sendVerificationEmail = async (
  email,
  fname,
  lname,
  verificationOTP
) => {
  try {
    // const compiledTemplate = ejs.compile(verificationTemplate);
    // const renderedContent = compiledTemplate({
    //   clientBaseUrl,
    //   verification_token,
    //   fname,
    //   contactEmail,
    // });

    const renderedContent = generateVerificationTemplate(
      email,
      fname,
      lname,
      verificationOTP,
      contactEmail
    );
    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Verify Email",
      html: renderedContent,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    return { error };
  }
};
