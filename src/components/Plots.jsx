// import React from "react";

// function Plots() {
//   const plots = [
//     {
//       society: "DHA City Karachi",
//       phase: "Sector 14-C",
//       size: "120 Sq Yd",
//       price: "PKR 85 Lac",
//       status: "Available",
//       type: "Residential",
//       features: ["Corner Plot", "Park Facing", "Near Masjid"],
//     },
//     {
//       society: "Bahria Town",
//       phase: "Precinct 27",
//       size: "250 Sq Yd",
//       price: "PKR 1.65 Cr",
//       status: "Limited",
//       type: "Residential",
//       features: ["Boulevard Road", "West Open", "Utilities Ready"],
//     },
//     {
//       society: "Scheme 33",
//       phase: "Block 21",
//       size: "200 Sq Yd",
//       price: "PKR 1.1 Cr",
//       status: "Available",
//       type: "Residential",
//       features: ["Corner", "40ft Road", "Near School"],
//     },
//     {
//       society: "Korangi Creek",
//       phase: "Phase 2",
//       size: "1000 Sq Yd",
//       price: "PKR 6.2 Cr",
//       status: "Available",
//       type: "Commercial",
//       features: ["Main Boulevard", "Corner Plot", "Ring Road Access"],
//     },
//     {
//       society: "Gulshan-e-Maymar",
//       phase: "Sector X",
//       size: "150 Sq Yd",
//       price: "PKR 68 Lac",
//       status: "Sold Out",
//       type: "Residential",
//       features: ["Gated Community", "24/7 Security", "Utilities Installed"],
//     },
//     {
//       society: "Steel Town",
//       phase: "Block 3",
//       size: "500 Sq Yd",
//       price: "PKR 3.8 Cr",
//       status: "Limited",
//       type: "Commercial",
//       features: ["Industrial Zone", "Road Access", "Power Supply"],
//     },
//   ];

//   const statusStyle = (s) => {
//     if (s === "Available")
//       return "bg-green-500/12 text-green-400 border border-green-500/30";
//     if (s === "Limited")
//       return "bg-[#C9A84C]/12 text-[#C9A84C] border border-[#C9A84C]/30";
//     return "bg-red-500/12 text-red-400 border border-red-500/30";
//   };

//   return (
//     <section id="plots" className="bg-[#111E35] py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-14 reveal">
//           <span className="text-[#C9A84C] text-[.62rem] font-bold tracking-[.28em] uppercase">
//             Land Inventory
//           </span>
//           <h2
//             className="font-display text-[#F8F6F1] font-light mt-3"
//             style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)" }}
//           >
//             Premium <span className="text-[#C9A84C]">Plots</span> &amp; Land
//           </h2>
//           <p className="text-[#8B99B5] text-sm leading-relaxed max-w-md mx-auto mt-3">
//             Secure your investment with verified, clean-title plots across
//             Karachi's most sought-after societies.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {plots.map(
//             ({ society, phase, size, price, status, type, features }, i) => (
//               <div
//                 key={i}
//                 className="plot-card relative bg-[#141F34] border border-[#C9A84C]/10 rounded-sm p-6 hover:border-[#C9A84C]/38 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 reveal overflow-hidden"
//                 style={{ transitionDelay: `${i * 0.07}s` }}
//               >
//                 {/* Top row */}
//                 <div className="flex justify-between items-start mb-4 gap-2">
//                   <div>
//                     <div
//                       className={`text-[.58rem] font-bold tracking-[.18em] uppercase mb-1 ${type === "Commercial" ? "text-[#E2C27D]" : "text-[#C9A84C]"}`}
//                     >
//                       {type}
//                     </div>
//                     <h3
//                       className="font-display text-[#F8F6F1] font-semibold leading-tight"
//                       style={{ fontSize: "1.08rem" }}
//                     >
//                       {society}
//                     </h3>
//                     <div className="text-[#8B99B5] text-[.73rem] mt-0.5">
//                       {phase}
//                     </div>
//                   </div>
//                   <span
//                     className={`text-[.58rem] font-bold tracking-[.1em] uppercase px-2.5 py-1 rounded-sm flex-shrink-0 ${statusStyle(status)}`}
//                   >
//                     {status}
//                   </span>
//                 </div>

//                 {/* Size / Price */}
//                 <div className="flex gap-3 mb-4">
//                   <div className="flex-1 bg-[#C9A84C]/06 border border-[#C9A84C]/14 rounded-sm p-2.5 text-center">
//                     <div className="font-display text-[#C9A84C] font-semibold text-[.92rem]">
//                       {size}
//                     </div>
//                     <div className="text-[#8B99B5] text-[.56rem] tracking-[.1em] uppercase mt-0.5">
//                       Plot Size
//                     </div>
//                   </div>
//                   <div className="flex-1 bg-[#C9A84C]/06 border border-[#C9A84C]/14 rounded-sm p-2.5 text-center">
//                     <div className="font-display text-[#C9A84C] font-semibold text-[.92rem]">
//                       {price}
//                     </div>
//                     <div className="text-[#8B99B5] text-[.56rem] tracking-[.1em] uppercase mt-0.5">
//                       Price
//                     </div>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="flex flex-wrap gap-1.5 mb-5">
//                   {features.map((f) => (
//                     <span
//                       key={f}
//                       className="bg-white/[.04] border border-white/[.08] text-[#8B99B5] text-[.6rem] px-2 py-0.5 rounded-sm"
//                     >
//                       {f}
//                     </span>
//                   ))}
//                 </div>

//                 <button
//                   disabled={status === "Sold Out"}
//                   className={`w-full py-2.5 rounded-sm text-[.62rem] font-bold tracking-[.12em] uppercase transition-all duration-200 ${
//                     status === "Sold Out"
//                       ? "bg-white/[.04] border border-white/[.08] text-[#8B99B5] cursor-not-allowed opacity-50"
//                       : "border border-[#C9A84C]/45 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]"
//                   }`}
//                 >
//                   {status === "Sold Out" ? "Sold Out" : "Enquire Now"}
//                 </button>
//               </div>
//             ),
//           )}
//         </div>

//         {/* CTA Banner */}
//         <div className="mt-14 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-sm p-10 flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
//           <div>
//             <h3
//               className="font-display text-[#F8F6F1] font-light"
//               style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
//             >
//               Can't find the right plot?
//             </h3>
//             <p className="text-[#8B99B5] text-sm mt-1">
//               Tell us your requirements — we'll find what you need.
//             </p>
//           </div>
//           <a
//             href="#contact"
//             className="flex-shrink-0 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] font-bold text-[.68rem] tracking-[.16em] uppercase px-7 py-3.5 rounded-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A84C]/30 transition-all duration-200"
//           >
//             Talk to an Expert
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Plots;

import React, { useState } from "react";

const CITIES = ["All", "Karachi", "Islamabad"];

const PLOTS = [
  // ─── KARACHI ───
  {
    city: "Karachi",
    society: "DHA City Karachi",
    phase: "Sector 14-C",
    size: "120 Sq Yd",
    price: "PKR 85 Lac",
    status: "Available",
    type: "Residential",
    features: ["Corner Plot", "Park Facing", "Near Masjid"],
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
  {
    city: "Karachi",
    society: "Bahria Town",
    phase: "Precinct 27",
    size: "250 Sq Yd",
    price: "PKR 1.65 Cr",
    status: "Limited",
    type: "Residential",
    features: ["Boulevard Road", "West Open", "Utilities Ready"],
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
  },
  {
    city: "Karachi",
    society: "Korangi Creek",
    phase: "Phase 2",
    size: "1000 Sq Yd",
    price: "PKR 6.2 Cr",
    status: "Available",
    type: "Commercial",
    features: ["Main Boulevard", "Corner Plot", "Ring Road Access"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },

  // ─── ISLAMABAD ───
  {
    city: "Islamabad",
    society: "Top City-1",
    phase: "Block A",
    size: "8 Marla",
    price: "PKR 1.2 Cr",
    status: "Available",
    type: "Residential",
    features: ["Gated Community", "Wide Street", "Near Expressway"],
    img: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=600&q=80",
  },
  {
    city: "Islamabad",
    society: "Faisal Town",
    phase: "Phase 2 — F-18",
    size: "10 Marla",
    price: "PKR 1.85 Cr",
    status: "Limited",
    type: "Residential",
    features: ["Corner Plot", "Gas & Electricity", "Peaceful Area"],
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
  },
  {
    city: "Islamabad",
    society: "Gulberg Islamabad",
    phase: "Gulberg Greens",
    size: "1 Kanal",
    price: "PKR 3.5 Cr",
    status: "Available",
    type: "Residential",
    features: ["Farm House Zone", "Lush Green", "Boundary Wall"],
    img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=80",
  },
  {
    city: "Islamabad",
    society: "CDA Sectors",
    phase: "G-15 / G-16",
    size: "35 x 70",
    price: "PKR 2.4 Cr",
    status: "Limited",
    type: "Residential",
    features: ["CDA Approved", "Possession Ready", "Prime Location"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    city: "Islamabad",
    society: "Bahria Town",
    phase: "Bahria Enclave",
    size: "5 Marla",
    price: "PKR 95 Lac",
    status: "Available",
    type: "Residential",
    features: ["Developed Sector", "All Utilities", "Bahria Amenities"],
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    city: "Islamabad",
    society: "DHA Islamabad",
    phase: "Phase 2 — Sector E",
    size: "1 Kanal",
    price: "PKR 5.8 Cr",
    status: "Limited",
    type: "Residential",
    features: ["DHA Defence", "Boulevard Facing", "Transfer Ready"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

const statusColor = (s) => {
  if (s === "Available") return "available";
  if (s === "Limited") return "limited";
  return "sold";
};

export default function PlotsSection() {
  const [city, setCity] = useState("All");

  const shown = city === "All" ? PLOTS : PLOTS.filter((p) => p.city === city);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .plots-root {
          font-family: 'DM Sans', sans-serif;
          background: #0D1728;
          padding: 7rem 0 8rem;
          position: relative;
          overflow: hidden;
        }

        /* Top accent */
        .plots-root::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 280px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
        }

        /* Dot grid */
        .plots-dots {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(rgba(201,168,76,0.07) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, black 0%, transparent 100%);
        }

        /* Amber glow */
        .plots-glow {
          position: absolute; bottom: -150px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .plots-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .plots-header { text-align: center; margin-bottom: 3.5rem; }

        .plots-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 1.2rem;
        }
        .plots-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, transparent, #C9A84C);
        }
        .plots-eyebrow-line.r {
          background: linear-gradient(90deg, #C9A84C, transparent);
        }
        .plots-eyebrow span {
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C9A84C;
        }

        .plots-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; line-height: 1.1;
          color: #F0EEE9; margin: 0 0 1rem;
        }
        .plots-heading em { font-style: italic; font-weight: 600; color: #C9A84C; }

        .plots-sub {
          font-size: 0.85rem; font-weight: 300;
          line-height: 1.75; color: #5A6E88;
          max-width: 420px; margin: 0 auto 2.5rem;
        }

        /* City switcher */
        .plots-cities {
          display: inline-flex; gap: 0;
          border: 1px solid rgba(201,168,76,0.15);
          overflow: hidden;
          margin-bottom: 0;
        }
        .plots-city-btn {
          padding: 9px 28px;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: none; cursor: pointer;
          background: none; color: #5A6E88;
          border-right: 1px solid rgba(201,168,76,0.1);
          transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .plots-city-btn:last-child { border-right: none; }
        .plots-city-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          transform: translateY(101%);
          transition: transform 0.25s cubic-bezier(0.23,1,0.32,1);
        }
        .plots-city-btn.active::before { transform: translateY(0); }
        .plots-city-btn.active { color: #0B1628; }
        .plots-city-btn:not(.active):hover { color: #C9A84C; }
        .plots-city-btn span { position: relative; z-index: 1; }

        /* Section label */
        .plots-section-label {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 1.5rem; margin-top: 0.5rem;
        }
        .plots-section-label-text {
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(201,168,76,0.5);
          white-space: nowrap;
        }
        .plots-section-label-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(201,168,76,0.15), transparent);
        }

        /* Grid */
        .plots-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        /* Card */
        .plot-card {
          background: #0B1628;
          border: 1px solid rgba(201,168,76,0.08);
          overflow: hidden;
          position: relative;
          transition: border-color 0.35s, transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s;
        }
        .plot-card:not(.sold-out):hover {
          border-color: rgba(201,168,76,0.28);
          transform: translateY(-5px);
          box-shadow: 0 20px 55px rgba(0,0,0,0.5);
        }
        .plot-card.sold-out { opacity: 0.55; }

        /* Image */
        .plot-img {
          position: relative; height: 170px; overflow: hidden;
        }
        .plot-img img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.75) saturate(0.8);
          transition: transform 0.7s cubic-bezier(0.23,1,0.32,1);
        }
        .plot-card:hover .plot-img img { transform: scale(1.07); }

        .plot-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(8,15,28,0.1) 0%, rgba(8,15,28,0.75) 100%);
        }

        /* Status badge — top left of image */
        .plot-status {
          position: absolute; top: 12px; left: 12px; z-index: 2;
          display: flex; align-items: center; gap: 5px;
          font-size: 0.52rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 4px 10px;
          backdrop-filter: blur(8px);
        }
        .plot-status.available {
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.35);
          color: #34d399;
        }
        .plot-status.limited {
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.35);
          color: #C9A84C;
        }
        .plot-status.sold {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.3);
          color: #f87171;
        }
        .plot-status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: currentColor;
          animation: blink 2s ease-in-out infinite;
        }
        .plot-status.sold .plot-status-dot { animation: none; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }

        /* Type — top right */
        .plot-type {
          position: absolute; top: 12px; right: 12px; z-index: 2;
          font-size: 0.5rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 4px 9px;
          background: rgba(11,22,40,0.75);
          border: 1px solid rgba(201,168,76,0.15);
          color: rgba(201,168,76,0.7);
          backdrop-filter: blur(6px);
        }

        /* Society name on image bottom */
        .plot-img-footer {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;
          padding: 10px 14px 12px;
        }
        .plot-city-pill {
          display: inline-block;
          font-size: 0.5rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 3px 8px;
          background: rgba(201,168,76,0.18);
          border: 1px solid rgba(201,168,76,0.25);
          color: #C9A84C;
          margin-bottom: 4px;
        }

        /* Body */
        .plot-body { padding: 1.25rem 1.3rem 1.4rem; }

        .plot-society {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 600;
          color: #F0EEE9; margin: 0 0 3px;
          line-height: 1.2;
        }
        .plot-phase {
          font-size: 0.7rem; font-weight: 300;
          color: #4A5E78; margin-bottom: 1rem;
        }

        /* Size + Price tiles */
        .plot-tiles {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.08);
          margin-bottom: 1rem;
        }
        .plot-tile {
          background: #0D1A2C;
          padding: 10px 12px; text-align: center;
        }
        .plot-tile-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem; font-weight: 600;
          color: #C9A84C; line-height: 1;
        }
        .plot-tile-label {
          font-size: 0.52rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #3A4E66; margin-top: 4px;
        }

        /* Features */
        .plot-features {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 1.1rem;
        }
        .plot-feat {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.58rem; font-weight: 400;
          color: #4A5E78;
          padding: 4px 9px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.025);
        }
        .plot-feat::before {
          content: '';
          display: block; width: 4px; height: 4px; border-radius: 50%;
          background: rgba(201,168,76,0.4);
          flex-shrink: 0;
        }

        /* Enquire button */
        .plot-btn {
          width: 100%; padding: 11px;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: none; cursor: pointer;
          position: relative; overflow: hidden;
          background: none;
          transition: color 0.3s;
        }
        .plot-btn:not(:disabled) {
          border: 1px solid rgba(201,168,76,0.35);
          color: #C9A84C;
        }
        .plot-btn:not(:disabled)::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .plot-btn:not(:disabled):hover { color: #0B1628; }
        .plot-btn:not(:disabled):hover::before { transform: translateX(0); }
        .plot-btn span { position: relative; z-index: 1; }
        .plot-btn:disabled {
          border: 1px solid rgba(255,255,255,0.05);
          color: #2A3A50;
          cursor: not-allowed;
          background: rgba(255,255,255,0.02);
        }

        /* CTA Banner */
        .plots-cta {
          margin-top: 4rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem; align-items: center;
          padding: 2.5rem 3rem;
          border: 1px solid rgba(201,168,76,0.15);
          background: linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.01) 100%);
          position: relative; overflow: hidden;
        }
        .plots-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, transparent, #C9A84C, transparent);
        }
        .plots-cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 300; color: #F0EEE9; margin: 0 0 6px;
        }
        .plots-cta-heading em { font-style: italic; font-weight: 600; color: #C9A84C; }
        .plots-cta-sub {
          font-size: 0.8rem; font-weight: 300;
          color: #4A5E78; margin: 0;
        }
        .plots-cta-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          color: #0B1628;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          text-decoration: none; white-space: nowrap;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .plots-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 35px rgba(201,168,76,0.3);
        }
        .plots-cta-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.1);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s;
        }
        .plots-cta-btn:hover::after { transform: scaleX(1); }
        .plots-cta-btn span { position: relative; z-index: 1; }
        .plots-cta-btn svg { position: relative; z-index: 1; }

        @media (max-width: 960px) {
          .plots-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .plots-grid { grid-template-columns: 1fr; }
          .plots-cta { grid-template-columns: 1fr; text-align: center; }
          .plots-cta::before { top: 0; left: 0; right: 0; bottom: auto; width: auto; height: 2px; }
        }
      `}</style>

      <section id="plots" className="plots-root">
        <div className="plots-dots" />
        <div className="plots-glow" />

        <div className="plots-inner">
          {/* Header */}
          <div className="plots-header">
            <div className="plots-eyebrow">
              <div className="plots-eyebrow-line" />
              <span>Land Inventory</span>
              <div className="plots-eyebrow-line r" />
            </div>
            <h2 className="plots-heading">
              Premium <em>Plots</em> &amp; Land
            </h2>
            <p className="plots-sub">
              Secure your investment with verified, clean-title plots across
              Karachi &amp; Islamabad's most sought-after societies.
            </p>

            {/* City tabs */}
            <div className="plots-cities">
              {CITIES.map((c) => (
                <button
                  key={c}
                  className={`plots-city-btn${city === c ? " active" : ""}`}
                  onClick={() => setCity(c)}
                >
                  <span>{c}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Karachi group */}
          {(city === "All" || city === "Karachi") && (
            <>
              {city === "All" && (
                <div className="plots-section-label">
                  <span className="plots-section-label-text">Karachi</span>
                  <div className="plots-section-label-line" />
                </div>
              )}
              <div
                className="plots-grid"
                style={{ marginBottom: city === "All" ? "2.5rem" : 0 }}
              >
                {PLOTS.filter((p) => p.city === "Karachi").map((plot, i) => (
                  <PlotCard key={i} plot={plot} />
                ))}
              </div>
            </>
          )}

          {/* Islamabad group */}
          {(city === "All" || city === "Islamabad") && (
            <>
              {city === "All" && (
                <div className="plots-section-label">
                  <span className="plots-section-label-text">Islamabad</span>
                  <div className="plots-section-label-line" />
                </div>
              )}
              <div className="plots-grid">
                {PLOTS.filter((p) => p.city === "Islamabad").map((plot, i) => (
                  <PlotCard key={i} plot={plot} />
                ))}
              </div>
            </>
          )}

          {/* CTA Banner */}
          <div className="plots-cta">
            <div>
              <h3 className="plots-cta-heading">
                Can't find the <em>right plot?</em>
              </h3>
              <p className="plots-cta-sub">
                Tell us your requirements — we'll find what you need across
                Karachi &amp; Islamabad.
              </p>
            </div>
            <a href="#contact" className="plots-cta-btn">
              <span>Talk to an Expert</span>
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

function PlotCard({ plot }) {
  const { society, phase, size, price, status, type, features, img, city } =
    plot;
  const sc = statusColor(status);
  const isSold = status === "Sold Out";

  return (
    <div className={`plot-card${isSold ? " sold-out" : ""}`}>
      {/* Image */}
      <div className="plot-img">
        <img src={img} alt={society} />
        <div className="plot-img-overlay" />
        <div className={`plot-status ${sc}`}>
          <span className="plot-status-dot" />
          {status}
        </div>
        <div className="plot-type">{type}</div>
        <div className="plot-img-footer">
          <div className="plot-city-pill">{city}</div>
        </div>
      </div>

      {/* Body */}
      <div className="plot-body">
        <h3 className="plot-society">{society}</h3>
        <p className="plot-phase">{phase}</p>

        <div className="plot-tiles">
          <div className="plot-tile">
            <div className="plot-tile-val">{size}</div>
            <div className="plot-tile-label">Plot Size</div>
          </div>
          <div className="plot-tile">
            <div className="plot-tile-val">{price}</div>
            <div className="plot-tile-label">Price</div>
          </div>
        </div>

        <div className="plot-features">
          {features.map((f) => (
            <span key={f} className="plot-feat">
              {f}
            </span>
          ))}
        </div>

        <button className="plot-btn" disabled={isSold}>
          <span>{isSold ? "Sold Out" : "Enquire Now"}</span>
        </button>
      </div>
    </div>
  );
}
