import { useState, useEffect } from "react";

const useSlider = slides => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  useEffect(() => {
    const interval = setInterval(
      () =>
        currentSlide < length - 1
          ? setCurrentSlide(currentSlide + 1)
          : setCurrentSlide(0),
      2000
    );

    return () => clearInterval(interval);
  }, [currentSlide, length]);

  const nextSlide = () =>
    currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);

  const prevSlide = () => currentSlide && setCurrentSlide(currentSlide - 1);

  return {
    currentSlide,
    nextSlide,
    prevSlide
  };
};

export default useSlider;
