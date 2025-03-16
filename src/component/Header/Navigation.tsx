"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles.css";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="w-full">
      <div className="container mx-auto relative md:px-0 px-4 md:my-10 rounded-xl overflow-hidden border border-rose-800">
        {/* Nav */}
        <nav className="bg-[#6A0200] shadow-lg w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  href="#"
                  className="lg:text-2xl md:text-xl text-lg font-bold text-[#F4A460] flex items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="logo.jpg"
                      alt="Anil Mehndi Artist"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3>Anil Mehndi Art</h3>
                </Link>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 text-[#f8e9bd] font-medium text-lg">
                <Link href="/" className="hover:text-[#f8e9bd]">
                  Home
                </Link>
                <Link href="/mehandi-services" className="hover:text-[#f8e9bd]">
                  Our Services
                </Link>
                <Link
                  href="/mehandi-design-gallery"
                  className="hover:text-[#f8e9bd]"
                >
                  Creations
                </Link>
                <Link href="/client-feedback" className="hover:text-[#f8e9bd]">
                  Feedback /Contact Us
                </Link>
                <Link href="/booknow" className="hover:text-[#f8e9bd]">
                  Book now
                </Link>
                <Link href="/about" className="hover:text-[#f8e9bd]">
                  About
                </Link>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="text-[#F4A460] hover:text-[#f8e9bd] focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-[#6A0200] bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-[#F4A460] font-medium text-lg transition-transform">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-[#F4A460] hover:text-[#f8e9bd] focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                href="/"
                className="hover:text-[#f8e9bd]"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/mehandi-services"
                className="hover:text-[#f8e9bd]"
                onClick={closeMobileMenu}
              >
                Our Services
              </Link>
              <Link
                href="/mehandi-design-gallery"
                className="hover:text-[#f8e9bd]"
                onClick={closeMobileMenu}
              >
                Creations
              </Link>
              <Link
                href="/client-feedback"
                className="hover:text-[#f8e9bd]"
                onClick={closeMobileMenu}
              >
                Feedback /Contact Us
              </Link>
              <Link
                href="/booknow"
                className="hover:text-[#f8e9bd]"
                onClick={closeMobileMenu}
              >
                Book now
              </Link>
              <Link
                href="/about"
                className="hover:text-[#f8e9bd]"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
