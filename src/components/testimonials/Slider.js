import React from "react";
import Slide from "./Slide";

const Slider = ({ usersComments, currentSlide, setSlide }) => {
  const slideClassName = i =>
    `testimonials__slide ${
      currentSlide === i ? "testimonials__slide--is-active" : ""
    }`;

  return (
    <div className="testimonials__slider-container">
      <div
        className={"testimonials__slider"}
        style={{
          transform: `translateX(calc(${(-100 / 3) * currentSlide + 100 / 3}%))`
        }}
      >
        {usersComments.map(({ url, name, status }, i) => {
          return (
            <Slide
              slideClassName={slideClassName(i)}
              key={i}
              {...{ url, name, status, i, setSlide }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
