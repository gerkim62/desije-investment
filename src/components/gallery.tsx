"use client";

import { useState } from "react";
import Image from "next/image";

// Add your image URLs here
const images = Array.from({ length: 28 }, (_, i) => `/gallery/${i + 1}.jpg`);

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px]">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt="Gallery image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 
                   text-white p-2 rounded-full transition-colors duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 
                   text-white p-2 rounded-full transition-colors duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Thumbnail Navigation */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto 
                   scrollbar-hide max-w-[90%] px-2"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 
                       ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
