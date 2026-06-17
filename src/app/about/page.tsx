"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MOBILE_NUMBER } from "@/contstant";

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="py-20 md:px-20 lg:px-24" style={{ background: "linear-gradient(to bottom, #1a0a05, #2e0f08)" }}>
        <div className="container mx-auto px-4 space-y-24">

          {/* ABOUT VIJAY MEHNDI */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge">About Us</span>

              <h1
                className="mt-4 text-3xl md:text-4xl font-bold leading-snug"
                style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
              >
                Thrissur&rsquo;s Most Trusted Mehndi Artist
              </h1>

              <div className="mt-6 space-y-4 text-white/80 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  <strong className="text-white">Vijay Mehndi Thrissur</strong> has become a leading name in{" "}
                  <strong>bridal mehndi services in Thrissur, Kerala</strong>. From
                  traditional Kerala bridal designs to Arabic, Indo-Arabic, and Baby
                  Shower Mehndi, every stroke reflects elegance and precision.
                </p>

                <p>
                  We proudly use{" "}
                  <strong>100% natural, chemical-free henna</strong> to ensure
                  safe application and rich, long-lasting colour.
                </p>

                <p>
                  Our services are available across{" "}
                  <strong>Thrissur and nearby areas</strong> — including Guruvayur,
                  Irinjalakuda, Chalakudy, and Kunnamkulam — for weddings, Onam,
                  Vishu, Eid, and all festive celebrations.
                </p>
              </div>

              <Link
                href="/booknow"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition rounded-md"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                Book Your Mehndi Session
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image */}
            <div className="hidden md:flex justify-center">
              <img
                src="/assets/bridal/1.jpeg"
                alt="Vijay Mehndi Thrissur Kerala"
                className="rounded-xl w-80 h-96 object-cover border border-[var(--gold)]/30"
              />
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div>
            <span className="section-badge">Why Choose Us</span>

            <h2
              className="mt-4 text-3xl font-bold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
            >
              Experience. Artistry. Tradition.
            </h2>

            <div className="mt-10 space-y-4 max-w-4xl">
              {[
                "10+ Years of Experience — Leading mehndi artists in Thrissur with expertise in traditional Kerala and modern Arabic styles.",
                "Home Service Available — Enjoy personalised mehndi sessions at your convenience anywhere in Thrissur and nearby areas.",
                "100% Natural & Safe Henna — Chemical-free henna with deep, long-lasting colour and no side effects.",
                "Professional Artists — Skilled, punctual, and creative artists for every occasion.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="card-traditional flex gap-4 items-start p-4"
                >
                  <span className="text-[var(--gold)] font-bold">✓</span>
                  <p className="text-sm text-white/80" style={{ fontFamily: "var(--font-body)" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR VISION */}
          <div className="max-w-4xl">
            <span className="section-badge">Our Vision</span>

            <h2
              className="mt-4 text-3xl font-bold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
            >
              Celebrating Kerala Tradition Through Mehndi Art
            </h2>

            <p className="mt-6 text-base text-white/75 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Our mission is to promote the beauty of traditional Kerala henna
              art while blending it with modern creativity. We aim to give every
              client an unforgettable experience — where art meets culture and
              every design tells a story of joy and celebration.
            </p>

            <p className="mt-4 text-base text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              As one of the most loved mehndi artists in Thrissur, Vijay Mehndi
              continues to spread happiness, colour, and confidence across
              thousands of celebrations in Kerala.
            </p>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "4.9★", text: "Top Rated Service" },
              { label: "50+", text: "Unique Designs" },
              { label: "10,000+", text: "Happy Clients" },
              { label: "10+", text: "Years Experience" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl p-6 text-center shadow-md border border-[var(--gold)]/30"
                style={{ background: "rgba(200,150,12,0.1)" }}
              >
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
                >
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-white/70" style={{ fontFamily: "var(--font-ui)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
