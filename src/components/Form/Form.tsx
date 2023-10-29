import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css"
import { useEmailSender } from "../../Hooks/sendEmail";

type FormData = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = useEmailSender(); 

  const [error, setError] = useState<string | null>(null);

  const subir = handleSubmit(async (data) => {
    const result = await sendEmail(data);

   if(result === "Thanks! We will be in touch!") {
    const { fullname, email, message } = data
    try {
      const res = await fetch('/Hooks/mailSender', {
        method: 'POST',
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
   }
    setError(result);
  });

  return (
    <form onSubmit={subir}>
      <h1 className="Co">Contact us</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your full name"
          {...register("fullname")}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your Email"
          {...register("email")}
          autoComplete="email"
        />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Enter your phone number"
          {...register("phone")}
          autoComplete="tel"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your message"
          {...register("message")}
        />
      </div>

      {errors !== null && (
  <p className={error === "Thanks! We will be in touch!" ? "okmessage" : "errormessage"}>{error}</p>
)}

      <button type="submit">Submit</button>
    </form>
  );
}
