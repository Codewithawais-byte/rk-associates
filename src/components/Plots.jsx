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

export default function PlotsSection() {
  const [city, setCity] = useState("All");

  const shown = city === "All" ? PLOTS : PLOTS.filter((p) => p.city === city);

  return (
    <section
      id="plots"
      className="relative bg-[#F8F5EF] py-28 overflow-hidden font-sans"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.8px,transparent_1px)] bg-[40px_40px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
              Land Inventory
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
          </div>
          <h2 className="font-serif text-[2.1rem] md:text-[2.75rem] leading-tight font-light text-[#1C2B3A]">
            Premium{" "}
            <em className="font-semibold not-italic text-[#C9A84C]">Plots</em>{" "}
            &amp; Land
          </h2>
          <p className="mt-4 text-[#55637B] text-[0.9rem] max-w-md mx-auto leading-relaxed">
            Secure your investment with verified, clean-title plots across
            Karachi &amp; Islamabad's most sought-after societies.
          </p>

          {/* City Filter Tabs */}
          <div className="inline-flex border border-[#C9A84C]/30 mt-8 rounded-lg overflow-hidden">
            {CITIES.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`px-8 py-3 text-xs font-medium tracking-[0.14em] uppercase transition-all ${
                  city === c
                    ? "bg-[#C9A84C] text-[#0B1628]"
                    : "text-[#55637B] hover:text-[#C9A84C] hover:bg-[#F5F0E6]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Karachi Section */}
        {(city === "All" || city === "Karachi") && (
          <>
            {city === "All" && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A84C]">
                  KARACHI
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#C9A84C]/30 to-transparent" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {PLOTS.filter((p) => p.city === "Karachi").map((plot, i) => (
                <PlotCard key={i} plot={plot} />
              ))}
            </div>
          </>
        )}

        {/* Islamabad Section */}
        {(city === "All" || city === "Islamabad") && (
          <>
            {city === "All" && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A84C]">
                  ISLAMABAD
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#C9A84C]/30 to-transparent" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLOTS.filter((p) => p.city === "Islamabad").map((plot, i) => (
                <PlotCard key={i} plot={plot} />
              ))}
            </div>
          </>
        )}

        {/* CTA Banner */}
        <div className="mt-16 border border-[#C9A84C]/20 bg-white p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl shadow-sm">
          <div>
            <h3 className="font-serif text-[1.75rem] md:text-[2rem] font-light text-[#1C2B3A]">
              Can't find the{" "}
              <em className="font-semibold not-italic text-[#C9A84C]">
                right plot?
              </em>
            </h3>
            <p className="text-[#55637B] mt-3 text-[0.95rem]">
              Tell us your requirements — we'll find what you need across
              Karachi &amp; Islamabad.
            </p>
          </div>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] font-medium text-sm tracking-widest uppercase whitespace-nowrap hover:shadow-xl hover:shadow-[#C9A84C]/30 transition-all active:scale-95"
          >
            Talk to an Expert
            <svg
              width="14"
              height="14"
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
  );
}

// function PlotCard({ plot }) {
//   const { society, phase, size, price, status, type, features, img, city } =
//     plot;
//   const isSold = status === "Sold Out";

//   return (
//     <div
//       className={`group bg-[#0B1628] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${isSold ? "opacity-60" : ""}`}
//     >
//       {/* Image */}
//       <div className="relative h-[170px] overflow-hidden">
//         <img
//           src={img}
//           alt={society}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 saturate-90"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />

//         {/* Status Badge */}
//         <div
//           className={`absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1 backdrop-blur-md border ${
//             status === "Available"
//               ? "bg-emerald-500/10 border-emerald-400/40 text-emerald-400"
//               : status === "Limited"
//                 ? "bg-[#C9A84C]/10 border-[#C9A84C]/40 text-[#C9A84C]"
//                 : "bg-red-500/10 border-red-400/40 text-red-400"
//           }`}
//         >
//           <span
//             className={`w-2 h-2 rounded-full ${status !== "Sold Out" ? "animate-pulse" : ""}`}
//           />
//           {status}
//         </div>

//         {/* Type */}
//         <div className="absolute top-4 right-4 text-[10px] font-medium tracking-widest uppercase px-3 py-1 bg-[#0B1628]/80 border border-[#C9A84C]/20 text-[#C9A84C]/80 backdrop-blur">
//           {type}
//         </div>

//         {/* City Pill */}
//         <div className="absolute bottom-4 left-4 text-[10px] font-medium tracking-widest uppercase px-3 py-1 bg-[#C9A84C]/20 border border-[#C9A84C]/30 text-[#C9A84C]">
//           {city}
//         </div>
//       </div>

//       {/* Card Body */}
//       <div className="p-6">
//         <h3 className="font-serif text-[1.15rem] font-semibold text-[#F0EEE9] leading-tight">
//           {society}
//         </h3>
//         <p className="text-[#4A5E78] text-sm mt-1 mb-5">{phase}</p>

//         {/* Size & Price */}
//         <div className="grid grid-cols-2 gap-px bg-[#C9A84C]/10 border border-[#C9A84C]/10 mb-6">
//           <div className="bg-[#0D1A2C] p-4 text-center">
//             <div className="font-serif text-lg font-semibold text-[#C9A84C]">
//               {size}
//             </div>
//             <div className="text-[10px] uppercase tracking-widest text-[#3A4E66] mt-1">
//               Plot Size
//             </div>
//           </div>
//           <div className="bg-[#0D1A2C] p-4 text-center">
//             <div className="font-serif text-lg font-semibold text-[#C9A84C]">
//               {price}
//             </div>
//             <div className="text-[10px] uppercase tracking-widest text-[#3A4E66] mt-1">
//               Price
//             </div>
//           </div>
//         </div>

//         {/* Features */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {features.map((f, i) => (
//             <span
//               key={i}
//               className="inline-flex items-center gap-2 text-xs text-[#4A5E78] border border-white/5 bg-white/5 px-3 py-1"
//             >
//               <span className="w-1 h-1 bg-[#C9A84C]/60 rounded-full" />
//               {f}
//             </span>
//           ))}
//         </div>

//         {/* Button */}
//         <button
//           disabled={isSold}
//           className={`w-full py-4 text-xs font-medium tracking-[0.14em] uppercase transition-all ${
//             isSold
//               ? "bg-[#1A2333] text-[#2A3A50] cursor-not-allowed"
//               : "border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1628]"
//           }`}
//         >
//           {isSold ? "Sold Out" : "Enquire Now"}
//         </button>
//       </div>
//     </div>
//   );
// }
function PlotCard({ plot }) {
  const { society, phase, size, price, status, type, features, img, city } =
    plot;
  const isSold = status === "Sold Out";

  return (
    <div
      className={`group bg-white border border-[#EDE6D9] hover:border-[#C9A84C]/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl ${isSold ? "opacity-75" : ""}`}
    >
      {/* Image */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={img}
          alt={society}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />

        {/* Status Badge */}
        <div
          className={`absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1 backdrop-blur-md border ${
            status === "Available"
              ? "bg-emerald-500/10 border-emerald-400/50 text-emerald-600"
              : status === "Limited"
                ? "bg-[#C9A84C]/10 border-[#C9A84C]/40 text-[#C9A84C]"
                : "bg-red-500/10 border-red-400/50 text-red-600"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${status !== "Sold Out" ? "animate-pulse" : ""}`}
          />
          {status}
        </div>

        {/* Type */}
        <div className="absolute top-4 right-4 text-[10px] font-medium tracking-widest uppercase px-3 py-1 bg-white/90 border border-[#C9A84C]/20 text-[#1C2B3A] backdrop-blur">
          {type}
        </div>

        {/* City Pill */}
        <div className="absolute bottom-4 left-4 text-[10px] font-medium tracking-widest uppercase px-3 py-1 bg-[#C9A84C]/90 text-white border border-[#C9A84C]">
          {city}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="font-serif text-[1.2rem] font-semibold text-[#1C2B3A] leading-tight">
          {society}
        </h3>
        <p className="text-[#55637B] text-sm mt-1 mb-5">{phase}</p>

        {/* Size & Price */}
        <div className="grid grid-cols-2 gap-px bg-[#F5F0E6] border border-[#EDE6D9] mb-6">
          <div className="bg-white p-4 text-center">
            <div className="font-serif text-lg font-semibold text-[#C9A84C]">
              {size}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#6A7A94] mt-1">
              Plot Size
            </div>
          </div>
          <div className="bg-white p-4 text-center">
            <div className="font-serif text-lg font-semibold text-[#C9A84C]">
              {price}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#6A7A94] mt-1">
              Price
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((f, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs text-[#55637B] border border-[#EDE6D9] bg-white px-3 py-1 rounded"
            >
              <span className="w-1 h-1 bg-[#C9A84C] rounded-full" />
              {f}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          disabled={isSold}
          className={`w-full py-4 text-xs font-medium tracking-[0.14em] uppercase transition-all rounded ${
            isSold
              ? "bg-[#F0EDE6] text-[#9CA3AF] cursor-not-allowed"
              : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white"
          }`}
        >
          {isSold ? "Sold Out" : "Enquire Now"}
        </button>
      </div>
    </div>
  );
}
