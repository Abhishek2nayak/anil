import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Section from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import {
  API_Response,
  fetchGoogleSheetServicesData,
} from "@/app/getGoogleSheetData";
import imagesData, { ServiceImage } from "@/api";

export const serviceTypes = [
  "bridal",
  "baby_shower",
  "engagement",
  "arabic",
  "traditional",
  "leg",
  "party",
] as const;

type Category = (typeof serviceTypes)[number];

export type TService = {
  image: string;
  alt: string;
  title: string;
  price: string;
  description: string;
  type: Category;
};

export default function ServicesPage() {
  const services = useMemo(() => {
    const categoryMap = new Map<string, ServiceImage>();
    imagesData.forEach((image) => {
      if (!categoryMap.has(image.category)) {
        categoryMap.set(image.category, image);
      }
    });
    return Array.from(categoryMap.values());
  }, [imagesData]);

  return (
    <div>
      {/* Heading and Description */}
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-yellow-500/80 max-w-2xl mx-auto">
          Explore our wide range of services designed to meet your needs. From
          bridal to party makeup, we offer the best in class services to make
          your special moments even more memorable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex justify-center">
        <div className="grid w-[80%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.length > 0 ? (
            services.map((service, index) => (
              <Link href={"/mehandi-services"} key={index}>
                <div
                  key={index}
                  className={`w-[300px] m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <svg
                    className="absolute bottom-0 left-0 mb-8"
                    viewBox="0 0 375 283"
                    fill="none"
                    style={{ transform: "scale(1.5)", opacity: 0.1 }}
                  >
                    <rect
                      x="159.52"
                      y="175"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 159.52 175)"
                      fill="white"
                    />
                    <rect
                      y="107.48"
                      width="152"
                      height="152"
                      rx="8"
                      transform="rotate(-45 0 107.48)"
                      fill="white"
                    />
                  </svg>
                  <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div
                      className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{
                        background: "radial-gradient(black, transparent 60%)",
                        transform:
                          "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                        opacity: 0.2,
                      }}
                    ></div>
                    <img
                      className="relative w-100 rounded-lg"
                      src={service.img}
                      alt={service.alt}
                      style={{
                        maxHeight: "300px",
                        minHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="relative text-white px-6 pb-6 mt-6">
                    <div className="text-center">
                      <span className="block font-semibold text-xl text-yellow-500">
                        {service.title}
                      </span>
                      {/* <span className="block text-sm text-yellow-500/80 mt-2">
                      {service.description}
                    </span> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No services available.
            </p>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Link href="/mehandi-services">
          <button
            className="px-6 py-3 text-yellow-500 font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group"
            style={{
              transform: "skewX(-20deg)", // Creates the parallelogram shape
              border: "2px solid #FFD700", // Golden border
              backgroundColor: "transparent", // Transparent background
            }}
          >
            <span className="relative z-10 text-yellow-500 block transform skewX(10deg) group-hover:text-slate-900 transition-all duration-300">
              See all Services
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
    </div>
  );
}
