"use client";

import { MOBILE_NUMBER } from "@/contstant";
import Link from "next/link";
import { useState } from "react";

interface HeroBox {
  id: string;
  media: {
    type: "video" | "image";
    src: string;
  };
  title?: string;
  subtitle?: string;
}

export default function HeroSection() {
  const [heroBoxes] = useState<HeroBox[]>([
    {
      id: "box-1",
      media: {
        type: "video",
        src: "/assets/videos/top-mehandi-artist-madurai-1.mp4",
      },
      title: "Top Mehandi Artist Madurai",
    },
    {
      id: "box-2",
      media: {
        type: "image",
        src: "/assets/bridal/1.jpeg",
      },
    },
    {
      id: "box-3",
      media: {
        type: "video",
        src: "/assets/videos/top-mehandi-artist-madurai-2.mp4",
      },
      title: "Top Mehandi Artist Madurai",
    },
    {
      id: "box-4",
      media: {
        type: "image",
        src: "/assets/bridal/2.jpeg",
      },
      title: "Top Mehandi Artist Madurai",
    },
    {
      id: "box-5",
      media: {
        type: "image",
        src: "/assets/bridal/3.jpeg",
      },
      title: "Top Mehandi Artist Madurai",
    },
    {
      id: "box-6",
      media: {
        type: "video",
        src: "/assets/videos/top-mehandi-artist-madurai-3.mp4",
      },
    },
  ]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden hero-section">
      {/* Main Grid Background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-8 z-0">
        {heroBoxes.map((box, index) => (
          <div
            key={box.id}
            className={`relative overflow-hidden rounded-xl border border-white/10 bg-black/50 aspect-square
            ${index > 1 ? "hidden md:block" : ""}
          `}
          >
            {box.media.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={box.media.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={box.media.src}
                alt="Shivam Mehandi Hyderabad Bridal Mehndi Design"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Central Content */}
      <div className="hero-overlay relative z-20 h-screen flex flex-col justify-center items-center text-center px-4 md:px-8">
        {/* SEO Optimized H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 max-w-4xl leading-tight">
          Best Bridal Mehndi Artist
          <br />
          <span className="text-[var(--light-yellow)]">in Madurai</span>
        </h1>

        {/* SEO Subtitle */}
        <p className="text-white/75 text-base md:text-lg max-w-2xl mb-8">
          Prince Mehndi Madurai offers professional bridal, engagement & Arabic
          mehndi designs with dark, long-lasting colour and clean finishing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={`tel:${MOBILE_NUMBER}`}
            className="px-8 py-3 border border-white/40 text-white rounded-lg
            hover:border-white/70 transition backdrop-blur-sm
            hover:bg-white/10 text-center"
          >
            📞 Call for Booking
          </a>

          <Link
            href="mehandi-services"
            className="hidden sm:block px-8 py-3 bg-white text-black font-semibold
            rounded-lg hover:bg-white/90 transition"
          >
            View Mehndi Services
          </Link>
        </div>

        {/* Trust Stats */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          {[
            { value: "15,000+", label: "Happy Brides" },
            { value: "12+", label: "Years Experience" },
            { value: "100%", label: "Skin-Safe Cone" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition"
            >
              <div className="text-xl md:text-2xl font-bold text-[var(--light-yellow)] mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
