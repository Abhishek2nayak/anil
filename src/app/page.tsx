"use client";
import About from "@/component/sections/AboutSection";
import Gallery from "@/component/sections/GallerySection";
import HeroSection from "@/component/sections/HeroSection";
import LocationSection from "@/component/sections/LocationSection";
import Service from "@/component/sections/ServiceSection";
import Testimonial from "@/component/sections/TestmonialSection";
import Section from "@/component/ui/SectionWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prince Mehandi Madurai</title>
        <meta
          name="description"
          content="Book the best Mehandi artists across Tamil Nadu, including Madurai and Coimbatore, for weddings, baby showers, and more. Professional designs using 100% organic Mehandi with no side effects."
        />
        <meta
          name="keywords"
          content="Mehandi artists Tamil Nadu, Mehandi artists Madurai, Mehandi artists Coimbatore, organic Mehandi designs, professional Mehandi artist, Tamil Nadu bridal Mehandi, baby shower Mehandi"
        />
        <meta name="author" content="Bridal Mehandi Art" />
        <meta
          property="og:title"
          content="Best Mehandi Artists in Tamil Nadu - Madurai, Coimbatore +15 more cities"
        />
        <meta
          property="og:description"
          content="Discover exquisite Mehandi services in Tamil Nadu, from weddings to baby showers. Expert Mehandi artists in Madurai, Coimbatore, and beyond. 100% organic designs."
        />
        <meta property="og:image" content="/assets/bridal.jpg" />
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <HeroSection />
      <About />
      <Service />
      <Gallery />
      <div className="p-10 " style={{ width: "100vw" }}>
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Customers Love Our Mehndi Art
          </h1>
          <p className="text-lg text-yellow-500/80 max-w-2xl mx-auto">
            Explore our exquisite **mehndi designs**, from **bridal mehndi** to
            **festive henna art**. We bring creativity and precision to every
            design, making your special moments even more memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Testimonial
            name="Anjali Kapoor"
            feedback="The mehndi design was exactly what I envisioned for my wedding. The artist's skill and professionalism made the experience truly memorable!"
            rating={5}
            reviewCount={5}
          />
          <Testimonial
            name="Priya Deshmukh"
            feedback="Amazing designs and exceptional attention to detail! My bridal mehndi turned out to be stunning, and everyone loved it. Highly recommended!"
            rating={5}
            reviewCount={5}
          />
          <Testimonial
            name="Riya Mehta"
            feedback="The artist was punctual, creative, and very friendly. The mehndi was not just beautiful but also lasted long. Would definitely book again!"
            rating={5}
            reviewCount={5}
          />
          <Testimonial
            name="Deepa Nair"
            feedback="Beautiful designs and a very professional approach! The mehndi artist made sure every pattern was perfect. Absolutely loved it!"
            rating={5}
            reviewCount={5}
          />
          <Testimonial
            name="Neha Sharma"
            feedback="I got my mehndi done for my sister’s wedding, and I couldn't be happier! The designs were intricate and the color turned out so rich."
            rating={5}
            reviewCount={5}
          />
          <Testimonial
            name="Kavita Rao"
            feedback="Such a talented artist! The mehndi was detailed and unique. Everyone at the wedding kept complimenting my hands!"
            rating={5}
            reviewCount={5}
          />
        </div>
      </div>

      <LocationSection />
    </>
  );
}
