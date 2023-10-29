// "use client"
import * as yup from "yup";
import emailjs from 'emailjs-com';


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

      // const MyEmail = process.env.EMAIL;

      const templateParams = {
        // from_name: `${data.email}`,
        to_name: `${data.email}`, 
        // subject: "Nuevo mensaje de contacto",
        from_name: `${data.fullname}`,

        message: `
          Email: ${data.email}
          Teléfono: ${data.phone}
          Mensaje: ${data.message}
        `,
      };

      emailjs.send('service_pcbl5mm', 'template_prhvw43', templateParams, 'V5ZtH95ZyGsUCQ3z6')
        .then(function(response) {
          console.log('Correo enviado con éxito', response.status, response.text);
        }, function(err) {
          console.log('Ocurrió un error.', err);
        });

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