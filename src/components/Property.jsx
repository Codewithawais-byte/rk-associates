// import React, { useState } from "react";

// function Property() {
//   const [filter, setFilter] = useState("All");
//   const cats = ["All", "Apartment", "House", "Commercial", "Rental"];

//   const listings = [
//     {
//       title: "Gulshan Heights",
//       location: "Gulshan-e-Iqbal, Block 13",
//       type: "Apartment",
//       price: "PKR 1.8 Cr",
//       beds: 3,
//       baths: 2,
//       area: "1,650 sqft",
//       tag: "For Sale",
//       img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=75",
//     },
//     {
//       title: "DHA Executive Villa",
//       location: "DHA Phase 5, Karachi",
//       type: "House",
//       price: "PKR 9.5 Cr",
//       beds: 5,
//       baths: 4,
//       area: "500 sq yd",
//       tag: "For Sale",
//       img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=75",
//     },
//     {
//       title: "Bahria Sky Tower",
//       location: "Bahria Town, Karachi",
//       type: "Commercial",
//       price: "PKR 3.2 Cr",
//       beds: null,
//       baths: 2,
//       area: "2,400 sqft",
//       tag: "For Sale",
//       img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=75",
//     },
//     {
//       title: "Clifton Luxury Flat",
//       location: "Clifton Block 5, Karachi",
//       type: "Rental",
//       price: "PKR 85,000/mo",
//       beds: 2,
//       baths: 2,
//       area: "1,200 sqft",
//       tag: "For Rent",
//       img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=75",
//     },
//     {
//       title: "North Nazimabad Home",
//       location: "North Nazimabad, Block H",
//       type: "House",
//       price: "PKR 2.8 Cr",
//       beds: 4,
//       baths: 3,
//       area: "240 sq yd",
//       tag: "For Sale",
//       img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=75",
//     },
//     {
//       title: "Korangi Commercial",
//       location: "Korangi Industrial Area",
//       type: "Commercial",
//       price: "PKR 5.5 Cr",
//       beds: null,
//       baths: 3,
//       area: "4,000 sqft",
//       tag: "For Sale",
//       img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&q=75",
//     },
//   ];

//   const shown =
//     filter === "All" ? listings : listings.filter((l) => l.type === filter);

//   return (
//     <section id="properties" className="bg-[#0B1628] py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 reveal">
//           <div>
//             <span className="text-[#C9A84C] text-[.62rem] font-bold tracking-[.28em] uppercase">
//               Listings
//             </span>
//             <h2
//               className="font-display text-[#F8F6F1] font-light mt-2"
//               style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)" }}
//             >
//               Featured <span className="text-[#C9A84C]">Properties</span>
//             </h2>
//           </div>
//           {/* Filter buttons */}
//           <div className="flex flex-wrap gap-2">
//             {cats.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => setFilter(c)}
//                 className={`px-4 py-2 text-[.62rem] font-bold tracking-[.14em] uppercase rounded-sm border transition-all duration-200 ${
//                   filter === c
//                     ? "bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] border-transparent"
//                     : "bg-transparent text-[#8B99B5] border-[#C9A84C]/20 hover:text-[#C9A84C] hover:border-[#C9A84C]/40"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {shown.map(
//             ({ title, location, price, beds, baths, area, tag, img }) => (
//               <div
//                 key={title}
//                 className="prop-card bg-[#141F34] border border-[#C9A84C]/10 rounded overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 hover:border-[#C9A84C]/35 transition-all duration-300 reveal"
//               >
//                 <div className="prop-img relative overflow-hidden h-48">
//                   <img
//                     src={img}
//                     alt={title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-3 left-3">
//                     <span
//                       className={`text-[.58rem] font-bold tracking-[.12em] uppercase px-2.5 py-1 rounded-sm backdrop-blur-sm border border-[#C9A84C]/35 ${tag === "For Rent" ? "bg-[#C9A84C]/88 text-[#0B1628]" : "bg-[#0B1628]/80 text-[#C9A84C]"}`}
//                     >
//                       {tag}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3
//                     className="font-display text-[#F8F6F1] font-semibold mb-1"
//                     style={{ fontSize: "1.08rem" }}
//                   >
//                     {title}
//                   </h3>
//                   <p className="text-[#8B99B5] text-[.73rem]">📍 {location}</p>
//                   <div className="border-t border-[#C9A84C]/08 my-3" />
//                   <div className="flex flex-wrap gap-4 text-[#8B99B5] text-[.7rem] mb-4">
//                     {beds && <span>🛏 {beds} Beds</span>}
//                     <span>🚿 {baths} Baths</span>
//                     <span>📐 {area}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span
//                       className="font-display text-[#C9A84C] font-semibold"
//                       style={{ fontSize: "1.05rem" }}
//                     >
//                       {price}
//                     </span>
//                     <button className="border border-[#C9A84C]/45 text-[#C9A84C] text-[.6rem] font-semibold tracking-[.12em] uppercase px-3 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-200">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ),
//           )}
//         </div>

//         <div className="text-center mt-12 reveal">
//           <button className="border border-[#C9A84C]/45 text-[#C9A84C] font-semibold text-[.68rem] tracking-[.14em] uppercase px-10 py-4 rounded-sm hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-200">
//             View All Listings
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Property;

import React, { useState } from "react";

const CATS = ["All", "Apartment", "House", "Commercial", "Rental"];

const LISTINGS = [
  {
    title: "Gulshan Heights",
    location: "Gulshan-e-Iqbal, Block 13",
    type: "Apartment",
    price: "PKR 1.8 Cr",
    beds: 3,
    baths: 2,
    area: "1,650 sqft",
    tag: "For Sale",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    title: "DHA Executive Villa",
    location: "DHA Phase 5, Karachi",
    type: "House",
    price: "PKR 9.5 Cr",
    beds: 5,
    baths: 4,
    area: "500 sq yd",
    tag: "For Sale",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    featured: true,
  },
  {
    title: "Bahria Sky Tower",
    location: "Bahria Town, Karachi",
    type: "Commercial",
    price: "PKR 3.2 Cr",
    beds: null,
    baths: 2,
    area: "2,400 sqft",
    tag: "For Sale",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    title: "Clifton Luxury Flat",
    location: "Clifton Block 5, Karachi",
    type: "Rental",
    price: "PKR 85,000/mo",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    tag: "For Rent",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    title: "North Nazimabad Home",
    location: "North Nazimabad, Block H",
    type: "House",
    price: "PKR 2.8 Cr",
    beds: 4,
    baths: 3,
    area: "240 sq yd",
    tag: "For Sale",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    title: "Korangi Commercial",
    location: "Korangi Industrial Area",
    type: "Commercial",
    price: "PKR 5.5 Cr",
    beds: null,
    baths: 3,
    area: "4,000 sqft",
    tag: "For Sale",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
  },
];

const BedIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M2 4v16M2 8h20v12H2M2 12h20" />
    <rect x="6" y="4" width="5" height="4" rx="1" />
    <rect x="13" y="4" width="5" height="4" rx="1" />
  </svg>
);
const BathIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z" />
    <path d="M4 12V5a2 2 0 012-2h2a2 2 0 012 2v7" />
  </svg>
);
const AreaIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18M9 3v18" />
  </svg>
);
const PinIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function PropertySection() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const shown =
    filter === "All" ? LISTINGS : LISTINGS.filter((l) => l.type === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .prop-root {
          font-family: 'DM Sans', sans-serif;
          background: #080F1C;
          padding: 7rem 0 8rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid */
        .prop-root::before {
          content: '';
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        .prop-glow {
          position: absolute; top: 0; right: -100px; z-index: 0;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        .prop-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header row */
        .prop-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 2rem; margin-bottom: 3rem;
        }

        .prop-eyebrow {
          display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;
        }
        .prop-eyebrow-line {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, #C9A84C, transparent);
        }
        .prop-eyebrow span {
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C9A84C;
        }
        .prop-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; line-height: 1.1;
          color: #F0EEE9; margin: 0;
        }
        .prop-heading em { font-style: italic; font-weight: 600; color: #C9A84C; }

        /* Filter tabs */
        .prop-filters {
          display: flex; gap: 2px;
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.1);
          padding: 4px;
        }
        .prop-filter-btn {
          padding: 8px 16px;
          font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: all 0.2s;
          background: none; color: #5A6E88;
        }
        .prop-filter-btn.active {
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          color: #0B1628;
        }
        .prop-filter-btn:not(.active):hover { color: #C9A84C; }

        /* Cards grid */
        .prop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        /* Card */
        .prop-card {
          background: #0D1A2E;
          border: 1px solid rgba(201,168,76,0.08);
          overflow: hidden;
          position: relative;
          transition: border-color 0.3s, transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s;
          cursor: pointer;
        }
        .prop-card:hover {
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5);
        }
        .prop-card.featured { border-color: rgba(201,168,76,0.2); }

        /* Featured ribbon */
        .prop-ribbon {
          position: absolute; top: 16px; right: -28px; z-index: 5;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          color: #0B1628;
          font-size: 0.5rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          padding: 5px 36px;
          transform: rotate(45deg);
        }

        /* Image */
        .prop-img-wrap {
          position: relative; height: 210px; overflow: hidden;
        }
        .prop-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.23,1,0.32,1);
          filter: brightness(0.85) saturate(0.9);
        }
        .prop-card:hover .prop-img-wrap img { transform: scale(1.06); }

        /* Overlay gradient */
        .prop-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(8,15,28,0.8) 100%);
        }

        /* Tag badge */
        .prop-tag {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          font-size: 0.55rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          padding: 5px 11px;
          backdrop-filter: blur(8px);
        }
        .prop-tag.sale {
          background: rgba(11,22,40,0.85);
          border: 1px solid rgba(201,168,76,0.4);
          color: #C9A84C;
        }
        .prop-tag.rent {
          background: rgba(201,168,76,0.9);
          border: 1px solid transparent;
          color: #0B1628;
        }

        /* Type chip */
        .prop-type-chip {
          position: absolute; bottom: 14px; right: 14px; z-index: 2;
          font-size: 0.52rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 4px 10px;
          background: rgba(8,15,28,0.7);
          border: 1px solid rgba(201,168,76,0.15);
          color: rgba(201,168,76,0.7);
          backdrop-filter: blur(8px);
        }

        /* Body */
        .prop-body { padding: 1.4rem 1.4rem 1.5rem; }

        .prop-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.18rem; font-weight: 600;
          color: #F0EEE9; margin: 0 0 6px;
          line-height: 1.2;
        }
        .prop-location {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.72rem; font-weight: 300;
          color: #5A6E88; margin-bottom: 1.1rem;
        }
        .prop-location svg { flex-shrink: 0; color: #C9A84C; opacity: 0.7; }

        /* Divider */
        .prop-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(201,168,76,0.12), transparent);
          margin-bottom: 1rem;
        }

        /* Specs row */
        .prop-specs {
          display: flex; gap: 1.25rem; margin-bottom: 1.25rem;
        }
        .prop-spec {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.7rem; font-weight: 300;
          color: #5A6E88;
        }
        .prop-spec svg { color: #C9A84C; opacity: 0.6; flex-shrink: 0; }

        /* Price + CTA */
        .prop-footer {
          display: flex; align-items: center; justify-content: space-between;
        }
        .prop-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 600;
          color: #C9A84C;
        }
        .prop-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px;
          border: 1px solid rgba(201,168,76,0.3);
          color: #C9A84C;
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          background: none; cursor: pointer;
          transition: all 0.3s;
        }
        .prop-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .prop-btn:hover { color: #0B1628; border-color: #C9A84C; }
        .prop-btn:hover::before { transform: translateX(0); }
        .prop-btn span { position: relative; z-index: 1; }
        .prop-btn svg { position: relative; z-index: 1; }

        /* Bottom bar */
        .prop-bottom {
          margin-top: 3.5rem;
          display: flex; align-items: center; justify-content: center; gap: 2rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(201,168,76,0.08);
        }
        .prop-count {
          font-size: 0.75rem; font-weight: 300;
          color: #4A5E78;
          letter-spacing: 0.04em;
        }
        .prop-count strong {
          font-weight: 500; color: #C9A84C;
        }
        .prop-view-all {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 30px;
          border: 1px solid rgba(201,168,76,0.35);
          color: #C9A84C;
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          text-decoration: none; cursor: pointer;
          background: none;
          transition: all 0.3s;
        }
        .prop-view-all::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .prop-view-all:hover { color: #0B1628; }
        .prop-view-all:hover::before { transform: translateX(0); }
        .prop-view-all span { position: relative; z-index: 1; }
        .prop-view-all svg { position: relative; z-index: 1; }

        @media (max-width: 900px) {
          .prop-header { flex-direction: column; align-items: flex-start; }
          .prop-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .prop-grid { grid-template-columns: 1fr; }
          .prop-filters { flex-wrap: wrap; }
        }
      `}</style>

      <section id="properties" className="prop-root">
        <div className="prop-glow" />

        <div className="prop-inner">
          {/* Header */}
          <div className="prop-header">
            <div>
              <div className="prop-eyebrow">
                <div className="prop-eyebrow-line" />
                <span>Listings</span>
              </div>
              <h2 className="prop-heading">
                Featured <em>Properties</em>
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="prop-filters">
              {CATS.map((c) => (
                <button
                  key={c}
                  className={`prop-filter-btn${filter === c ? " active" : ""}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="prop-grid">
            {shown.map((listing) => {
              const {
                title,
                location,
                price,
                beds,
                baths,
                area,
                tag,
                img,
                featured,
                type,
              } = listing;
              return (
                <div
                  key={title}
                  className={`prop-card${featured ? " featured" : ""}`}
                  onMouseEnter={() => setHovered(title)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {featured && <div className="prop-ribbon">Featured</div>}

                  {/* Image */}
                  <div className="prop-img-wrap">
                    <img src={img} alt={title} />
                    <div className="prop-img-overlay" />
                    <div
                      className={`prop-tag${tag === "For Rent" ? " rent" : " sale"}`}
                    >
                      {tag}
                    </div>
                    <div className="prop-type-chip">{type}</div>
                  </div>

                  {/* Body */}
                  <div className="prop-body">
                    <h3 className="prop-title">{title}</h3>
                    <div className="prop-location">
                      <PinIcon />
                      {location}
                    </div>
                    <div className="prop-divider" />
                    <div className="prop-specs">
                      {beds && (
                        <div className="prop-spec">
                          <BedIcon />
                          {beds} Beds
                        </div>
                      )}
                      <div className="prop-spec">
                        <BathIcon />
                        {baths} Baths
                      </div>
                      <div className="prop-spec">
                        <AreaIcon />
                        {area}
                      </div>
                    </div>
                    <div className="prop-footer">
                      <div className="prop-price">{price}</div>
                      <button className="prop-btn">
                        <span>View Details</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="prop-bottom">
            <p className="prop-count">
              Showing <strong>{shown.length}</strong> of{" "}
              <strong>{LISTINGS.length}</strong> listings
            </p>
            <button className="prop-view-all">
              <span>View All Listings</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
