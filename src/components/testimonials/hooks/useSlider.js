import { useState, useEffect } from "react";

const useSlider = (slides, delay = 4000, slide = true) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [doSlide, setDoSlide] = useState(slide);
  const length = slides.length;

  useEffect(() => {
    if (doSlide) {
      const interval = setInterval(
        () =>
          currentSlide < length - 1
            ? setCurrentSlide(currentSlide + 1)
            : setDoSlide(!doSlide),
        delay
      );

      return () => clearInterval(interval);
    }
  }, [currentSlide, length, delay, doSlide]);

  const nextSlide = () =>
    currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);

  const prevSlide = () => currentSlide && setCurrentSlide(currentSlide - 1);

  const setSlide = id => setCurrentSlide(id);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide
  };
};

export default useSlider;
