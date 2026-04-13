import logo from "../assets/logo.png";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpeg";
import house4 from "../assets/house4.jpg";

const PropertyDealerLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="bg-[#0A0A0A] sticky top-0 z-50 border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-12 h-[92px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-20" alt="" />
          </div>
          <div className="hidden md:flex items-center gap-9 text-white/60 text-sm font-normal">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Buy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Sell
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Plots
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Houses
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              About
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 border border-amber-600 text-amber-500 text-sm font-medium rounded-lg hover:bg-amber-600/10 transition-colors hidden sm:block">
              List property
            </button>
            <button className="px-5 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0A0A0A] min-h-[560px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-12 py-20 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/30 text-amber-500 text-xs font-medium px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            Islamabad's most trusted dealer
          </div>
          <h1 className="text-5xl lg:text-6xl font-medium text-white leading-[1.08] tracking-tight mb-5">
            Your dream property,{" "}
            <span className="text-amber-500">our promise.</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-md mb-9">
            Premium houses, residential plots and commercial land across
            Islamabad. Trusted by 1,200+ happy families since 2015.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-7 py-3.5 bg-amber-600 text-white rounded-lg text-base font-medium hover:bg-amber-700 transition-colors">
              Browse properties
            </button>
            <button className="px-7 py-3.5 border border-white/20 text-white/80 rounded-lg text-base font-medium hover:bg-white/5 transition-colors">
              Free consultation
            </button>
          </div>
          <div className="flex items-stretch gap-10 border-t border-white/8 pt-7">
            <div>
              <div className="text-3xl font-medium text-amber-500">1,240+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">
                Properties sold
              </div>
            </div>
            <div className="w-px bg-white/8 self-stretch"></div>
            <div>
              <div className="text-3xl font-medium text-amber-500">98%</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">
                Satisfaction
              </div>
            </div>
            <div className="w-px bg-white/8 self-stretch"></div>
            <div>
              <div className="text-3xl font-medium text-amber-500">15 yrs</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">
                Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right — property preview cards */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: "🏡",
              title: "5 Marla House — DHA Phase 6",
              sub: "4 bed · 4 bath · New listing",
              price: "PKR 85 Lac",
            },
            {
              icon: "🗺",
              title: "10 Marla Plot — Bahria Town",
              sub: "Corner · 100% paid · Prime location",
              price: "PKR 45 Lac",
            },
            {
              icon: "🏢",
              title: "7 Marla Bungalow — TopCity-1",
              sub: "5 bed · Rooftop terrace · Ready",
              price: "PKR 1.65 Cr",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-amber-600/15 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 bg-amber-600/12 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <div className="text-white text-sm font-medium">{p.title}</div>
                <div className="text-white/40 text-xs mt-0.5">{p.sub}</div>
              </div>
              <div className="ml-auto text-amber-500 text-sm font-medium whitespace-nowrap">
                {p.price}
              </div>
            </div>
          ))}
          <div className="bg-white/[0.04] border border-amber-600/15 rounded-xl p-4 flex items-center gap-4">
            <div>
              <div className="text-amber-500 text-sm tracking-widest">
                ★★★★★
              </div>
              <div className="text-white/70 text-sm mt-0.5">Rated 4.9 / 5</div>
              <div className="text-white/30 text-xs mt-0.5">
                from 482 Google reviews
              </div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-white/40 text-xs">Verified by</div>
              <div className="text-amber-500 text-sm font-medium">
                Google Business
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-between items-end mb-11">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-amber-600 mb-2">
                Featured listings
              </p>
              <h2 className="text-4xl font-medium text-gray-900 tracking-tight">
                Houses &amp; plots in Islamabad
              </h2>
            </div>
            <a
              href="#"
              className="text-amber-600 text-sm font-medium hover:text-amber-700 flex items-center gap-1"
            >
              View all properties →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                img: house1,
                type: "House",
                price: "PKR 85 Lac",
                name: "5 Marla Luxurious House",
                loc: "DHA Phase 6, Islamabad",
                detail: "4 bed · 4 bath",
              },
              {
                img: house2,
                type: "Plot",
                price: "PKR 45 Lac",
                name: "10 Marla Corner Plot",
                loc: "Bahria Town, Islamabad",
                detail: "Prime · 100% paid",
              },
              {
                img: house3,
                type: "House",
                price: "PKR 1.65 Cr",
                name: "7 Marla Modern Bungalow",
                loc: "TopCity-1 Block 2, Islamabad",
                detail: "5 bed · rooftop",
              },
              {
                img: house4,
                type: "Plot",
                price: "PKR 38 Lac",
                name: "8 Marla Residential Plot",
                loc: "Scheme 33, Islamabad",
                detail: "Facing park · ready",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white text-amber-800 text-xs font-medium px-2.5 py-1 rounded-md shadow-sm">
                    {p.type}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#0A0A0A] text-amber-500 text-xs font-medium px-2.5 py-1 rounded-md border border-amber-600/30">
                    {p.price}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {p.name}
                  </div>
                  <div className="text-xs text-amber-600 mb-4">{p.loc}</div>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                    <span className="text-xs text-gray-400">{p.detail}</span>
                    <button className="text-xs bg-amber-50 text-amber-800 border-none rounded-md px-3 py-1.5 font-medium hover:bg-amber-100 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Area tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "DHA Islamabad",
              "Bahria Town",
              "TopCity-1",
              "Scheme 33",
              "F-7 / F-8 Sectors",
              "G-11 / G-13",
              "E-11 / E-7",
              "PWD Housing Society",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#0A0A0A] py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-600 mb-2">
            Why choose us
          </p>
          <h2 className="text-4xl font-medium text-white tracking-tight">
            Built on trust, driven by results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-11 border border-amber-600/12 rounded-xl overflow-hidden">
            {[
              {
                num: "15+",
                title: "Years of experience",
                text: "Deep roots in Islamabad's real estate market with unmatched understanding of local property values and regulations.",
              },
              {
                num: "1,240+",
                title: "Successful transactions",
                text: "From first-time buyers to seasoned investors — every deal handled with precision, transparency, and speed.",
              },
              {
                num: "98%",
                title: "Client satisfaction rate",
                text: "Most of our business comes from referrals. When clients trust you enough to send their family, that says everything.",
              },
            ].map((w, i) => (
              <div
                key={i}
                className={`p-9 ${i > 0 ? "border-l border-amber-600/12" : ""}`}
              >
                <div className="text-4xl font-medium text-amber-500 mb-3 tracking-tight">
                  {w.num}
                </div>
                <div className="text-base font-medium text-white mb-2">
                  {w.title}
                </div>
                <div className="text-sm text-white/40 leading-relaxed">
                  {w.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-amber-50/60">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-11">
            <p className="text-xs font-medium uppercase tracking-widest text-amber-600 mb-2">
              Real stories
            </p>
            <h2 className="text-4xl font-medium text-gray-900 tracking-tight">
              What our clients say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                stars: "★★★★☆",
                initials: "AR",
                name: "Mr. Ahmed Raza",
                meta: "DHA Phase 7 · Bought March 2026",
                quote:
                  "Helped us buy our dream 5 marla house in DHA within 3 weeks. Super professional team and completely transparent process. Highly recommended!",
              },
              {
                stars: "★★★★★",
                initials: "SK",
                name: "Saba Khan",
                meta: "Bahria Town · Bought Feb 2026",
                quote:
                  "Showed me multiple plot options in Bahria Town and negotiated the best price. Got my plot registered in just 10 days. Best dealer in Islamabad!",
              },
              {
                stars: "★★★★☆",
                initials: "FM",
                name: "Faisal Mehmood",
                meta: "TopCity-1 · Sold & bought Jan 2026",
                quote:
                  "Sold my old house and bought a bigger bungalow through them. Their marketing team brought 7 serious buyers in the first week. Very smooth experience.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-7"
              >
                <div className="text-amber-500 text-sm tracking-widest mb-4">
                  {t.stars}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xs font-medium text-amber-800">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-14">
            <p className="text-xs font-medium uppercase tracking-widest text-amber-600 mb-2">
              Get in touch
            </p>
            <h2 className="text-4xl font-medium text-gray-900 tracking-tight">
              Visit our office
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: "📍",
                  label: "Head office",
                  value: "Office # 4G, Aspire 1 Block D Top City-1 Islamabad",
                  sub: " Islamabad, Pakistan",
                  extra: "Mon – Sat · 9:00 AM – 7:00 PM",
                },
                {
                  icon: "📞",
                  label: "Phone / WhatsApp",
                  value: "+92 311 4455087",
                  sub: "Available anytime",
                },
                { icon: "✉️", label: "Email", value: "info@propertydealer.pk" },
              ].map((c, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                      {c.label}
                    </div>
                    <div className="text-base font-medium text-gray-900">
                      {c.value}
                    </div>
                    {c.sub && (
                      <div className="text-xs text-gray-400 mt-0.5">
                        {c.sub}
                      </div>
                    )}
                    {c.extra && (
                      <div className="text-xs text-amber-600 mt-2">
                        {c.extra}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-9">
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                Send us a message
              </h3>
              <p className="text-sm text-gray-400 mb-7">
                Tell us what you're looking for and we'll get back to you within
                a few hours.
              </p>
              <div className="space-y-3.5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-amber-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-amber-400 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="What are you looking for? (House / Plot / size / budget)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-amber-400 transition-colors resize-none"
                ></textarea>
                <button className="w-full py-3.5 bg-amber-600 text-white font-medium rounded-lg text-sm hover:bg-amber-700 transition-colors">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-white/6">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} className="w-34" alt="logo" />
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                Making Islamabad home since 2015. Professional real estate
                services for buying, selling, and investing in premium
                properties.
              </p>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider text-amber-600 font-medium mb-4">
                  Follow us
                </p>
                <div className="flex gap-3">
                  {["Fb", "Ig", "In", "Wa"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-8 h-8 border border-amber-600/20 rounded-lg flex items-center justify-center text-xs text-white/40 hover:border-amber-600 hover:text-amber-500 transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-wider text-amber-600 font-medium mb-5">
                Company
              </p>
              <div className="space-y-3 text-white/40 text-sm">
                {["About us", "Our team", "Careers", "Blog"].map((l) => (
                  <div
                    key={l}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-wider text-amber-600 font-medium mb-5">
                Properties
              </p>
              <div className="space-y-3 text-white/40 text-sm">
                {[
                  "Houses for sale",
                  "Plots for sale",
                  "Commercial",
                  "Rentals",
                ].map((l) => (
                  <div
                    key={l}
                    className="hover:text-amber-500 cursor-pointer transition-colors"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-wider text-amber-600 font-medium mb-5">
                Get the latest deals
              </p>
              <p className="text-sm text-white/30 leading-relaxed mb-4">
                Subscribe and never miss a hot deal in Islamabad.
              </p>
              <div className="flex border border-amber-600/20 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/4 text-white text-sm px-4 py-2.5 outline-none placeholder:text-white/25"
                />
                <button className="bg-amber-600 text-white text-sm font-medium px-5 hover:bg-amber-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-7 text-xs text-white/20">
            <span>
              © 2026 Property Dealer · All rights reserved · Islamabad, Pakistan
            </span>
            <span>Made with care for Islamabad families</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDealerLanding;
