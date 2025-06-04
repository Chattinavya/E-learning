import React, { useState } from 'react';
import './HeroCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/Images/image1.jpg',
  '/Images/image2.png',
  '/Images/image.jpg',
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous Slide">
          <FaChevronLeft />
        </button>

        <div className="carousel-image-box">
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            onError={(e) => (e.target.src = '/Images/placeholder.png')}
          />
        </div>

        <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next Slide">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
