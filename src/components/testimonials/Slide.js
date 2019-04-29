import React from "react";

const Slide = ({ url, name, status }) => {
  return (
    <div className="testimonials__slide">
      <div>
        <span className="testimonials__avatar">img</span>
      </div>
      <div>
        <h4 className="testimonials__autor">{name}</h4>
        <span className="testimonials__status">
          <span lassName="testimonials__status testimonials__status--bold">
            Status{" "}
          </span>
          {status}
        </span>
      </div>
    </div>
  );
};

export default Slide;
