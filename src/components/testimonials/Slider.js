import React from "react";
import Slide from "./Slide";

const Slider = ({ usersComments, currentSlide, setSlide }) => (
  <div className="testimonials__slider-container">
    <div
      className={"testimonials__slider"}
      style={{
        transform: `translateX(calc(${(-100 / 3) * currentSlide + 100 / 3}%))`
      }}
    >
      {usersComments.map(({ url, name, status }, i) => {
        const slideClassName = `testimonials__slide ${
          currentSlide === i ? "testimonials__slide--dark" : ""
        }`;

        return (
          <Slide
            key={i}
            {...{ url, name, status, slideClassName, i, setSlide }}
          />
        );
      })}
    </div>
  </div>
);

export default Slider;
