"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { BRAND_NAME } from "@/contstant";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  const navActive = activeMenu || mobileOpen;
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* NAVBAR */}
      <nav
        className={`
          transition-all duration-300
          ${
            navActive
              ? "bg-gradient-to-b from-[#2a0d0a] to-[#1f0806]"
              : "bg-[#3b140f]/95 backdrop-blur"
          }
          border-b border-[#D4AF37]/50
          shadow-[0_6px_14px_-6px_rgba(0,0,0,0.7),0_10px_20px_-10px_rgba(212,175,55,0.45)]
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-[#f8e9bd]">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide hover:text-[#D4AF37] transition flex items-center gap-2"
          >
            <img src="/logo.png" alt="logo" width={50} height={50} />
            {BRAND_NAME}
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
            {["SERVICES", "DESIGN"].map((item) => (
              <button
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className={`relative transition hover:text-[#D4AF37] ${
                  activeMenu === item ? "text-[#D4AF37]" : ""
                }`}
              >
                {item}
              </button>
            ))}
            <button>
              <Link
                className="relative transition hover:text-[#D4AF37] hover:text-[#D4AF37]"
                href="/about"
              >
                ABOUT US
              </Link>
            </button>
            <Link
              href="/booknow"
              className="px-4 py-2 rounded-full border border-[#D4AF37]/70 hover:bg-[#D4AF37] hover:text-[#3b140f] transition"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={26} />
          </button>
        </div>

        {/* DESKTOP MEGA MENU */}
        {activeMenu && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-full left-0 w-full bg-gradient-to-b from-[#2a0d0a] to-[#1a0605] text-[#f8e9bd] hidden md:block
            border-b border-[#D4AF37]/40
            shadow-[0_12px_24px_-10px_rgba(0,0,0,0.8),0_16px_32px_-12px_rgba(212,175,55,0.45)]"
          >
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-4 gap-12 animate-fadeSlide">
              {activeMenu !== "SERVICES" && (
                <MenuColumn
                  title={activeMenu}
                  items={["All Designs", "All Services"]}
                  onClick={(item) => {
                    if (item === "All Designs") {
                      router.push("/mehandi-designs");
                    }
                    if (item === "All Services") {
                      router.push("/mehandi-services");
                    }
                  }}
                />
              )}

              <MenuColumn
                title="Services"
                items={[
                  "Traditional Mehandi",
                  "Babyshower Mehandi",
                  "Arabic Mehandi",
                  "Legs Mehandi",
                  "Fullhands Mehandi",
                  "Portrait Mehandi",
                ]}
                onClick={(item) => {
                  if (item === "Traditional Mehandi") {
                    router.push("/mehandi-services?category=traditional");
                  }
                  if (item === "Babyshower Mehandi") {
                    router.push("/mehandi-services?category=babyshower");
                  }
                  if (item === "Arabic Mehandi") {
                    router.push("/mehandi-services?category=arabic");
                  }
                  if (item === "Legs Mehandi") {
                    router.push("/mehandi-services?category=legs");
                  }
                  if (item === "Fullhands Mehandi") {
                    router.push("/mehandi-services?category=fullhands");
                  }
                  if (item === "Portrait Mehandi") {
                    router.push("/mehandi-services?category=portrait");
                  }
                }}
              />

              <MenuColumn
                title="Styles"
                items={[
                  "Bridal",
                  "Traditional",
                  "Babyshower",
                  "Arabic",
                  "Legs",
                  "Fullhands",
                  "Portrait",
                ]}
                onClick={(item) => {
                  if (item === "Bridal") {
                    router.push("/mehandi-design-gallery?category=bridal");
                  }
                  if (item === "Traditional") {
                    router.push("/mehandi-design-gallery?category=traditional");
                  }
                  if (item === "Babyshower") {
                    router.push("/mehandi-design-gallery?category=babyshower");
                  }
                  if (item === "Arabic") {
                    router.push("/mehandi-design-gallery?category=arabic");
                  }
                  if (item === "Legs") {
                    router.push("/mehandi-design-gallery?category=legs");
                  }
                  if (item === "Fullhands") {
                    router.push("/mehandi-design-gallery?category=fullhands");
                  }
                  if (item === "Portrait") {
                    router.push("/mehandi-design-gallery?category=portrait");
                  }
                }}
              />
              <FeaturedCard />
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE FULL SCREEN MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#2a0d0a] to-[#120403] text-[#f8e9bd] z-50 md:hidden flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-6 h-20 border-b border-[#D4AF37]/40 shrink-0">
            <span className="font-semibold tracking-widest text-[#D4AF37]">
              MENU
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-[#D4AF37]/10 transition"
            >
              <X size={26} />
            </button>
          </div>

          {/* Scrollable Menu */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10 text-lg">
            {["Services", "Gallery"].map((item) => (
              <div key={item}>
                {/* Parent */}
                <button
                  onClick={() =>
                    setMobileSubMenu(mobileSubMenu === item ? null : item)
                  }
                  className="flex justify-between items-center w-full uppercase tracking-widest py-2"
                >
                  <span>{item}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      mobileSubMenu === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenu */}
                {mobileSubMenu === item && (
                  <div className="mt-4 ml-4 space-y-3 text-base border-l border-[#D4AF37]/30 pl-5">
                    {[
                      "Bridal",
                      "Traditional",
                      "Babyshower",
                      "Arabic",
                      "Legs",
                      "Fullhands",
                      "Portrait",
                    ].map((sub) => (
                      <Link
                        key={sub}
                        href={`${mobileSubMenu === "Services" ? "/mehandi-services" : "/mehandi-design-gallery"}?category=${sub.toLowerCase().replace(" ", "-")}`}
                        className="block py-2 px-2 rounded-md text-[#f8e9bd]/90 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Bottom Links */}
            <div className="pt-8 space-y-6 border-t border-[#D4AF37]/40">
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block tracking-wide hover:text-[#D4AF37] transition"
              >
                About
              </Link>

              <Link
                href="/booknow"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3b140f] transition font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ===== Components ===== */

function MenuColumn({
  title,
  items,
  onClick,
}: {
  title: string;
  items: string[];
  onClick: (item: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs tracking-widest text-[#D4AF37] uppercase">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li
            key={item}
            className="hover:text-[#D4AF37] cursor-pointer transition"
            onClick={() => onClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.8)]">
      <img
        src="/grid_1.png"
        alt="Featured"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-sm mb-2">Featured Bridal Design</p>
        <Link href="/booknow" className="text-xs text-[#D4AF37] underline">
          Book Now →
        </Link>
      </div>
    </div>
  );
}
