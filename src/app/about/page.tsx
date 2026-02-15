"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  Award,
  Users,
  Calendar,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { MOBILE_NUMBER } from "@/contstant";

const About: React.FC = () => {
  const handleCall = () => {
    window.location.href = `tel:${MOBILE_NUMBER}`;
  };
  return (
    <>
      <section id="about" className=" py-20 md:px-20 lg:px-24">
        <div className="container mx-auto px-4 space-y-24">
          {/* ABOUT THE HENNA VIBE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-sm uppercase tracking-wide text-yellow-600 font-semibold">
                About The Henna Vibe
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-yellow-600 leading-snug">
                Madurai’s Most Trusted Mehndi Artist Team
              </h2>

              <div className="mt-6 space-y-4 text-yellow-600 text-sm leading-relaxed">
                <p>
                  Founded by <strong>Arun</strong>, Prince Mehndi Madurai has
                  become a leading name in{" "}
                  <strong>bridal mehndi services in Madurai</strong>. From
                  traditional Indian bridal designs to Arabic, Mandala, and Baby
                  Shower Mehndi, every stroke reflects elegance and precision.
                </p>

                <p>
                  We proudly use{" "}
                  <strong>100% natural, chemical-free henna</strong> to ensure
                  safe application and rich, long-lasting color.
                </p>

                <p>
                  Our services are available across{" "}
                  <strong>Madurai and nearby areas</strong> for weddings, Karwa
                  Chauth, Eid, Diwali, and festive celebrations.
                </p>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-700 hover:bg-yellow-500 hover:text-black transition rounded-md">
                Book Your Mehndi Session
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div>
            <span className="text-sm uppercase tracking-wide text-yellow-600 font-semibold">
              Why Choose The Henna Vibe
            </span>

            <h3 className="mt-3 text-3xl font-bold text-red-500">
              Experience. Artistry. Perfection.
            </h3>

            <div className="mt-10 space-y-4 max-w-4xl">
              {[
                "12+ Years of Experience — Leading mehndi artists in Madurai with expertise in traditional and modern styles.",
                "Home Service Available — Enjoy personalized mehndi sessions at your convenience anywhere in Madurai.",
                "100% Organic & Safe Mehndi — Natural, chemical-free henna with deep, long-lasting color.",
                "Team of 15+ Skilled Artists — Professional and creative artists for every occasion.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white/5 text-white border-l-4 border-yellow-500 p-4 rounded-md shadow-sm"
                >
                  <span className="text-white font-bold">✓</span>
                  <p className="text-sm text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR VISION */}
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-wide text-white font-semibold">
              Our Vision
            </span>

            <h3 className="mt-3 text-3xl font-bold text-red">
              Celebrating Tradition Through Modern Mehndi Art
            </h3>

            <p className="mt-6 text-sm text-white-900 leading-relaxed">
              Our mission is to promote the beauty of traditional Indian henna
              art while blending it with modern creativity. We aim to give every
              client an unforgettable experience — where art meets culture and
              every design tells a story of joy and celebration.
            </p>

            <p className="mt-4 text-sm text-white-900 leading-relaxed">
              As one of the most loved mehndi artists in Madurai, The Henna Vibe
              continues to spread happiness, color, and confidence across
              thousands of celebrations.
            </p>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "5★", text: "Top Rated Service" },
              { label: "50+", text: "Unique Designs" },
              { label: "3000+", text: "Happy Clients" },
              { label: "12+", text: "Years Experience" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-yellow-500/90 rounded-xl p-6 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-black">{item.label}</h4>
                <p className="mt-2 text-sm text-red-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
