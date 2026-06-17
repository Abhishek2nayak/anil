"use client";
import { useMemo } from "react";
import Link from "next/link";
import imagesData, { ServiceImage } from "@/api";

export default function ServicesPage() {
  const services = useMemo(() => {
    const seen = new Map<string, ServiceImage>();
    imagesData.forEach((img) => { if (!seen.has(img.category)) seen.set(img.category, img); });
    return Array.from(seen.values());
  }, []);

  return (
    <section className="sec-dark" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>What We Offer</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#fff" }}>Our Mehndi Services</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "20px", marginBottom: "40px" }}>
          {services.map((service, i) => (
            <Link key={i} href="/mehandi-services" style={{ textDecoration: "none" }}>
              <div className="service-img-card">
                <img src={service.img} alt={service.alt} />
                <div className="label">{service.title}</div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/mehandi-services" className="btn-outline-gold" style={{ fontSize: "0.85rem" }}>
          View All Services →
        </Link>
      </div>
    </section>
  );
}
