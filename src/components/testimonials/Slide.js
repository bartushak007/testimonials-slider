import React from "react";

const Slide = ({ url, alt, name, status, slideClassName, setSlide, i }) => {
  const onClick = () => setSlide(i);

  return (
    <div className={slideClassName} onClick={onClick}>
      <div className="testimonials__user-avatar">
        <img src={url} alt={alt} className="testimonials__avatar" img />
      </div>
      <div className="testimonials__user-info">
        <h4 className="testimonials__user-info-author">{name}</h4>
        <span className="testimonials__user-info-status testimonials__user-info-status--bold">
          Status
        </span>
        <span className="testimonials__user-info-status"> {status}</span>
      </div>
    </div>
  );
};

export default Slide;
