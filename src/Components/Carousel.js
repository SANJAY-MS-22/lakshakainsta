import React, { useState, useEffect, useRef } from 'react';
import './Car.css';
import img1 from '../assets/Image/img (1).jpeg';
import img2 from '../assets/Image/img (2).jpeg';
import img3 from '../assets/Image/img (3).jpeg';
import img4 from '../assets/Image/img (4).jpeg';
import img5 from '../assets/Image/img1 (1).jpeg';
import img6 from '../assets/Image/img1 (2).jpeg';
import img7 from '../assets/Image/img1 (3).jpeg';
import img8 from '../assets/Image/img1 (4).jpeg';
import img9 from '../assets/Image/img1 (5).jpeg';
import img10 from '../assets/Image/img1 (6).jpeg';
import img11 from '../assets/Image/img1 (7).jpeg';
import img12 from '../assets/Image/img1 (8).jpeg';
import img13 from '../assets/Image/img1 (9).jpeg';
import img14 from '../assets/Image/img1 (10).jpeg';
import img15 from '../assets/Image/img1 (11).jpeg';
import img16 from '../assets/Image/img1 (12).jpeg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, 
    img9, img10, img11, img12, img13, img14, img15, img16
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000); // change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 3 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 3) % images.length
    );
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div 
        className="carousel-inner" 
        style={{ transform: `translateX(-${(currentIndex / images.length) * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            className="carousel-item" 
            key={index} 
            style={{ 
              transform: `translateX(-${(currentIndex / images.length) * 100}%)`
            }}
          >
            <img 
              src={image} 
              alt={`Slide ${index}`} 
              className="carousel-image" 
            />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          onClick={handlePrev}
          className="carousel-control prev"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="carousel-control next"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
