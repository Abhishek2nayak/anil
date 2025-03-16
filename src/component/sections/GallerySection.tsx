"use client";

import Section from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { API_Response, fetchGoogleSheetData } from "@/app/getGoogleSheetData";
import imagesData, { ServiceImage } from "@/api";

type ImageCardProps = {
  src: string;
  alt: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="w-80">
      <img
        className="w-full  object-cover rounded-lg"
        style={{ height: "400px" }}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default function Gallery() {
  const services: ServiceImage[] = useMemo(() => {
    const categoryMap = new Map();

    // Group images by category and store only 2 per category
    imagesData.forEach((image) => {
      if (!categoryMap.has(image.category)) {
        categoryMap.set(image.category, []);
      }
      if (categoryMap.get(image.category).length < 2) {
        categoryMap.get(image.category).push(image);
      }
    });

    return Array.from(categoryMap.values()).flat();
  }, []);

  return (
    <>
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Our Creations
        </h1>
        <p className="text-lg text-yellow-500/80 max-w-2xl mx-auto">
          Anil Mehndi Art specializes in exquisite mehndi designs, including
          bridal, Arabic, and traditional styles, perfect for weddings,
          festivals, and special occasions. Our skilled artists create
          intricate, long-lasting henna designs using high-quality, natural
          henna. Book your appointment today and adorn your hands with stunning
          mehndi art!
        </p>
      </div>

      <div className="flex flex-wrap gap-10 w-full justify-center items-center">
        {services.slice(0, 10).map((image, index) => (
          <ImageCard key={index} src={image.img} alt={image.alt} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Link href="/mehandi-design-gallery">
          <button
            className="px-6 py-3 text-yellow-500 font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group"
            style={{
              transform: "skewX(-20deg)", // Creates the parallelogram shape
              border: "2px solid #FFD700", // Golden border
              backgroundColor: "transparent", // Transparent background
            }}
          >
            <span className="relative z-10 text-yellow-500 block transform skewX(10deg) group-hover:text-slate-900 transition-all duration-300">
              See all Creations
              <ArrowRight className="ml-2 inline-block" />
            </span>
            {/* Golden background on hover */}
            <div
              className="absolute inset-0 bg-yellow-500 transform -skewX(-20deg) scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"
              style={{ zIndex: 0 }}
            ></div>
          </button>
        </Link>
      </div>
    </>
  );
}
