import "./Form.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";

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
    fullname: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().min(10, "You are missing some numbers!").required(),
    message: yup.string().required(),
  });

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
              alert("Thanks! we will be in touch!");
            } else {
              alert(response.statusText);
            }
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((validationError) => {
        alert(validationError);
      });
  });

  return (
    <form onSubmit={subir}>
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
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your phone number"
          {...register("phone")}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your message"
          {...register("message")}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
