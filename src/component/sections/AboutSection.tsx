import { Award, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-gradient-to-b from-[#3b140f] to-[#2a0e0a]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[YatraOne] text-[var(--light-yellow)] mb-6">
            About Prince Mehndi Madurai
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-white/80 font-[Poppins] mb-4">
            Prince Mehndi Madurai is a trusted and professional mehndi artist
            service in Madurai, known for elegant, dark, and long-lasting mehndi
            designs. We specialize in bridal, engagement, Arabic and Indo-Arabic
            mehndi for weddings and special occasions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-white/80 font-[Poppins]">
            We offer doorstep mehndi services across Madurai, ensuring a calm
            and comfortable experience for brides and families. Every design is
            handcrafted with care using 100% natural, skin-safe mehndi cones for
            rich colour and safety.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-5">
              <Award className="w-10 h-10 text-[var(--light-yellow)] mb-2" />
              <p className="text-2xl font-semibold text-white">12+</p>
              <p className="text-sm text-white/70">Years Experience</p>
            </div>

            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-5">
              <Heart className="w-10 h-10 text-[var(--light-yellow)] mb-2" />
              <p className="text-2xl font-semibold text-white">15,000+</p>
              <p className="text-sm text-white/70">Happy Brides</p>
            </div>

            <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-5">
              <Star className="w-10 h-10 text-[var(--light-yellow)] mb-2" />
              <p className="text-2xl font-semibold text-white">4.9</p>
              <p className="text-sm text-white/70">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
