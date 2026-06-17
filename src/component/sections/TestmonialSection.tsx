interface TestimonialProps {
  name: string;
  feedback: string;
  rating: number;
}

export default function Testimonial({ name, feedback, rating }: TestimonialProps) {
  return (
    <div style={{ background: "#fff", borderRadius: "10px", padding: "24px", border: "1px solid rgba(43,10,8,0.08)", boxShadow: "0 1px 8px rgba(43,10,8,0.05)" }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" fill={i < rating ? "#C8960C" : "#e5e7eb"} width="16" height="16">
            <path d="M12 2.75l2.96 6 6.63.96-4.8 4.68 1.13 6.6L12 17.77 6.08 21l1.13-6.6-4.8-4.68 6.63-.96L12 2.75z" />
          </svg>
        ))}
      </div>

      <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.86rem", color: "#3a1008", lineHeight: 1.8, marginBottom: "18px" }}>
        &ldquo;{feedback}&rdquo;
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--maroon-deep)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, flexShrink: 0 }}>
          {name.charAt(0)}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "0.84rem", color: "var(--maroon-deep)" }}>{name}</div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", color: "#7a3020" }}>Thrissur, Kerala</div>
        </div>
      </div>
    </div>
  );
}
