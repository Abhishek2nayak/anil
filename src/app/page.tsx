"use client";
import About from "@/component/sections/AboutSection";
import FaqSection from "@/component/sections/FaqSection";
import Gallery from "@/component/sections/GallerySection";
import HeroSection from "@/component/sections/HeroSection";
import LocationSection from "@/component/sections/LocationSection";
import Service from "@/component/sections/ServiceSection";
import Testimonial from "@/component/sections/TestmonialSection";
import WhyChooseUs from "@/component/sections/WhyChooseUs";

const testimonials = [
  { name: "Anjana Krishnan", feedback: "I got my bridal mehndi done by Vijay and I am absolutely delighted. The design was exactly what I wanted and the colour turned out so dark and rich. Highly recommended in Thrissur!", rating: 5 },
  { name: "Priya Nair", feedback: "Amazing designs and exceptional attention to detail! My bridal mehndi was stunning, everyone at the wedding kept complimenting. The artist was so professional and friendly.", rating: 5 },
  { name: "Deepa Menon", feedback: "Booked Vijay Mehndi for my daughter's engagement and the result was beyond our expectations. Traditional Kerala style done beautifully. The henna colour lasted almost two weeks!", rating: 5 },
  { name: "Remya Suresh", feedback: "The artist came to our home in Guruvayur on time and was very professional. The Arabic mehndi design was intricate and lovely. Will definitely book again!", rating: 5 },
  { name: "Aswathy Pillai", feedback: "Got my mehndi done for Onam and it was perfect! Beautiful traditional patterns using natural henna. No itching or side effects. Great service at a reasonable price.", rating: 5 },
  { name: "Sneha Varma", feedback: "Such a talented artist! The bridal mehndi was detailed and unique. Everyone at the wedding kept asking who did my mehndi. Thank you Vijay Mehndi Thrissur!", rating: 5 },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Service />
      <WhyChooseUs />
      <Gallery />

      {/* Testimonials */}
      <section className="sec-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Reviews</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#fff" }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "20px" }}>
            {testimonials.map((t) => (
              <Testimonial key={t.name} name={t.name} feedback={t.feedback} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <LocationSection />
    </>
  );
}
