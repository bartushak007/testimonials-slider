import React from "react";
import Slide from "./Slide";

const Slider = ({ usersComments, currentSlide }) => (
  <div className="testimonials__slider-container">
    <div
      className={"testimonials__slider"}
      style={{ transform: `translateX(calc(${(-100 / 3) * currentSlide}%))` }}
    >
      {usersComments.map(({ url, name, status }, i) => (
        <Slide key={i} {...{ url, name, status }} />
      ))}
    </div>
  </div>
);

export default Slider;
