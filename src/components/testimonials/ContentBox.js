import React from "react";

const ContentBox = ({ story, titleStory, afterwords }) => {
  return (
    <div className="testimonials__slide">
      <h3>{titleStory}</h3>

      <p className="testimonials__autor">{story}</p>
      <span>{afterwords}</span>
    </div>
  );
};

export default ContentBox;
