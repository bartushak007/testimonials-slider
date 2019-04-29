import React from "react";
import Slider from "./Slider";
import useSlider from "./hooks/useSlider";
import ContentBox from "./ContentBox";

import "./testimonials.scss";

const Testimonials = ({ usersComments }) => {
  const { currentSlide, nextSlide, prevSlide } = useSlider(usersComments);

  return (
    <div>
      <div className="testimonials">
        <div>
          <button onClick={prevSlide}>prev</button>
        </div>
        <Slider {...{ usersComments, currentSlide }} />
        <div>
          <button onClick={nextSlide}>next</button>
        </div>
      </div>
      <ContentBox {...usersComments[currentSlide]} />
    </div>
  );
};

export default Testimonials;
