import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./Form.css"

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

  const schema = yup.object({
    fullname: yup.string().required("Full name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    phone: yup.number().typeError("Phone must be a number").min(10, "You are missing some numbers!").required(),
    message: yup.string().required("Message is a required field"),
  });

  const [error, setError] = useState<string | null>(null);
  const subir = handleSubmit((data) => {
    schema
      .validate(data)
      .then(() => {
        fetch(
          `https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((response) => {
            if (response.ok) {
              setError("Thanks! We will be in touch!");
            } else {
              setError(response.statusText);
            }
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((validationError) => {
        setError(validationError.message);
      });
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
