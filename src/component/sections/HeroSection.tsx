"use client";

import { MOBILE_NUMBER, WHATSAPP_URL } from "@/contstant";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#1a0504 0%,#2b0a08 60%,#3a1008 100%)",
      paddingTop: "70px",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* subtle pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='40' cy='40' rx='14' ry='26' stroke='%23C8960C' stroke-width='0.5' fill='none' opacity='0.06' transform='rotate(25 40 40)'/%3E%3C/svg%3E\")", backgroundSize: "80px 80px", pointerEvents: "none" }} />

      <div className="hero-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center", width: "100%", position: "relative", zIndex: 1 }}>

        {/* Left */}
        <div>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
            📍 Thrissur, Kerala
          </p>

          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.6rem,7vw,5rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", marginBottom: "8px" }}>
            Welcome To
          </h1>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.6rem,7vw,5rem)", fontWeight: 400, lineHeight: 1.1, color: "var(--gold-light)", marginBottom: "28px" }}>
            Vijay Mehndi Thrissur
          </h1>

          <p style={{ fontFamily: "var(--font-ui)", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "36px", maxWidth: "440px" }}>
            Professional bridal &amp; Arabic mehndi designs in Thrissur. 100% natural henna. Doorstep service across Kerala.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
            <a href={`tel:${MOBILE_NUMBER}`} className="btn-gold" style={{ padding: "14px 30px" }}>
              📞 Call Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "0.9rem", padding: "14px 28px", borderRadius: "8px", textDecoration: "none" }}>
              💬 WhatsApp
            </a>
          </div>

          {/* Simple stat row */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[["10,000+","Happy Brides"],["10+","Years Exp."],["100%","Natural Henna"]].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--gold-light)" }}>{v}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", marginTop: "2px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right photos */}
        <div className="hero-photos" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "10px", height: "520px" }}>
          <div style={{ gridRow: "1/3", borderRadius: "14px", overflow: "hidden", border: "2px solid rgba(200,150,12,0.3)" }}>
            <img src="/assets/bridal/1.jpeg" alt="Bridal mehndi Thrissur" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: "10px", overflow: "hidden", border: "1.5px solid rgba(200,150,12,0.2)" }}>
            <img src="/assets/bridal/2.jpeg" alt="Arabic mehndi Thrissur" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: "10px", overflow: "hidden", border: "1.5px solid rgba(200,150,12,0.2)" }}>
            <img src="/assets/bridal/3.jpeg" alt="Traditional mehndi Kerala" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){ .hero-inner{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:899px){ .hero-photos{ display:none !important; } }
      `}</style>
    </section>
  );
}
