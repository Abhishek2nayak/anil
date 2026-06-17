"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { MOBILE_NUMBER, WHATSAPP_URL } from "@/contstant";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        style={{
          background: "rgba(26,5,4,0.97)",
          borderBottom: "1px solid rgba(200,150,12,0.3)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src="/logo.png" alt="Vijay Mehndi" width={40} height={40} style={{ borderRadius: "50%", border: "1.5px solid rgba(200,150,12,0.5)" }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1.1 }}>Vijay Mehndi</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.6rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Thrissur · Kerala</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "36px" }}>
            {["SERVICES", "GALLERY"].map((item) => (
              <button key={item} onMouseEnter={() => setActiveMenu(item)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", color: activeMenu === item ? "var(--gold)" : "rgba(255,255,255,0.7)", transition: "color 0.2s" }}>
                {item}
              </button>
            ))}
            <Link href="/about" style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>ABOUT</Link>
            <Link href="/booknow" className="btn-gold" style={{ padding: "9px 22px", fontSize: "0.78rem" }}>Book Now</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer" }}>
            <Menu size={22} />
          </button>
        </div>

        {/* Desktop dropdown */}
        {activeMenu && (
          <div onMouseLeave={() => setActiveMenu(null)} className="hidden md:block animate-fadeSlide"
            style={{ background: "#1a0504", borderBottom: "1px solid rgba(200,150,12,0.2)", boxShadow: "0 12px 28px rgba(0,0,0,0.5)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "40px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "14px" }}>Services</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Bridal Mehndi","Arabic Mehndi","Engagement Mehndi","Baby Shower Mehndi","Leg Mehndi","Portrait Mehndi"].map((s) => (
                    <li key={s} onClick={() => { router.push(`/mehandi-services?category=${s.toLowerCase().replace(/ mehndi/,"").replace(/ /,"-")}`); setActiveMenu(null); }}
                      style={{ cursor: "pointer", fontFamily: "var(--font-ui)", fontSize: "0.84rem", color: "rgba(255,255,255,0.65)" }}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "14px" }}>Designs</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Bridal","Traditional","Arabic","Babyshower","Legs","Fullhands"].map((s) => (
                    <li key={s} onClick={() => { router.push(`/mehandi-design-gallery?category=${s.toLowerCase()}`); setActiveMenu(null); }}
                      style={{ cursor: "pointer", fontFamily: "var(--font-ui)", fontSize: "0.84rem", color: "rgba(255,255,255,0.65)" }}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(200,150,12,0.2)" }}>
                <img src="/assets/bridal/1.jpeg" alt="Bridal mehndi" style={{ width: "100%", height: "140px", objectFit: "cover" }} />
                <div style={{ padding: "12px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", marginBottom: "6px" }}>Featured Design</p>
                  <Link href="/booknow" onClick={() => setActiveMenu(null)} style={{ fontSize: "0.75rem", color: "var(--gold)", textDecoration: "none" }}>Book this style →</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col" style={{ background: "#1a0504" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid rgba(200,150,12,0.2)" }}>
            <span style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontWeight: 700 }}>Vijay Mehndi Thrissur</span>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}><X size={22} /></button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            {["Services","Gallery"].map((item) => (
              <div key={item} style={{ borderBottom: "1px solid rgba(200,150,12,0.12)", marginBottom: "4px" }}>
                <button onClick={() => setMobileSubMenu(mobileSubMenu === item ? null : item)}
                  style={{ display: "flex", justifyContent: "space-between", width: "100%", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-ui)", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.08em", padding: "14px 0" }}>
                  {item.toUpperCase()}
                  <ChevronDown size={16} style={{ transform: mobileSubMenu === item ? "rotate(180deg)" : "none", transition: "transform 0.3s", color: "var(--gold)" }} />
                </button>
                {mobileSubMenu === item && (
                  <div style={{ paddingLeft: "16px", borderLeft: "2px solid var(--gold)", marginBottom: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {["Bridal","Traditional","Arabic","Babyshower","Legs","Portrait"].map((sub) => (
                      <Link key={sub} href={`${item === "Services" ? "/mehandi-services" : "/mehandi-design-gallery"}?category=${sub.toLowerCase()}`}
                        onClick={() => setMobileOpen(false)}
                        style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontFamily: "var(--font-ui)", fontSize: "0.85rem" }}>
                        {sub} Mehndi
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/about" onClick={() => setMobileOpen(false)} style={{ display: "block", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontFamily: "var(--font-ui)", fontWeight: 600, letterSpacing: "0.08em", padding: "14px 0", borderBottom: "1px solid rgba(200,150,12,0.12)", marginBottom: "24px" }}>ABOUT</Link>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={`tel:${MOBILE_NUMBER}`} className="btn-gold" style={{ justifyContent: "center" }}>📞 +91 {MOBILE_NUMBER}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "13px", borderRadius: "8px", background: "#25D366", color: "#fff", textDecoration: "none", fontFamily: "var(--font-ui)", fontWeight: 700 }}>💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
