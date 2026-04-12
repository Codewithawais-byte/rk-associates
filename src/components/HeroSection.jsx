import React, { useEffect, useRef } from "react";
import Commercial from "../assets/Commercial.jpg";
const STATS = [
  { value: "15+", label: "Years of Excellence" },
  { value: "2,400+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Premium Projects" },
];

const BADGES = ["RERA Certified", "15+ Years Trusted", "0% Hidden Fees"];

export default function HeroSection() {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.width = "72px";
    }, 300);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E2C27D;
          --gold-pale: #F0DCA8;
          --navy: #080F1C;
          --navy-mid: #0D1A2E;
          --navy-surface: #111E35;
          --text-primary: #F0EEE9;
          --text-muted: #7A8BA8;
          --text-faint: #3D5070;
        }

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          min-height: 100vh;
          display: flex; align-items: center;
          overflow: hidden;
          background: var(--navy);
          color: var(--text-primary);
        }

        /* Noise grain overlay */
        .hero-root::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
          pointer-events: none;
        }

        /* Subtle grid */
        .hero-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,.04) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 60% at 60% 50%, black 20%, transparent 80%);
        }

        /* Ambient glow blobs */
        .hero-glow-1 {
          position: absolute; top: -10%; right: 5%; z-index: 0;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,.055) 0%, transparent 65%);
          pointer-events: none;
          animation: driftA 18s ease-in-out infinite;
        }
        .hero-glow-2 {
          position: absolute; bottom: -5%; left: -5%; z-index: 0;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(56,100,180,.06) 0%, transparent 65%);
          pointer-events: none;
          animation: driftB 14s ease-in-out infinite;
        }
        @keyframes driftA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px, 40px) scale(1.07); } }
        @keyframes driftB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px, -25px) scale(1.05); } }

        /* Content container */
        .hero-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 7rem 2rem 5rem;
          width: 100%;
        }

        /* 2-col grid */
        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* ─── LEFT ─── */
        .hero-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 1.75rem;
          opacity: 0; animation: fadeUp 0.7s 0.1s ease forwards;
        }
        .hero-eyebrow-line {
          width: 0; height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
          transition: width 0.8s cubic-bezier(0.23,1,0.32,1);
        }
        .hero-eyebrow-text {
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold);
        }

        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3rem, 5.5vw, 5rem);
          line-height: 1.02;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          margin: 0 0 1.5rem;
          opacity: 0; animation: fadeUp 0.8s 0.25s ease forwards;
        }
        .hero-heading em {
          font-style: italic;
          font-weight: 600;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-pale) 50%, var(--gold) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }

        .hero-body {
          font-size: 0.9rem; font-weight: 300;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 420px;
          margin: 0 0 2.25rem;
          opacity: 0; animation: fadeUp 0.8s 0.4s ease forwards;
        }

        /* CTA buttons */
        .hero-ctas {
          display: flex; flex-wrap: wrap; gap: 14px;
          margin-bottom: 2.5rem;
          opacity: 0; animation: fadeUp 0.8s 0.55s ease forwards;
        }
        .cta-primary {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--navy);
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .cta-primary::after {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.15);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 40px rgba(201,168,76,0.35); }
        .cta-primary:hover::after { transform: scaleX(1); }

        .cta-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px;
          border: 1px solid rgba(201,168,76,0.35);
          color: var(--gold);
          font-size: 0.72rem; font-weight: 400;
          letter-spacing: 0.16em; text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
        }
        .cta-ghost:hover { background: rgba(201,168,76,0.07); border-color: var(--gold); }

        /* Trust badges */
        .hero-badges {
          display: flex; flex-wrap: wrap; gap: 20px;
          opacity: 0; animation: fadeUp 0.8s 0.7s ease forwards;
        }
        .badge {
          display: flex; align-items: center; gap: 8px;
        }
        .badge-dot {
          width: 18px; height: 18px; border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.6);
          background: rgba(201,168,76,0.08);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .badge span { font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.04em; }

        /* ─── RIGHT ─── */
        .hero-visual {
          position: relative;
          opacity: 0; animation: fadeUp 0.9s 0.3s ease forwards;
        }

        .hero-card {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.18);
        }
        .hero-card::before {
          content: '';
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to bottom, transparent 40%, rgba(8,15,28,0.85) 100%);
        }
        .hero-card img {
          display: block; width: 100%;
          aspect-ratio: 4/3; object-fit: cover;
          filter: brightness(0.85) saturate(0.9);
          transition: transform 0.7s cubic-bezier(0.23,1,0.32,1);
        }
        .hero-card:hover img { transform: scale(1.03); }

        /* Corner accent lines */
        .hero-card::after {
          content: '';
          position: absolute; top: 12px; left: 12px; right: 12px; bottom: 12px; z-index: 2;
          border: 1px solid rgba(201,168,76,0.08);
          pointer-events: none;
        }

        /* Property info overlay */
        .prop-overlay {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
          padding: 1.5rem;
          display: flex; align-items: flex-end; gap: 12px;
        }
        .prop-info {
          flex: 1;
          background: rgba(8,15,28,0.82);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 3px;
          padding: 18px 20px;
        }
        .prop-tag {
          font-size: 0.56rem; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 6px;
        }
        .prop-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-weight: 600;
          color: var(--text-primary); line-height: 1.1;
        }
        .prop-price {
          font-size: 0.78rem; font-weight: 300;
          color: var(--gold); margin-top: 4px;
          letter-spacing: 0.05em;
        }
        .prop-rating {
          flex-shrink: 0;
          background: linear-gradient(145deg, var(--gold), var(--gold-light));
          border-radius: 3px;
          padding: 14px 18px;
          text-align: center;
        }
        .prop-rating-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem; font-weight: 600;
          color: var(--navy); line-height: 1;
        }
        .prop-rating-label {
          font-size: 0.5rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--navy); opacity: 0.75;
        }

        /* Floating card */
        .hero-float {
          position: absolute;
          top: -28px; right: -24px;
          background: var(--navy-surface);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 3px;
          padding: 18px 20px;
          min-width: 165px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          animation: floatY 8s ease-in-out infinite;
          z-index: 10;
        }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .float-tag {
          font-size: 0.55rem; font-weight: 500;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 6px;
        }
        .float-title {
          font-size: 0.85rem; font-weight: 400;
          color: var(--text-primary); line-height: 1.3;
        }
        .float-sub {
          font-size: 0.75rem; font-weight: 300;
          color: var(--text-muted); margin-top: 2px;
        }
        .float-dot {
          display: inline-block; width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold);
          margin-right: 6px;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }

        /* Second floating badge */
        .hero-float-2 {
          position: absolute;
          bottom: 80px; left: -28px;
          background: var(--navy-surface);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 3px;
          padding: 14px 18px;
          box-shadow: 0 16px 50px rgba(0,0,0,0.4);
          animation: floatY 10s 2s ease-in-out infinite;
          z-index: 10;
          display: flex; align-items: center; gap: 12px;
        }
        .float2-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .float2-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 600;
          color: var(--gold); line-height: 1;
        }
        .float2-label {
          font-size: 0.65rem; font-weight: 300;
          color: var(--text-muted); margin-top: 1px;
        }

        /* ─── STATS ─── */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin-top: 5rem;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 3px;
          overflow: hidden;
        }
        .stat-item {
          background: var(--navy);
          padding: 2rem 1.75rem;
          text-align: center;
          position: relative;
          transition: background 0.3s;
          opacity: 0;
        }
        .stat-item:nth-child(1) { animation: fadeUp 0.6s 0.8s ease forwards; }
        .stat-item:nth-child(2) { animation: fadeUp 0.6s 0.9s ease forwards; }
        .stat-item:nth-child(3) { animation: fadeUp 0.6s 1.0s ease forwards; }
        .stat-item:nth-child(4) { animation: fadeUp 0.6s 1.1s ease forwards; }
        .stat-item::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          transition: width 0.4s 0.1s;
        }
        .stat-item:hover { background: rgba(201,168,76,0.04); }
        .stat-item:hover::before { width: 80%; }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 600;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-pale) 50%, var(--gold) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 0.65rem; font-weight: 400;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-faint);
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-grid-layout { grid-template-columns: 1fr; gap: 3rem; }
          .hero-float { right: 0; }
          .hero-float-2 { display: none; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .hero-inner { padding: 6rem 1.25rem 3rem; }
          .cta-primary, .cta-ghost { padding: 13px 22px; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section id="home" className="hero-root">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="hero-inner">
          <div className="hero-grid-layout">
            {/* ─── LEFT ─── */}
            <div>
              <div className="hero-eyebrow">
                <div
                  ref={lineRef}
                  className="hero-eyebrow-line"
                  style={{ width: 0 }}
                />
                <span className="hero-eyebrow-text">
                  Islamabad's Premier Real Estate
                </span>
              </div>

              <h1 className="hero-heading">
                Where Dreams
                <br />
                Find Their <em>Perfect</em>
                <br />
                Address
              </h1>

              <p className="hero-body">
                RK Associates &amp; Builders — your trusted partner in plots,
                flats, apartments, and commercial properties across Karachi.
                Premium real estate, unmatched service.
              </p>

              <div className="hero-ctas">
                <a href="#properties" className="cta-primary">
                  Explore Properties
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="cta-ghost">
                  Free Consultation
                </a>
              </div>

              <div className="hero-badges">
                {BADGES.map((b) => (
                  <div key={b} className="badge">
                    <div className="badge-dot">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── RIGHT ─── */}
            <div className="hero-visual">
              {/* Main image card */}
              <div className="hero-card">
                <img src={Commercial} alt="DHA Phase 6 Residence" />
                <div className="prop-overlay">
                  <div className="prop-info">
                    <div className="prop-tag">Featured Listing</div>
                    <div className="prop-name">TopCity-1</div>
                    <div className="prop-price">
                      PKR 4.5 Crore &mdash; 500 Sq Yd
                    </div>
                  </div>
                  <div className="prop-rating">
                    <div className="prop-rating-num">4.9</div>
                    <div className="prop-rating-label">Rating</div>
                  </div>
                </div>
              </div>

              {/* Top floating card */}
              <div className="hero-float">
                <div className="float-tag">
                  <span className="float-dot" />
                  New Listing
                </div>
                <div className="float-title">TopCity-1</div>
                <div className="float-sub">3 Bed Apartment</div>
              </div>
            </div>
          </div>

          {/* ─── STATS STRIP ─── */}
          <div className="hero-stats">
            {STATS.map(({ value, label }) => (
              <div key={label} className="stat-item">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
