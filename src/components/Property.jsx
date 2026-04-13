import { BedDoubleIcon, Bath, LandPlot, MapPin } from "lucide-react";
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

export default function PropertySection() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const shown =
    filter === "All" ? LISTINGS : LISTINGS.filter((l) => l.type === filter);

  return (
    <>
      <section
        id="properties"
        className="relative bg-[#F8F5EF] py-28 overflow-hidden font-sans"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.06)_1px,transparent_1px)] bg-[80px_80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
                <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
                  Listings
                </span>
              </div>
              <h2 className="font-serif text-[2.1rem] md:text-[2.75rem] leading-tight font-light text-[#1C2B3A]">
                Featured{" "}
                <em className="font-semibold not-italic text-[#C9A84C]">
                  Properties
                </em>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-white border border-[#C9A84C]/20 p-1 gap-1 w-full sm:w-fit rounded-xl shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`shrink-0 px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase transition-all rounded-lg ${
                    filter === c
                      ? "bg-[#C9A84C] text-[#0B1628] shadow-sm"
                      : "text-[#55637B] hover:text-[#C9A84C] hover:bg-[#F8F5EF]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="group bg-white border border-[#EDE6D9] hover:border-[#C9A84C]/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  onMouseEnter={() => setHovered(title)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-[210px] overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

                    {/* Tag */}
                    <div
                      className={`absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-4 py-1 backdrop-blur-md ${
                        tag === "For Rent"
                          ? "bg-[#C9A84C] text-[#0B1628]"
                          : "bg-white/90 border border-[#C9A84C]/30 text-[#1C2B3A]"
                      }`}
                    >
                      {tag}
                    </div>

                    {/* Type Chip */}
                    <div className="absolute bottom-4 right-4 text-[10px] font-medium tracking-widest uppercase px-3 py-1 bg-white/90 border border-[#C9A84C]/20 text-[#1C2B3A] backdrop-blur-md">
                      {type}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-[1.2rem] font-semibold text-[#1C2B3A] leading-tight mb-2">
                      {title}
                    </h3>

                    <div className="flex items-center gap-2 text-[#55637B] text-sm mb-4">
                      <MapPin className="w-4" />
                      {location}
                    </div>

                    <div className="h-px bg-gradient-to-r from-[#C9A84C]/20 to-transparent mb-5" />

                    {/* Specs */}
                    <div className="flex gap-5 mb-6 text-[#55637B] text-sm">
                      {beds && (
                        <div className="flex items-center gap-2">
                          <BedDoubleIcon className="w-4" />
                          {beds} Beds
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Bath className="w-4" />
                        {baths} Baths
                      </div>
                      <div className="flex items-center gap-2">
                        <LandPlot className="w-4" />
                        {area}
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between">
                      <div className="font-serif text-[1.2rem] font-semibold text-[#C9A84C]">
                        {price}
                      </div>

                      <button className="group/btn relative inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-xs font-medium tracking-widest uppercase overflow-hidden transition-all hover:text-white hover:bg-[#C9A84C]">
                        <span className="relative z-10">View Details</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="relative z-10 transition-transform group-hover/btn:translate-x-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[#55637B] text-sm">
              Showing <strong className="text-[#C9A84C]">{shown.length}</strong>{" "}
              of <strong className="text-[#C9A84C]">{LISTINGS.length}</strong>{" "}
              listings
            </p>

            <button className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] text-xs font-medium tracking-[0.16em] uppercase overflow-hidden transition-all hover:text-white hover:bg-[#C9A84C]">
              <span className="relative z-10">View All Listings</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="relative z-10 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] translate-x-[-101%] group-hover:translate-x-0 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
