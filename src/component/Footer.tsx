"use client";
import Link from "next/link";
import { EMAIL_ID, EMAIL_MAILTO_LINK, FACEBOOK_URL, INSTAGRAM_URL, MOBILE_NUMBER, WHATSAPP_URL } from "@/contstant";

export default function Footer() {
  return (
    <footer style={{ background: "#0e0302", borderTop: "1px solid rgba(200,150,12,0.25)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 32px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "56px", marginBottom: "48px" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <img src="./logo.png" alt="Vijay Mehndi Thrissur" width={44} height={44} style={{ borderRadius: "50%", border: "1.5px solid rgba(200,150,12,0.4)" }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1.2 }}>
                Vijay Mehndi<br />
                <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-ui)", fontWeight: 400, color: "rgba(255,255,255,0.35)", letterSpacing: "0.16em" }}>THRISSUR · KERALA</span>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, maxWidth: "260px", marginBottom: "20px" }}>
              Traditional mehndi artistry brought to your doorstep in Thrissur, Kerala. 100% natural henna. Bridal, Arabic, and Kerala styles.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(200,150,12,0.18)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.6)" stroke="none"/>
                </svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(200,150,12,0.18)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.6)">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(200,150,12,0.18)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.6)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.336-1.509A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.034-1.389l-.361-.215-3.741.981.998-3.648-.235-.374A9.795 9.795 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Bridal Mehndi","Arabic Mehndi","Engagement Mehndi","Kerala Traditional","Baby Shower","Leg Mehndi"].map((s) => (
                <li key={s}><Link href="/mehandi-services" style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href={`tel:${MOBILE_NUMBER}`} style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(200,150,12,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                {MOBILE_NUMBER}
              </a>
              <a href={EMAIL_MAILTO_LINK} style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(200,150,12,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {EMAIL_ID}
              </a>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(200,150,12,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Thrissur, Kerala
              </span>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(200,150,12,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                Mon–Sun · 8 AM – 9 PM
              </span>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Vijay Mehndi Thrissur. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>Thrissur · Kerala · India</p>
        </div>
      </div>

      <style>{`@media(max-width:700px){.footer-grid{grid-template-columns:1fr !important; gap:36px !important;}}`}</style>
    </footer>
  );
}
