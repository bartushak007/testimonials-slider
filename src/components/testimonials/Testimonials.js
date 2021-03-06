import React from "react";
import Slider from "./Slider";
import useSlider from "./hooks/useSlider";
import ContentBox from "./ContentBox";

import "./testimonials.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = ({ usersComments }) => {
  const { currentSlide, nextSlide, prevSlide, setSlide } = useSlider(
    usersComments
  );

  const ButtonControl = ({ go, faShape }) => (
    <button className="testimonials__arrow-btn" onClick={go}>
      <FontAwesomeIcon className="testimonials__arrow-svg" icon={faShape} />
    </button>
  );

  return (
    <div>
      <div className="testimonials">
        <div className="testimonials__slider-area">
          <div className="testimonials__button-container">
            <ButtonControl faShape={faAngleLeft} go={prevSlide} />
          </div>
          <Slider {...{ usersComments, currentSlide, setSlide }} />
          <div className="testimonials__button-container">
            <ButtonControl faShape={faAngleRight} go={nextSlide} />
          </div>
        </div>
        <div>
          {/* <Slider {...{ usersComments, currentSlide, setSlide }} /> */}
          <ContentBox {...usersComments[currentSlide]} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
