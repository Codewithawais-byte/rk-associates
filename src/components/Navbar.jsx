import React, { useEffect, useState } from "react";

const gold = "#C9A84C";
const goldLight = "#E2C27D";
const goldFaint = "rgba(201,168,76,0.08)";
const navy = "#0B1628";
const navyMid = "#111E35";
const textMuted = "#7A8BA8";
const textLight = "#F0EEE9";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Plots", href: "#plots" },
  { label: "Contact", href: "#contact" },
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .rk-nav {
          font-family: 'DM Sans', sans-serif;
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .rk-nav.scrolled {
          background: rgba(11,22,40,0.94);
          backdrop-filter: blur(20px) saturate(1.5);
          -webkit-backdrop-filter: blur(20px) saturate(1.5);
          border-bottom: 1px solid rgba(201,168,76,0.12);
          box-shadow: 0 1px 40px rgba(0,0,0,0.4);
        }
        .rk-nav.top { background: transparent; }

        .rk-nav-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
          transition: height 0.4s ease;
        }
        .rk-nav.scrolled .rk-nav-inner { height: 62px; }

        /* Logo */
        .rk-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .rk-logo-mark {
          position: relative;
          width: 38px; height: 38px;
          background: linear-gradient(135deg, ${gold}, ${goldLight});
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .rk-logo:hover .rk-logo-mark { transform: rotate(15deg) scale(1.05); }
        .rk-logo-mark span {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600; font-size: 14px;
          color: ${navy}; letter-spacing: 0.05em;
        }
        .rk-logo-text-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem; font-weight: 600;
          color: ${textLight}; letter-spacing: 0.04em;
          line-height: 1.1;
        }
        .rk-logo-text-sub {
          font-size: 0.48rem; font-weight: 500;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: ${gold}; margin-top: 1px;
        }

        /* Links */
        .rk-links { display: flex; align-items: center; gap: 2px; }
        .rk-link {
          position: relative; padding: 8px 16px;
          font-size: 0.8rem; font-weight: 400;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: ${textMuted}; text-decoration: none;
          transition: color 0.25s ease;
        }
        .rk-link::after {
          content: ''; position: absolute;
          bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 0; height: 1px;
          background: linear-gradient(90deg, ${gold}, ${goldLight});
          transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .rk-link:hover, .rk-link.active { color: ${goldLight}; }
        .rk-link:hover::after, .rk-link.active::after { width: 24px; }

        /* Divider */
        .rk-divider {
          width: 1px; height: 28px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.25), transparent);
          margin: 0 8px;
        }

        /* Phone */
        .rk-phone {
          display: flex; align-items: center; gap: 7px;
          font-size: 0.78rem; font-weight: 400;
          color: ${textMuted}; text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.25s;
        }
        .rk-phone:hover { color: ${goldLight}; }
        .rk-phone svg { opacity: 0.7; flex-shrink: 0; }

        /* CTA Button */
        .rk-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.5);
          color: ${gold};
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }
        .rk-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, ${gold}, ${goldLight});
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .rk-cta:hover { color: ${navy}; border-color: ${gold}; }
        .rk-cta:hover::before { transform: translateX(0); }
        .rk-cta span { position: relative; z-index: 1; }

        /* Hamburger */
        .rk-burger {
          display: none; flex-direction: column; gap: 5px;
          padding: 8px; background: none; border: none;
          cursor: pointer;
        }
        .rk-burger span {
          display: block; width: 22px; height: 1px;
          background: ${textMuted};
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          transform-origin: center;
        }
        .rk-burger.open span:nth-child(1) {
          background: ${gold};
          transform: rotate(45deg) translate(4px, 4px);
        }
        .rk-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .rk-burger.open span:nth-child(3) {
          background: ${gold};
          transform: rotate(-45deg) translate(4px, -4px);
        }

        /* Mobile menu */
        .rk-mobile {
          display: none;
          background: rgba(11,22,40,0.98);
          backdrop-filter: blur(24px);
          border-top: 1px solid rgba(201,168,76,0.1);
          padding: 1.5rem 2rem 2rem;
        }
        .rk-mobile.open { display: block; }
        .rk-mobile-link {
          display: block; padding: 14px 0;
          font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: ${textMuted}; text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.06);
          transition: color 0.2s, padding-left 0.2s;
        }
        .rk-mobile-link:hover { color: ${goldLight}; padding-left: 6px; }
        .rk-mobile-cta {
          display: block; margin-top: 1.5rem;
          padding: 14px; text-align: center;
          background: linear-gradient(135deg, ${gold}, ${goldLight});
          color: ${navy}; font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .rk-links, .rk-phone, .rk-divider, .rk-cta { display: none; }
          .rk-burger { display: flex; }
        }
      `}</style>

      <nav className={`rk-nav ${scrolled ? "scrolled" : "top"}`}>
        <div className="rk-nav-inner">
          {/* Logo */}
          <a href="#home" className="rk-logo">
            <div className="rk-logo-mark">
              <span>RK</span>
            </div>
            <div>
              <div className="rk-logo-text-main">RK Associates</div>
              <div className="rk-logo-text-sub">&amp; Builders</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="rk-links">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`rk-link${active === l.label ? " active" : ""}`}
                onClick={() => setActive(l.label)}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="tel:+921234567890" className="rk-phone">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              +92 321 000 0000
            </a>
            <div className="rk-divider" />
            <a href="#contact" className="rk-cta">
              <span>Get Consultation</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ position: "relative", zIndex: 1 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`rk-burger${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`rk-mobile${open ? " open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rk-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rk-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Get Consultation
          </a>
        </div>
      </nav>
    </>
  );
}
