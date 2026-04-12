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
      {/* <section
        id="services"
        className="bg-[#0D1728] relative overflow-hidden py-14 px-4 md:px-14 font-sans"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
                <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
                  What We Offer
                </span>
              </div>

              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] font-light text-[#F0EEE9]">
                Complete Real Estate
                <br />
                <em className="font-semibold text-[#C9A84C] not-italic">
                  Solutions
                </em>
              </h2>
            </div>

            <p className="text-[#6A7A94] text-[0.87rem] leading-relaxed max-w-md lg:ml-auto">
              From finding your dream home to securing a sound commercial
              investment — RK Associates handles it all under one roof.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/10 border border-[#C9A84C]/10">
            {SERVICES.map(({ icon, title, desc, stat }) => (
              <div
                key={title}
                className="group bg-[#0B1628] p-10 md:p-10 hover:bg-[#0E1C30] transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
           
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

           
                <div className="w-[52px] h-[52px] border border-[#C9A84C]/20 bg-[#C9A84C]/5 flex items-center justify-center mb-6 transition-all group-hover:border-[#C9A84C]/50 group-hover:bg-[#C9A84C]/10">
                  {icon}
                </div>

                <h3 className="font-serif text-[1.2rem] font-semibold text-[#F0EEE9] mb-3">
                  {title}
                </h3>

                <p className="text-[#6A7A94] text-[0.8rem] leading-[1.7] mb-8">
                  {desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-[#C9A84C]/60 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {stat}
                  </span>

                  <div className="flex items-center gap-2 text-[#C9A84C] text-[10px] font-medium tracking-[0.14em] uppercase">
                    <span>Learn More</span>
                    <svg
                      className="w-3 h-3 transition-transform group-hover:translate-x-1"
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

          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C9A84C]/10 bg-[#C9A84C]/5 px-8 py-8 md:px-10">
            <div className="font-serif text-[1.4rem] text-[#F0EEE9]">
              Not sure what you need? Let us{" "}
              <span className="text-[#C9A84C] italic">guide you.</span>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-[13px] border border-[#C9A84C]/50 text-[#C9A84C] text-[10px] font-medium tracking-[0.16em] uppercase overflow-hidden hover:text-[#0B1628] transition-all"
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <svg
                className="w-[13px] h-[13px] relative z-10"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>

            
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] to-[#E2C27D] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section> */}

      <section
        id="services"
        className="bg-[#F8F5EF] relative overflow-hidden py-14 px-4 md:px-14 font-sans"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
                <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
                  What We Offer
                </span>
              </div>

              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] font-light text-[#1C2B3A]">
                Complete Real Estate
                <br />
                <em className="font-semibold text-[#C9A84C] not-italic">
                  Solutions
                </em>
              </h2>
            </div>

            <p className="text-[#55637B] text-[0.87rem] leading-relaxed max-w-md lg:ml-auto">
              From finding your dream home to securing a sound commercial
              investment — RK Associates handles it all under one roof.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/10 border border-[#C9A84C]/10 rounded-2xl overflow-hidden">
            {SERVICES.map(({ icon, title, desc, stat }) => (
              <div
                key={title}
                className="group bg-white p-10 md:p-10 hover:bg-[#FAF7F0] transition-all duration-300 relative overflow-hidden cursor-pointer border border-transparent hover:border-[#C9A84C]/10"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon */}
                <div className="w-[52px] h-[52px] border border-[#C9A84C]/20 bg-[#C9A84C]/5 flex items-center justify-center mb-6 transition-all group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/10 rounded-xl">
                  {icon}
                </div>

                <h3 className="font-serif text-[1.25rem] font-semibold text-[#1C2B3A] mb-3">
                  {title}
                </h3>

                <p className="text-[#55637B] text-[0.875rem] leading-[1.75] mb-8">
                  {desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-widest uppercase text-[#C9A84C] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {stat}
                  </span>

                  <div className="flex items-center gap-2 text-[#C9A84C] text-[10px] font-medium tracking-[0.14em] uppercase">
                    <span>Learn More</span>
                    <svg
                      className="w-3 h-3 transition-transform group-hover:translate-x-1"
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

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C9A84C]/20 bg-white px-8 py-8 md:px-10 rounded-2xl shadow-sm">
            <div className="font-serif text-[1.4rem] text-[#1C2B3A]">
              Not sure what you need? Let us{" "}
              <span className="text-[#C9A84C] italic">guide you.</span>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-[13px] border border-[#C9A84C] text-[#C9A84C] text-[10px] font-medium tracking-[0.16em] uppercase overflow-hidden hover:text-white transition-all hover:shadow-md"
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <svg
                className="w-[13px] h-[13px] relative z-10"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>

              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] to-[#E2C27D] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
