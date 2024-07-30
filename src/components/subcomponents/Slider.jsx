import React, { useState, useEffect } from 'react';


const Slider = ({ images, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
      slideInterval = setInterval(goToNext, autoSlideInterval);
    }
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, autoSlide, autoSlideInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


//   console.log(images)
  return (
    <div className="slider" onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}>
      <div className="left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &#10095;
      </div>
      <div className="slider-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
