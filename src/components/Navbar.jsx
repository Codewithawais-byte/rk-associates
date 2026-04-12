import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Plots", href: "#plots" },
  { label: "Contact", href: "#contact" },
  { label: "All Listings", href: "/properties" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0B1628]/95 backdrop-blur-xl border-b border-[#C9A84C]/10 shadow-2xl" : "bg-transparent"}`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-8 transition-all duration-500 flex items-center justify-between ${scrolled ? "h-[88px]" : "h-[100px]"}`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-18  flex items-center justify-center clip-path-pentagon transition-transform group-hover:rotate-12 group-hover:scale-105">
              <img src={logo} alt="logo" className="w-20 " />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setActive(l.label)}
                className={`relative px-5 py-2 text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                  active === l.label
                    ? "text-[#C9A84C]"
                    : "text-[#9CA3B8] hover:text-[#C9A84C]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent transition-all duration-300 ${
                    active === l.label ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+923210000000"
              className="flex items-center gap-2 text-sm text-[#9CA3B8] hover:text-[#C9A84C] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              +92 311 4455087
            </a>

            <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent" />

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-medium tracking-[0.18em] uppercase overflow-hidden hover:text-[#0B1628] transition-all"
            >
              <span className="relative z-10">Get Consultation</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="relative z-10"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-[#C9A84C] transition-all ${open ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#C9A84C] transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#C9A84C] transition-all ${open ? "-rotate-45 -translate-y-[3px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#0B1628]/98 backdrop-blur-xl border-t border-[#C9A84C]/10 px-6 py-6 transition-all duration-300 ${open ? "block" : "hidden"}`}
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => {
                  setActive(l.label);
                  setOpen(false);
                }}
                className="py-4 px-4 text-base uppercase tracking-widest text-[#9CA3B8] hover:text-[#C9A84C] border-b border-[#C9A84C]/10 last:border-none"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 py-4 text-center bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] font-medium tracking-widest uppercase"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
