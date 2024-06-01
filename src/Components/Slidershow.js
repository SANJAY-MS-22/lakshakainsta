import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.webp';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const images = [slide3, slide4,slide2,slide5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 1000); 
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  const getDisplayedImages = () => {
    const totalImages = images.length;
    const firstImage = images[currentIndex % totalImages];
    const secondImage = images[(currentIndex + 1) % totalImages];
    const thirdImage = images[(currentIndex + 2) % totalImages];
    return [firstImage, secondImage, thirdImage];
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div className="carousel-inner">
        {getDisplayedImages().map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${currentIndex + index}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
          className="carousel-control prev"
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
          className="carousel-control next"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
