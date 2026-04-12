import React, { useState } from "react";
import { MapPin, BedDouble, Bath, LandPlot } from "lucide-react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Plot1 from "../assets/plot1.jpg";
import Plot2 from "../assets/plot2.jpeg";
import apt1 from "../assets/apt1.jpg";
import apt2 from "../assets/apt2.webp";
import apt3 from "../assets/apt3.jpeg";
import apt4 from "../assets/apt4.jpeg";

const ALL_PROPERTIES = [
  // 5 Houses for Sale in Islamabad
  {
    id: 1,
    title: "Luxury 5 Marla House",
    type: "House",
    status: "For Sale",
    location: "Bahria Town Phase 8, Islamabad",
    price: "PKR 4.85 Cr",
    beds: 5,
    baths: 6,
    area: "5 Marla",
    img: house1,
    featured: true,
  },
  {
    id: 2,
    title: "Modern 10 Marla Villa",
    type: "House",
    status: "For Sale",
    location: "DHA Phase 2, Islamabad",
    price: "PKR 8.25 Cr",
    beds: 6,
    baths: 7,
    area: "10 Marla",
    img: house2,
  },
  {
    id: 3,
    title: "Elegant 7 Marla Bungalow",
    type: "House",
    status: "For Sale",
    location: "Park View City, Islamabad",
    price: "PKR 5.95 Cr",
    beds: 5,
    baths: 5,
    area: "7 Marla",
    img: house3,
  },
  {
    id: 4,
    title: "Premium 5 Marla House",
    type: "House",
    status: "For Sale",
    location: "CDA Sector D-12, Islamabad",
    price: "PKR 3.75 Cr",
    beds: 4,
    baths: 5,
    area: "5 Marla",
    img: house4,
  },
  {
    id: 5,
    title: "Executive 8 Marla Home",
    type: "House",
    status: "For Sale",
    location: "Bahria Enclave, Islamabad",
    price: "PKR 6.45 Cr",
    beds: 5,
    baths: 6,
    area: "8 Marla",
    img: house5,
  },

  // 2 Plots for Sale
  {
    id: 6,
    title: "Prime 10 Marla Plot",
    type: "Plot",
    status: "For Sale",
    location: "Bahria Town Phase 7, Islamabad",
    price: "PKR 2.85 Cr",
    area: "10 Marla",
    img: Plot1,
  },
  {
    id: 7,
    title: "Corner 1 Kanal Plot",
    type: "Plot",
    status: "For Sale",
    location: "DHA Valley, Islamabad",
    price: "PKR 5.20 Cr",
    area: "1 Kanal",
    img: Plot2,
  },

  // 2 Apartments for Rent
  {
    id: 8,
    title: "Luxury 3 Bedroom Apartment",
    type: "Apartment",
    status: "For Rent",
    location: "Blue World City, Islamabad",
    price: "PKR 85,000/month",
    beds: 3,
    baths: 4,
    area: "2000 Sq Ft",
    img: apt1,
  },
  {
    id: 9,
    title: "Spacious 4 Bedroom Penthouse",
    type: "Apartment",
    status: "For Rent",
    location: "Centaurus Residences",
    price: "PKR 1.45 Lakh/month",
    beds: 4,
    baths: 5,
    area: "3200 Sq Ft",
    img: apt2,
  },

  // 2 Apartments for Sale
  {
    id: 10,
    title: "Modern 3 Bedroom Apartment",
    type: "Apartment",
    status: "For Sale",
    location: "The Centaurus, Islamabad",
    price: "PKR 2.95 Cr",
    beds: 3,
    baths: 4,
    area: "2200 Sq Ft",
    img: apt3,
  },
  {
    id: 11,
    title: "Luxury 4 Bedroom Apartment",
    type: "Apartment",
    status: "For Sale",
    location: "Gulberg Greens, Islamabad",
    price: "PKR 3.65 Cr",
    beds: 4,
    baths: 5,
    area: "2800 Sq Ft",
    img: apt4,
  },
];

const PropertiesListings = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredProperties = ALL_PROPERTIES.filter((property) => {
    const typeMatch = filterType === "All" || property.type === filterType;
    const statusMatch =
      filterStatus === "All" || property.status === filterStatus;
    return typeMatch && statusMatch;
  });

  return (
    <section
      id="properties-listings"
      className="relative bg-[#F8F5EF] py-28 overflow-hidden font-sans"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.8px,transparent_1px)] bg-[40px_40px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
              Islamabad Listings
            </span>
            <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
          </div>
          <h2 className="font-serif text-[2.1rem] md:text-[2.75rem] leading-tight font-light text-[#1C2B3A]">
            Properties in <span className="text-[#C9A84C]">Islamabad</span>
          </h2>
          <p className="mt-4 text-[#55637B] max-w-md mx-auto">
            Handpicked premium houses, plots, and apartments available for sale
            and rent
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex bg-white border border-[#C9A84C]/20 rounded-2xl p-1">
            {["All", "House", "Plot", "Apartment"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all ${
                  filterType === type
                    ? "bg-[#C9A84C] text-[#0B1628]"
                    : "text-[#55637B] hover:bg-[#F8F5EF]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex bg-white border border-[#C9A84C]/20 rounded-2xl p-1">
            {["All", "For Sale", "For Rent"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all ${
                  filterStatus === status
                    ? "bg-[#C9A84C] text-[#0B1628]"
                    : "text-[#55637B] hover:bg-[#F8F5EF]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white border border-[#EDE6D9] hover:border-[#C9A84C]/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-xl ${
                    property.status === "For Sale"
                      ? "bg-[#C9A84C] text-[#0B1628]"
                      : "bg-emerald-600 text-white"
                  }`}
                >
                  {property.status}
                </div>

                {property.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] text-[10px] font-bold px-5 py-1 rounded-xl">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-serif text-[1.25rem] font-semibold text-[#1C2B3A] leading-tight mb-2">
                  {property.title}
                </h3>

                <div className="flex items-center gap-2 text-[#55637B] mb-5">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-[#C9A84C]">
                      {property.price}
                    </div>
                    <div className="text-xs text-[#6A7A94] uppercase tracking-widest mt-1">
                      {property.area}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[#55637B]">
                    {property.beds && (
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-4 h-4" />
                        <span className="text-sm">{property.beds}</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4" />
                        <span className="text-sm">{property.baths}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20 text-[#55637B]">
            No properties found for the selected filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesListings;
