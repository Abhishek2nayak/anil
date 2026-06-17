"use client";
import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="sec-cream" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>

        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Find Us</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "var(--maroon-deep)" }}>Our Location</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }} className="location-grid">

          <div>
            <h3 style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "1rem", color: "var(--maroon-deep)", marginBottom: "14px" }}>📍 Thrissur, Kerala</h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "#4a2010", lineHeight: 1.85, marginBottom: "24px" }}>
              We offer doorstep mehndi service across Thrissur and nearby areas — Guruvayur, Irinjalakuda, Chalakudy, Kunnamkulam, and Kodungallur.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              <a href="tel:9363389140" style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--maroon-deep)", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
                <span>📞</span> +91 93633 89140
              </a>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "#4a2010", display: "flex", alignItems: "center", gap: "10px" }}>
                <span>🕐</span> Open 7 days · 8 AM – 9 PM
              </span>
            </div>

            <Link href="/booknow" className="btn-gold" style={{ display: "inline-flex", fontSize: "0.88rem" }}>
              Book Appointment →
            </Link>
          </div>

          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(43,10,8,0.12)", height: "380px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62760.48907127!2d76.18619!3d10.52769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef7ff30fe4e1%3A0x8b8c32fcb78d4455!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Vijay Mehndi Thrissur"
            />
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.location-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
