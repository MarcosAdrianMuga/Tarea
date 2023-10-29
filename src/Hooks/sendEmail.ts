"use client"
import * as yup from "yup";
import nodemailer from "nodemailer";

type EmailData = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
};

export const useEmailSender = () => {
  const schema = yup.object({
    fullname: yup.string().required("Full name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    phone: yup.string().required("Phone is a required field"),
    message: yup.string().required("Message is a required field"),
  });

  return async (data: EmailData): Promise<string | null> => {
    try {
      await schema.validate(data);

      const MyEmail = process.env.EMAIL;
      const pass = process.env.EMAIL_PASS;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: MyEmail,
          pass: pass,
        },
        secure: false,
        port: 5173,
        logger: true,
        tls: { rejectUnauthorized: false },
      });

      const mailOptions = {
        from: `${data.email}`,
        to: MyEmail, 
        subject: "Nuevo mensaje de contacto",
        text: `
          Nombre: ${data.fullname}
          Email: ${data.email}
          Teléfono: ${data.phone}
          Mensaje: ${data.message}
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Correo enviado con éxito");

      return "Thanks! We will be in touch!";
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      } else {
        return "An unknown error occurred.";
      }
    }
  };
};
