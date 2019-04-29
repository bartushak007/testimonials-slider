import React from "react";
import Slide from "./Slide";

const ContentBox = ({ url, name, status, story, titleStory, afterwords }) => {
  return (
    <div className="testimonials__content-box">
      <Slide
        {...{ url, name, status }}
        slideClassName="testimonials__slide--mobile"
      />
      <h3 className="testimonials__content-box-title">{titleStory}</h3>
      <p className="testimonials__content-box-story">{story}</p>
      <span className="testimonials__content-box-afterwords">{afterwords}</span>
    </div>
  );
};

export default ContentBox;
