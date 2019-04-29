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

  return (
    <div>
      <div className="testimonials">
        <div>
          <button className="testimonials__arrow-btn" onClick={prevSlide}>
            <FontAwesomeIcon
              className="testimonials__arrow-svg"
              icon={faAngleLeft}
            />
          </button>
        </div>
        {/* <Slider {...{ usersComments, currentSlide, setSlide }} /> */}
        <div>
          <Slider {...{ usersComments, currentSlide, setSlide }} />
          <ContentBox {...usersComments[currentSlide]} />
        </div>
        <div>
          <button className="testimonials__arrow-btn" onClick={nextSlide}>
            <FontAwesomeIcon
              className="testimonials__arrow-svg"
              icon={faAngleRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
