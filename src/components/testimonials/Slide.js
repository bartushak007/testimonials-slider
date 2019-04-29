import React from "react";

const Slide = ({ url, name, status, slideClassName, setSlide, i }) => {
  const onClick = () => setSlide(i);

  return (
    <div className={slideClassName} onClick={onClick}>
      <div className="testimonials__user-avatar">
        <span className="testimonials__avatar">img</span>
      </div>
      <div className="testimonials__user-info">
        <h4 className="testimonials__autor">{name}</h4>
        <span className="testimonials__status testimonials__status--bold">
          Status
        </span>
        <span className="testimonials__status"> {status}</span>
      </div>
    </div>
  );
};

export default Slide;
