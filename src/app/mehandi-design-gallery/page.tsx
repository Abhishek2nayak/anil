"use client";

import { useState, useMemo } from "react";
import imagesData, { CategoryType } from "@/api";

const categories: { key: CategoryType; label: string }[] = [
  { key: "bridal", label: "Bridal" },
  { key: "traditional", label: "Traditional" },
  { key: "babyshower", label: "Baby Shower" },
  { key: "arabic", label: "Arabic" },
  { key: "legs", label: "Legs" },
  { key: "fullhands", label: "Full Hands" },
  { key: "portrait", label: "Portrait" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<CategoryType>("bridal");

  const images = useMemo(
    () => imagesData.filter((img) => img.category === active),
    [active]
  );

  return (
    <main style={{ paddingTop: "70px", minHeight: "100vh", background: "#1a0504" }}>

      {/* Header */}
      <div style={{ padding: "64px 24px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>
          Gallery
        </p>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3.2rem)", color: "#fff", marginBottom: "32px" }}>
          Mehndi Design Gallery
        </h1>

        {/* Category Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "8px 18px",
                borderRadius: "6px",
                border: active === cat.key ? "none" : "1px solid rgba(200,150,12,0.3)",
                background: active === cat.key ? "var(--gold)" : "transparent",
                color: active === cat.key ? "#1a0504" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px" }}>
        {images.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-ui)" }}>
            No images in this category yet.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "12px" }}>
            {images.map((img, i) => (
              <div key={i} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(200,150,12,0.15)" }}>
                <img
                  src={img.img}
                  alt={img.alt}
                  style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
