"use client";
import Link from "next/link";
import { useMemo } from "react";
import imagesData, { ServiceImage } from "@/api";

export default function Gallery() {
  const photos: ServiceImage[] = useMemo(() => {
    const seen = new Map<string, ServiceImage[]>();
    imagesData.forEach((img) => {
      if (!seen.has(img.category)) seen.set(img.category, []);
      if ((seen.get(img.category)?.length ?? 0) < 2) seen.get(img.category)?.push(img);
    });
    return Array.from(seen.values()).flat();
  }, []);

  return (
    <section className="sec-cream" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Our Work</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "var(--maroon-deep)" }}>Mehndi Design Gallery</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "12px", marginBottom: "36px" }}>
          {photos.slice(0,10).map((img, i) => (
            <div key={i} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(43,10,8,0.1)" }}>
              <img src={img.img} alt={img.alt} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>

        <Link href="/mehandi-design-gallery" className="btn-outline-maroon" style={{ fontSize: "0.85rem" }}>
          View Full Gallery →
        </Link>
      </div>
    </section>
  );
}
