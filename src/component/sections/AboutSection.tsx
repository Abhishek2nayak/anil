export default function About() {
  return (
    <section className="sec-cream" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }} className="about-grid">

        {/* Image */}
        <div style={{ borderRadius: "16px", overflow: "hidden", border: "2px solid var(--gold)" }}>
          <img src="/assets/bridal/1.jpeg" alt="Vijay Mehndi Thrissur Kerala bridal mehndi" style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }} />
        </div>

        {/* Text */}
        <div>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>About Us</p>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "var(--maroon-deep)", lineHeight: 1.2, marginBottom: "20px" }}>
            Vijay Mehndi Thrissur
          </h2>

          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", color: "#4a2010", lineHeight: 1.9, marginBottom: "16px" }}>
            Trusted and professional mehndi artists based in Thrissur, Kerala. Known for elegant, dark, and long-lasting designs — we bring years of artistry and passion to every pattern we create.
          </p>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.92rem", color: "#4a2010", lineHeight: 1.9, marginBottom: "36px" }}>
            Specialising in bridal, Arabic, and traditional Kerala mehndi for weddings and special occasions. Doorstep service across Thrissur using 100% natural, skin-safe henna.
          </p>

          <div style={{ display: "flex", gap: "40px" }}>
            {[["10,000+","Happy Clients"],["10+","Years Exp."],["4.9★","Rating"]].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", color: "var(--maroon-deep)" }}>{v}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", color: "#7a3020", letterSpacing: "0.06em", marginTop: "2px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important; gap:40px !important;}}`}</style>
    </section>
  );
}
