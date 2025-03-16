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

const About: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:+91 77300 01180"; // Replace with actual phone number
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="md:h-1/3 sm:h-[20%] h-[16%] md:w-[80%] sm:w-[90%] mx-auto">
          <img src="assets/grid_3.jpeg" alt="" />
        </div>
        <div className="relative md:w-[70%] w-[80%] mx-auto ">
          <div className="absolute md:-top-[7rem] -top-[4rem] flex flex-col items-center ">
            <div className="md:w-[50rem]  sm:w-[16rem] w-[10rem] flex justify-center">
              <img
                className="w-[500px] h-[500px] object-cover "
                style={{ borderRadius: "50%", overflow: "hidden" }}
                src="assets/profile_2.jpeg"
                alt="Profile"
              />
            </div>
            <h2 className="sm:text-5xl text-yellow-500 text-5xl font-bold font-serif mt-20 text-center">
              Ready to work with me?
            </h2>
            <p className="text-center text-md mt-6 text-yellow-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium
            </p>
            <div className="text-center mt-10">
              <button
                onClick={handleCall}
                className="px-6 py-3 text-yellow-500 font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group"
                style={{
                  transform: "skewX(-20deg)",
                  border: "2px solid #FFD700",
                  backgroundColor: "transparent",
                }}
              >
                <span className="relative z-10 text-yellow-500 block transform skewX(0deg) group-hover:text-red-500 transition-all duration-300">
                  Enquiry <PhoneCall className="ml-2 inline-block" />
                </span>
                <div
                  className="absolute inset-0 bg-yellow-500 transform -skewX(-10deg) scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-300"
                  style={{ zIndex: 0 }}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="py-20 md:px-20 lg:px-20 ">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            {/* Heading */}

            <h3
              className="mb-4 text-3xl font-bold text-yellow-500 section-title"
              data-aos="fade-down"
            >
              Capturing Moments That Last Forever
            </h3>
            <p
              className="mb-8 max-w-3xl text-yellow-800 mx-auto"
              data-aos="fade-down"
            >
              With over a decade of experience in professional photography,
              we've mastered the art of storytelling through our lens. Our
              passion lies in capturing authentic moments and turning them into
              timeless memories.
            </p>

            {/* About Cards Section */}
            {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"> */}
            {/* Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "5★", text: "Top Rated Service" },
                { label: "50+", text: "Unique Designs" },
                { label: "3000+", text: "Happy Clients" },
                { label: "10+", text: "Years Experience" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-800 bg-yellow-500 border border-yellow-200 p-6 text-center"
                >
                  <h4 className="mb-2 text-3xl font-bold text-black-500">
                    {item.label}
                  </h4>
                  <p className="text-red-800">{item.text}</p>
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
