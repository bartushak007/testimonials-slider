import { useState, useEffect } from "react";

const useSlider = (slides, delay = 4000, doSlide = true) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const length = slides.length;

  useEffect(() => {
    if (doSlide) {
      const interval = setInterval(() => {
        if (goRight) {
          setCurrentSlide(currentSlide + 1);
          currentSlide === length - 3 && setGoRight(!goRight);
        } else {
          setCurrentSlide(currentSlide - 1);
          currentSlide === 2 && setGoRight(!goRight);
        }
      }, delay);

      return () => clearInterval(interval);
    }
  }, [currentSlide, length, delay, doSlide, goRight]);

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
