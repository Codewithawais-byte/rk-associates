function Footer() {
  const cols = [
    {
      title: "Services",
      links: [
        "Buy Property",
        "Sell Property",
        "Rent Property",
        "Plot Investment",
        "Commercial Space",
      ],
    },
    {
      title: "Locations",
      links: [
        "DHA Karachi",
        "Bahria Town",
        "Gulshan-e-Iqbal",
        "Clifton",
        "North Nazimabad",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Testimonials", "Blog", "Careers"],
    },
  ];

  return (
    <footer className="bg-[#111E35] border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="logo-hex w-9 h-9 flex items-center justify-center bg-gradient-to-br from-[#C9A84C] to-[#E2C27D]">
                <span className="font-display font-bold text-[.78rem] text-[#0B1628]">
                  RK
                </span>
              </div>
              <div>
                <div
                  className="font-display font-semibold text-[#F8F6F1] leading-tight"
                  style={{ fontSize: ".88rem" }}
                >
                  RK Associates
                </div>
                <div
                  className="text-[#C9A84C] font-bold tracking-[.22em] uppercase"
                  style={{ fontSize: ".44rem" }}
                >
                  &amp; Builders
                </div>
              </div>
            </div>
            <p className="text-[#8B99B5] text-[.78rem] leading-relaxed">
              Karachi's most trusted name in real estate — serving families and
              investors since 2009.
            </p>
          </div>

          {cols.map(({ title, links }) => (
            <div key={title}>
              <div className="text-[#C9A84C] text-[.6rem] font-bold tracking-[.22em] uppercase mb-4">
                {title}
              </div>
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-[#8B99B5] text-[.78rem] mb-2 hover:text-[#E2C27D] transition-colors duration-200 no-underline"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-[#C9A84C]/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8B99B5] text-[.7rem] tracking-wide">
            © {new Date().getFullYear()} RK Associates &amp; Builders. All
            rights reserved.
          </p>
          <p className="text-[#8B99B5] text-[.7rem]">
            Designed with ❤️ for Islamabad property seekers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
