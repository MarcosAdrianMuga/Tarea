import React, { useState } from "react";
import "./Carousel.css";
import { useTestimonials } from "../../Hooks/useTestimonials";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { testimonials } = useTestimonials();

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
  };

  console.log(testimonials, "hola");
  

  return (
    <div id="testimonials" className="pasa">
      <div className="carousel">
        <div
          className="carousel-content"
          style={{ transform: `translateX(-${currentIndex * 49}%)` }}
        >
          {testimonials.length && testimonials?.map((t, index) => (
            <div key={index} className="carousel-review">
              <div className="hijo">
                <img
                  src={t.avatar}
                  alt={`${t.fullName}'s avatar`}
                  className="image"
                />

                <div className="hijo2">
                  <h3 className="elh3">{t.fullName}</h3>
                  <p className="lugar">Warzaw, Poland</p>
                </div>
                <div className="puntos">
                  4.5
                  <svg
                    className="ml-2"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1891 5.41802L9.22187 4.84146L7.44844 1.24615C7.4 1.14771 7.32031 1.06802 7.22187 1.01959C6.975 0.897711 6.675 0.999273 6.55156 1.24615L4.77812 4.84146L0.810936 5.41802C0.701561 5.43365 0.601561 5.48521 0.524999 5.56334C0.432439 5.65847 0.381434 5.78646 0.383192 5.91918C0.38495 6.0519 0.439327 6.1785 0.534374 6.27115L3.40469 9.06959L2.72656 13.0211C2.71066 13.1131 2.72083 13.2076 2.75592 13.294C2.79102 13.3805 2.84963 13.4554 2.92511 13.5102C3.00059 13.565 3.08992 13.5976 3.18297 13.6042C3.27602 13.6108 3.36907 13.5913 3.45156 13.5477L7 11.6821L10.5484 13.5477C10.6453 13.5993 10.7578 13.6165 10.8656 13.5977C11.1375 13.5508 11.3203 13.293 11.2734 13.0211L10.5953 9.06959L13.4656 6.27115C13.5437 6.19459 13.5953 6.09459 13.6109 5.98521C13.6531 5.71177 13.4625 5.45865 13.1891 5.41802Z"
                      fill="#FEA250"
                    />
                  </svg>
                </div>
              </div>
              <p>{t.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="otrodiv">
        <button className="botonP1" onClick={prevSlide}></button>
        <button className="botonP2" onClick={nextSlide}></button>
      </div>
    </div>
  );
};

export default Carousel;
