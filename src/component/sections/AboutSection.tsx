import Image from "next/image";
import { Award, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="relative overflow-hidden mt-16 text-yellow-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Information */}
        <div className="z-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <h2 className="my-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-yellow-500 drop-shadow-lg">
            About Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-yellow-500  ">
            At Anil Mehandi Art, we have experienced Mehandi artists who bring
            creativity and elegance to every design. We offer home service,
            bridal Mehandi, and professional artistry to create your perfect
            look. Our team is skilled in blending traditional and modern
            designs, ensuring each client gets a unique and beautiful
            experience. Plus, we use 100% homemade organic Mehandi to ensure the
            best quality and safety for your skin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-800 mx-auto mb-2 drop-shadow-lg" />
              <p className="font-semibold text-2xl">10+ Years</p>
              <p className="text-lg">Experience</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-yellow-800 mx-auto mb-2 drop-shadow-lg" />
              <p className="font-semibold text-2xl">500+</p>
              <p className="text-lg">Happy Brides</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-800 mx-auto mb-2 drop-shadow-lg" />
              <p className="font-semibold text-2xl">5 Star</p>
              <p className="text-lg">Rating</p>
            </div>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="w-full h-full flex justify-center">
          <img
            src="assets/profile_2.jpeg"
            alt="Mehandi Artist at Work"
            className="object-cover object-top w-full h-full max-h-[500px] border-4 border-yellow-500 rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
