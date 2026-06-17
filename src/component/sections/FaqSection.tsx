"use client";
import { useState } from "react";

const faqs = [
  { q: "Do you provide home service in Thrissur?", a: "Yes, we offer doorstep mehndi service across Thrissur, Guruvayur, Irinjalakuda, Chalakudy, and Kunnamkulam. Our artist comes to your home or venue at your chosen time." },
  { q: "How long does bridal mehndi last?", a: "With proper aftercare, our bridal mehndi typically lasts 10–15 days. The stain darkens over 24–48 hours after application. Avoid water for the first 6 hours for the richest colour." },
  { q: "Is your henna safe for sensitive skin?", a: "Yes. We use 100% natural, chemical-free henna cones with no PPD or synthetic additives — safe for all skin types including sensitive skin." },
  { q: "What mehndi styles do you offer?", a: "Bridal Mehndi, Traditional Kerala Mehndi, Arabic Mehndi, Indo-Arabic, Engagement Mehndi, Baby Shower Mehndi, and Portrait Mehndi — each customised to your preference." },
  { q: "How do I book an appointment?", a: "Call or WhatsApp us on +91 93633 89140. We recommend booking 2–3 days in advance for weddings and bridal appointments." },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec-dark" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>FAQ</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#fff" }}>Common Questions</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(200,150,12,0.15)" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", textAlign: "left", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "0.9rem", color: open === i ? "var(--gold-light)" : "rgba(255,255,255,0.85)" }}>
                  {faq.q}
                </span>
                <span style={{ color: "var(--gold)", fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, display: "inline-block", transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
              </button>
              {open === i && (
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, paddingBottom: "20px" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
