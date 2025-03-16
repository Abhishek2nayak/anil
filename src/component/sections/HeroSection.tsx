"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["grid_1.png", "grid_2.png", "grid_3.png"];

export const mobile_number = "+917730001180";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoAdvanceRef: any = useRef(null);

  useEffect(() => {
    autoAdvanceRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoAdvanceRef.current);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20 z-0"></div>
      <div className="absolute inset-0 flex items-center justify-between z-10">
        <button
          className="p-2 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition"
          onClick={prevSlide}
        >
          <ChevronLeft size={30} className="text-white" />
        </button>
        <button
          className="p-2 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition"
          onClick={nextSlide}
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>
      <div
        className="relative w-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-[75vh] relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-1 rounded-full transition-colors ${
              currentSlide === index ? "bg-white/40" : "bg-white/20"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
