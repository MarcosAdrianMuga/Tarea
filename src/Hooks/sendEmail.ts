import * as yup from "yup";

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
    phone: yup.number().typeError("Phone must be a number").min(10, "You are missing some numbers!").required(),
    message: yup.string().required("Message is a required field"),
  });

  return async (data: EmailData): Promise<string | null> => {
    try {
      await schema.validate(data);

      const response = await fetch(
        `https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        return "Thanks! We will be in touch!";
      } else {
        return response.statusText;
      }

      
    } catch (err) {
        if (err instanceof Error) {
          return err.message;
        } else {
          return "An unknown error occurred.";
        }
    }
  };
};

