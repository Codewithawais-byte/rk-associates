// import React from "react";
// import useReveal from "../hooks/useReveal";

// function Home() {
//   useReveal();
//   const services = [
//     {
//       icon: "🏢",
//       title: "Apartments & Flats",
//       desc: "Luxury and affordable apartments in prime Karachi locations.",
//     },
//     {
//       icon: "🏡",
//       title: "Houses & Bungalows",
//       desc: "Family homes from DHA to Bahria Town and beyond.",
//     },
//     {
//       icon: "🏗",
//       title: "Plots & Land",
//       desc: "Residential and commercial plots across all major societies.",
//     },
//     {
//       icon: "🏬",
//       title: "Commercial Spaces",
//       desc: "Offices, shops, and warehouses for your business growth.",
//     },
//     {
//       icon: "🔑",
//       title: "Rental Services",
//       desc: "Short and long-term rentals managed with full transparency.",
//     },
//     {
//       icon: "📋",
//       title: "Legal Consultation",
//       desc: "End-to-end property documentation and legal guidance.",
//     },
//   ];

//   return (
//     <section id="services" className="bg-[#111E35] py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-14 reveal">
//           <span className="text-[#C9A84C] text-[.62rem] font-bold tracking-[.28em] uppercase">
//             What We Offer
//           </span>
//           <h2
//             className="font-display text-[#F8F6F1] font-light mt-3"
//             style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)" }}
//           >
//             Complete Real Estate{" "}
//             <span className="text-[#C9A84C]">Solutions</span>
//           </h2>
//           <p className="text-[#8B99B5] text-sm leading-relaxed max-w-md mx-auto mt-3">
//             From finding your dream home to securing a sound commercial
//             investment — RK Associates handles it all under one roof.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {services.map(({ icon, title, desc }, i) => (
//             <div
//               key={title}
//               className="reveal bg-[#141F34] border border-[#C9A84C]/08 rounded p-7 hover:border-[#C9A84C]/35 hover:bg-[#C9A84C]/04 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
//               style={{ transitionDelay: `${i * 0.07}s` }}
//             >
//               <div className="w-12 h-12 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded flex items-center justify-center text-2xl mb-4">
//                 {icon}
//               </div>
//               <h3
//                 className="font-display text-[#F8F6F1] font-semibold mb-2"
//                 style={{ fontSize: "1.1rem" }}
//               >
//                 {title}
//               </h3>
//               <p className="text-[#8B99B5] text-[.82rem] leading-relaxed">
//                 {desc}
//               </p>
//               <div className="flex items-center gap-2 mt-4 text-[#C9A84C] text-[.65rem] font-bold tracking-[.12em] uppercase">
//                 <span>Learn More</span>
//                 <svg
//                   width="11"
//                   height="11"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from "react";

const SERVICES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Apartments & Flats",
    desc: "Luxury and affordable apartments in prime Karachi locations.",
    stat: "340+ units",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Houses & Bungalows",
    desc: "Family homes from DHA to Bahria Town and beyond.",
    stat: "180+ homes",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Plots & Land",
    desc: "Residential and commercial plots across all major societies.",
    stat: "500+ plots",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
    title: "Commercial Spaces",
    desc: "Offices, shops, and warehouses for your business growth.",
    stat: "120+ spaces",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Rental Services",
    desc: "Short and long-term rentals managed with full transparency.",
    stat: "95% occupancy",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Legal Consultation",
    desc: "End-to-end property documentation and legal guidance.",
    stat: "2,400+ closings",
  },
];

export default function ServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .svc-root {
          font-family: 'DM Sans', sans-serif;
          background: #0D1728;
          padding: 7rem 0 8rem;
          position: relative;
          overflow: hidden;
        }

        /* Top border accent */
        .svc-root::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 320px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
        }

        /* Diagonal texture */
        .svc-bg-lines {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(201,168,76,0.015) 0px,
            rgba(201,168,76,0.015) 1px,
            transparent 1px,
            transparent 60px
          );
        }

        /* Glow */
        .svc-glow {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .svc-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .svc-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: end;
          margin-bottom: 4rem;
        }

        .svc-eyebrow {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 1.2rem;
        }
        .svc-eyebrow-line {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, #C9A84C, transparent);
        }
        .svc-eyebrow span {
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C9A84C;
        }

        .svc-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          line-height: 1.1;
          color: #F0EEE9;
          margin: 0;
        }
        .svc-heading em {
          font-style: italic; font-weight: 600;
          color: #C9A84C;
        }

        .svc-sub {
          font-size: 0.87rem; font-weight: 300;
          line-height: 1.75;
          color: #6A7A94;
          max-width: 380px;
          align-self: end;
        }

        /* Grid */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.08);
        }

        .svc-card {
          background: #0B1628;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.35s;
        }
        .svc-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .svc-card::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 0% 100%, rgba(201,168,76,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .svc-card:hover { background: #0E1C30; }
        .svc-card:hover::before { transform: scaleX(1); }
        .svc-card:hover::after { opacity: 1; }
        .svc-card:hover .svc-icon-wrap { border-color: rgba(201,168,76,0.5); background: rgba(201,168,76,0.12); }
        .svc-card:hover .svc-stat { opacity: 1; transform: translateY(0); }
        .svc-card:hover .svc-arrow { transform: translateX(4px); opacity: 1; }

        .svc-icon-wrap {
          width: 52px; height: 52px;
          border: 1px solid rgba(201,168,76,0.2);
          background: rgba(201,168,76,0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s;
          position: relative; z-index: 1;
        }

        .svc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem; font-weight: 600;
          color: #F0EEE9;
          margin: 0 0 0.6rem;
          position: relative; z-index: 1;
        }

        .svc-desc {
          font-size: 0.8rem; font-weight: 300;
          line-height: 1.7;
          color: #6A7A94;
          margin: 0 0 1.5rem;
          position: relative; z-index: 1;
        }

        .svc-footer {
          display: flex; align-items: center; justify-content: space-between;
          position: relative; z-index: 1;
        }

        .svc-stat {
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(201,168,76,0.6);
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.3s 0.05s;
        }

        .svc-link {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.62rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C;
        }

        .svc-arrow {
          transition: transform 0.25s, opacity 0.25s;
          opacity: 0.6;
        }

        /* Bottom CTA strip */
        .svc-cta-strip {
          margin-top: 4rem;
          display: flex; align-items: center; justify-content: space-between;
          padding: 2rem 2.5rem;
          border: 1px solid rgba(201,168,76,0.12);
          background: rgba(201,168,76,0.025);
        }
        .svc-cta-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 400;
          color: #F0EEE9;
        }
        .svc-cta-text span { color: #C9A84C; font-style: italic; }
        .svc-cta-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 28px;
          border: 1px solid rgba(201,168,76,0.5);
          color: #C9A84C;
          font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          text-decoration: none; cursor: pointer;
          background: none;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .svc-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .svc-cta-btn:hover { color: #0B1628; }
        .svc-cta-btn:hover::before { transform: translateX(0); }
        .svc-cta-btn span { position: relative; z-index: 1; }
        .svc-cta-btn svg { position: relative; z-index: 1; }

        @media (max-width: 900px) {
          .svc-header { grid-template-columns: 1fr; }
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-cta-strip { flex-direction: column; gap: 1.5rem; text-align: center; }
        }
        @media (max-width: 560px) {
          .svc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="services" className="svc-root">
        <div className="svc-bg-lines" />
        <div className="svc-glow" />

        <div className="svc-inner">
          {/* Header */}
          <div className="svc-header">
            <div>
              <div className="svc-eyebrow">
                <div className="svc-eyebrow-line" />
                <span>What We Offer</span>
              </div>
              <h2 className="svc-heading">
                Complete Real Estate
                <br />
                <em>Solutions</em>
              </h2>
            </div>
            <p className="svc-sub">
              From finding your dream home to securing a sound commercial
              investment — RK Associates handles it all under one roof.
            </p>
          </div>

          {/* Cards grid */}
          <div className="svc-grid">
            {SERVICES.map(({ icon, title, desc, stat }) => (
              <div key={title} className="svc-card">
                <div className="svc-icon-wrap">{icon}</div>
                <h3 className="svc-title">{title}</h3>
                <p className="svc-desc">{desc}</p>
                <div className="svc-footer">
                  <span className="svc-stat">{stat}</span>
                  <div className="svc-link">
                    <span>Learn More</span>
                    <svg
                      className="svc-arrow"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="svc-cta-strip">
            <div className="svc-cta-text">
              Not sure what you need? Let us <span>guide you.</span>
            </div>
            <a href="#contact" className="svc-cta-btn">
              <span>Book a Free Consultation</span>
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
          </div>
        </div>
      </section>
    </>
  );
}
