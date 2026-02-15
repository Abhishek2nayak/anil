"use client";

import Section from "../ui/SectionWrapper";
import Link from "next/link";

export default function LocationSection() {
  return (
    <div className="py-12 px-6">
      <h2 className="text-yellow-500 text-5xl font-bold text-center mb-8">
        Our Location
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 max-w-lg text-yellow-500 space-y-4 pl-10">
          <h3 className="text-2xl font-semibold text-yellow-600">
            📍 Tamil Nadu
          </h3>
          <p className="text-lg text-yellow-500 leading-relaxed">
            We offer the **best mehandi designs in Tamil Nadu**, bringing
            professional mehandi artists to your doorstep. Whether it's a
            wedding, engagement, or festive celebration, we ensure stunning
            designs and a great experience.
          </p>
          <p className="text-lg  leading-relaxed">
            Book your appointment today and make your special moments even more
            memorable! 🌿✨
          </p>

          {/* Book Now Button */}
          <Link
            href="/booknow"
            className="inline-block px-8 py-3 rounded-lg bg-yellow-500 text-white font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 shadow-md"
          >
            Book Your Appointment
          </Link>
        </div>

        {/* Larger Map Section */}
        <div className="flex-1 w-full h-[450px] shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0731504467026!2d78.14056707579161!3d9.92786599017386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50076c7c087%3A0x76798c62ed304192!2sCDR%20mall!5e0!3m2!1sen!2sin!4v1770921687363!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
