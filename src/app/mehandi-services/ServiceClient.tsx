"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import imagesData, { CategoryType, ServiceImage } from "@/api";
import { MOBILE_NUMBER, WHATSAPP_URL } from "@/contstant";

const serviceTypes: { key: CategoryType; label: string }[] = [
  { key: "bridal", label: "Bridal" },
  { key: "traditional", label: "Traditional" },
  { key: "babyshower", label: "Baby Shower" },
  { key: "arabic", label: "Arabic" },
  { key: "legs", label: "Legs" },
  { key: "fullhands", label: "Full Hands" },
  { key: "portrait", label: "Portrait" },
];

const serviceInfo: Record<CategoryType, { title: string; desc: string; features: string[] }> = {
  bridal: {
    title: "Bridal Mehndi",
    desc: "Make your wedding day unforgettable with elaborate full-hand bridal mehndi. Our artists craft intricate Kerala and Arabic bridal designs personalised for every bride.",
    features: ["Full hand & leg coverage","Personalised design consultation","2–3 hour premium session","Dark, long-lasting colour","Traditional Kerala & Arabic styles"],
  },
  traditional: {
    title: "Traditional Kerala Mehndi",
    desc: "Classic geometric and floral patterns rooted in Kerala tradition, perfect for Onam, Vishu, and family celebrations.",
    features: ["Authentic Kerala patterns","Festive & cultural designs","Suitable for all ages","Quick application","Natural henna paste"],
  },
  babyshower: {
    title: "Baby Shower Mehndi",
    desc: "Celebrate a new arrival with joyful, delicate designs. Light and festive patterns with mother-and-child motifs.",
    features: ["Gentle festive designs","Quick application","Baby & floral motifs","Safe for sensitive skin","Family-friendly styles"],
  },
  arabic: {
    title: "Arabic Mehndi",
    desc: "Bold floral vines and open-space patterns in the Arabic style — modern, striking, and perfect for contemporary celebrations.",
    features: ["Bold geometric vines","Fast-drying formula","Modern aesthetic","Ideal for events & photoshoots","Indo-Arabic fusion available"],
  },
  legs: {
    title: "Leg & Feet Mehndi",
    desc: "Elegant ankle and foot designs that complement your bridal look. From delicate anklets to full leg coverage.",
    features: ["Ankle & feet detailing","Full leg coverage","Matching hand patterns","Comfortable application","Various complexity levels"],
  },
  fullhands: {
    title: "Full Hands Mehndi",
    desc: "Complete wrist-to-fingertip coverage with intricate palm, finger, and back-of-hand patterns showcasing the finest artistry.",
    features: ["Wrist-to-fingertip coverage","Intricate palm designs","Detailed finger patterns","Premium henna quality","Professional finishing"],
  },
  portrait: {
    title: "Portrait Mehndi",
    desc: "A unique art form — portraits and personalised motifs incorporated into your mehndi for a one-of-a-kind keepsake.",
    features: ["Custom portrait integration","Personalised design elements","Perfect for special occasions","Creative consultation included","Artistic masterpiece"],
  },
};

export default function Service() {
  const searchParams = useSearchParams();
  const initial = (searchParams.get("category") as CategoryType) || "bridal";
  const [tab, setTab] = useState<CategoryType>(initial);

  const images: ServiceImage[] = useMemo(() => imagesData.filter((i) => i.category === tab), [tab]);
  const info = serviceInfo[tab];

  return (
    <main style={{ paddingTop: "70px", minHeight: "100vh", background: "#1a0504" }}>

      {/* Page header */}
      <div style={{ background: "linear-gradient(135deg,#1a0504,#2b0a08)", padding: "56px 24px 40px", borderBottom: "1px solid rgba(200,150,12,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>Services</p>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff" }}>
            Professional Mehndi Services in Thrissur
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Category tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "48px" }}>
          {serviceTypes.map((s) => (
            <button key={s.key} onClick={() => setTab(s.key)}
              style={{
                fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em",
                padding: "9px 20px", borderRadius: "6px", cursor: "pointer", transition: "all 0.2s",
                border: tab === s.key ? "none" : "1px solid rgba(200,150,12,0.3)",
                background: tab === s.key ? "var(--gold)" : "transparent",
                color: tab === s.key ? "#1a0504" : "rgba(255,255,255,0.6)",
              }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Service detail */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start", marginBottom: "56px" }} className="svc-detail-grid">

          {/* Image */}
          {images[0] && (
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1.5px solid rgba(200,150,12,0.25)" }}>
              <img src={images[0].img} alt={images[0].alt} style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
            </div>
          )}

          {/* Info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", color: "var(--gold-light)", marginBottom: "16px" }}>
              {info.title}
            </h2>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "28px" }}>
              {info.desc}
            </p>

            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                What&apos;s included
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {info.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontFamily: "var(--font-ui)", fontSize: "0.86rem", color: "rgba(255,255,255,0.7)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <circle cx="8" cy="8" r="8" fill="rgba(200,150,12,0.2)" />
                      <path d="M5 8l2 2 4-4" stroke="#C8960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={`tel:${MOBILE_NUMBER}`} className="btn-gold" style={{ padding: "12px 24px", fontSize: "0.85rem" }}>
                Book Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#25D366", color: "#fff", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "0.85rem", padding: "12px 22px", borderRadius: "8px", textDecoration: "none" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.336-1.509A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.389l-.361-.215-3.741.981.998-3.648-.235-.374A9.795 9.795 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* More images from this category */}
        {images.length > 1 && (
          <div>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
              More {info.title} Designs
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
              {images.slice(1).map((img, i) => (
                <div key={i} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(200,150,12,0.15)" }}>
                  <img src={img.img} alt={img.alt} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`@media(max-width:768px){.svc-detail-grid{grid-template-columns:1fr !important;}}`}</style>
    </main>
  );
}
