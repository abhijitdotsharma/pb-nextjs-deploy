// @ts-nocheck
import nodemailer from "nodemailer";
import User from "@/model/User";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    await User.findByIdAndUpdate(userId, {
      verifyToken: hashedToken,
      verifyTokenExpiry: Date.now() + 86400000,
    });

    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: "sharma.abhijit2050@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html:
        emailType === "VERIFY"
          ? `<p>Click 
      <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> 
      to "verify your email" or copy and paste the link below in your browser. 
      <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`
          : `<p>Click 
      <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">here</a> 
      to "RESET your password" or copy and paste the link below in your browser. 
      <br> ${process.env.DOMAIN}/resetpassword?token=${hashedToken}
      </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
