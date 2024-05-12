import { useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

const staticTestimonials: Testimonial[] = [
  {
    avatar: "https://example.com/avatar1.jpg",
    fullName: "Ana Smith",
    testimonial:
      "Una experiencia increíble que definitivamente recomendaría. ¡El servicio al cliente fue excepcional!",
  },
  {
    avatar: "https://example.com/avatar2.jpg",
    fullName: "John Doe",
    testimonial:
      "Servicio excelente y atención al detalle en todo. ¡No podría haber pedido una mejor experiencia!",
  },
  {
    avatar: "https://example.com/avatar3.jpg",
    fullName: "Maria Gonzalez",
    testimonial:
      "Profesionalismo y calidad inigualables. Este servicio realmente superó mis expectativas.",
  },
  {
    avatar: "https://example.com/avatar4.jpg",
    fullName: "Lucas Martin",
    testimonial:
      "La eficiencia y cortesía del equipo me dejaron muy impresionado. ¡Altamente recomendado!",
  },
  {
    avatar: "https://example.com/avatar5.jpg",
    fullName: "Emma Brown",
    testimonial:
      "Rápido, fiable y sin complicaciones. Exactamente lo que necesitas de un servicio como este.",
  },
  {
    avatar: "https://example.com/avatar6.jpg",
    fullName: "Isabella Johnson",
    testimonial:
      "Me ayudaron cuando más lo necesitaba. Su soporte al cliente es de primera clase.",
  },
  {
    avatar: "https://example.com/avatar7.jpg",
    fullName: "Ethan Lee",
    testimonial:
      "Innovador y siempre un paso adelante en la tecnología. Me siento seguro y apoyado.",
  },
  {
    avatar: "https://example.com/avatar8.jpg",
    fullName: "Sophia Wilson",
    testimonial:
      "Nunca pensé que sería tan fácil. Me facilitaron cada paso del proceso.",
  },
];

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result: Testimonial[]) => {
        setTestimonials(result);
      })
      .catch((error) => {
        console.error(
          "Using static testimonials due to API error:",
          error.message
        );
        setError(error.message);
        setTestimonials(staticTestimonials);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { testimonials, isLoading, error };
};