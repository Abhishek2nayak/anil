const reasons = [
  { icon: "🌿", title: "100% Natural Henna", desc: "Pure, chemical-free henna cones. No side effects, rich dark colour, safe for all skin types." },
  { icon: "🏠", title: "Home Service", desc: "We come to you across Thrissur, Guruvayur, Irinjalakuda, Chalakudy and nearby areas." },
  { icon: "👰", title: "Bridal Specialists", desc: "Kerala bridal, Arabic and Indo-Arabic styles — every bride's dream design handled with care." },
  { icon: "✋", title: "10+ Years Experience", desc: "Over a decade of mehndi artistry across weddings, engagements and festive celebrations." },
  { icon: "⏰", title: "Always Punctual", desc: "We respect your schedule. Artists arrive on time and complete the design as agreed." },
  { icon: "💛", title: "Long-Lasting Colour", desc: "Henna stain that stays vibrant for 10–15 days with our simple aftercare guidance." },
];

export default function WhyChooseUs() {
  return (
    <section className="sec-cream" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>

        <div style={{ marginBottom: "52px" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Why Choose Us</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "var(--maroon-deep)" }}>
            Why Choose Vijay Mehndi?
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: "20px" }}>
          {reasons.map((r) => (
            <div key={r.title} style={{ display: "flex", gap: "16px", padding: "24px", background: "#fff", borderRadius: "10px", border: "1px solid rgba(43,10,8,0.08)", boxShadow: "0 1px 8px rgba(43,10,8,0.05)" }}>
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{r.icon}</span>
              <div>
                <h3 style={{ fontFamily: "var(--font-ui)", fontSize: "0.9rem", fontWeight: 700, color: "var(--maroon-deep)", marginBottom: "6px" }}>{r.title}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "#5c2015", lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
