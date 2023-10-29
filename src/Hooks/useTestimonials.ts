import { useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial"
    )
      .then((response) => response.json())
      .then((result: Testimonial[]) => {
        setTestimonials(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { testimonials };
};
