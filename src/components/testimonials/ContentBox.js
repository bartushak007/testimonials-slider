import React from "react";

const ContentBox = ({ story, titleStory, afterwords }) => {
  return (
    <div className="testimonials__content-box">
      <h3 className="testimonials__content-box-title">{titleStory}</h3>
      <p className="testimonials__content-box-story">{story}</p>
      <span className="testimonials__content-box-afterwords">{afterwords}</span>
    </div>
  );
};

export default ContentBox;
