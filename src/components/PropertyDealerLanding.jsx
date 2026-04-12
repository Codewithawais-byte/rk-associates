import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const PropertyDealerLanding = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR - Black with Gold accents */}
      <nav className="bg-black border-b border-amber-500/30 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-24" />
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
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

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 text-sm font-semibold border border-amber-500 text-amber-500 rounded-2xl hover:bg-amber-500 hover:text-black transition-all hidden sm:flex">
              List Your Property
            </button>
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-2xl flex items-center gap-2 transition-all">
              <span>Contact Us</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header
        className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: "url('https://picsum.photos/id/1016/2000/1200')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/70 text-amber-400 text-sm font-semibold px-5 py-2 rounded-3xl mb-6 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              ISLAMABAD'S MOST TRUSTED DEALER
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white leading-none tracking-tighter">
              Your Dream Property,
              <br />
              Our Promise
            </h1>

            <p className="text-xl text-white/90 mt-6 max-w-md">
              Premium houses, residential plots &amp; commercial land in
              Islamabad. Trusted by 1200+ happy families.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-amber-500 text-black font-semibold rounded-3xl text-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                Browse Properties
                <span className="text-3xl">🏡</span>
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition-all">
                Get Free Consultation
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white">
              <div>
                <div className="text-4xl font-bold">1240+</div>
                <div className="text-sm opacity-75">Properties Sold</div>
              </div>
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="text-sm opacity-75">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold">15</div>
                <div className="text-sm opacity-75">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-10 right-10 bg-black/80 border border-amber-500/30 rounded-3xl shadow-2xl p-5 hidden lg:flex items-center gap-4">
          <div className="text-amber-500 text-4xl">⭐️</div>
          <div>
            <div className="font-semibold text-white">Rated 4.9/5</div>
            <div className="text-sm text-amber-400">by 482 Google reviews</div>
          </div>
        </div>
      </header>
      {/* FEATURED PROPERTIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="uppercase text-amber-600 text-sm font-bold tracking-widest">
                Featured Listings
              </span>
              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                Houses &amp; Plots in Islamabad
              </h2>
            </div>
            <a
              href="#"
              className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View all properties <span className="text-2xl">→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* House 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative">
                <img
                  src="https://picsum.photos/id/1015/800/600"
                  alt="5 Marla House in DHA Phase 6"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-amber-700 text-xs font-bold px-3 py-1 rounded-2xl shadow">
                  House
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-2xl">
                  PKR 85 Lac
                </div>
              </div>
              <div className="p-6">
                <div className="font-semibold text-lg">
                  5 Marla Luxurious House
                </div>
                <div className="text-amber-600 text-sm">
                  DHA Phase 6, Islamabad
                </div>
                <div className="flex justify-between items-center mt-4 text-sm">
                  <div>4 Bedrooms • 4 Bathrooms</div>
                  <button className="text-xs bg-gray-100 hover:bg-amber-100 px-5 py-2.5 rounded-2xl font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Plot 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative">
                <img
                  src="https://picsum.photos/id/160/800/600"
                  alt="10 Marla Plot in Bahria Town"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-amber-700 text-xs font-bold px-3 py-1 rounded-2xl shadow">
                  Plot
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-2xl">
                  PKR 45 Lac
                </div>
              </div>
              <div className="p-6">
                <div className="font-semibold text-lg">
                  10 Marla Corner Plot
                </div>
                <div className="text-amber-600 text-sm">
                  Bahria Town Islamabad
                </div>
                <div className="flex justify-between items-center mt-4 text-sm">
                  <div>Prime Location • 100% Paid</div>
                  <button className="text-xs bg-gray-100 hover:bg-amber-100 px-5 py-2.5 rounded-2xl font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* House 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative">
                <img
                  src="https://picsum.photos/id/133/800/600"
                  alt="7 Marla Bungalow in Clifton"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-amber-700 text-xs font-bold px-3 py-1 rounded-2xl shadow">
                  House
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-2xl">
                  PKR 1.65 Crore
                </div>
              </div>
              <div className="p-6">
                <div className="font-semibold text-lg">
                  7 Marla Modern Bungalow
                </div>
                <div className="text-amber-600 text-sm">
                  TopCity-1 Block 2, Islamabad
                </div>
                <div className="flex justify-between items-center mt-4 text-sm">
                  <div>5 Bedrooms • Rooftop Terrace</div>
                  <button className="text-xs bg-gray-100 hover:bg-amber-100 px-5 py-2.5 rounded-2xl font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Plot 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative">
                <img
                  src="https://picsum.photos/id/201/800/600"
                  alt="8 Marla Plot in Scheme 33"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white text-amber-700 text-xs font-bold px-3 py-1 rounded-2xl shadow">
                  Plot
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-2xl">
                  PKR 38 Lac
                </div>
              </div>
              <div className="p-6">
                <div className="font-semibold text-lg">
                  8 Marla Residential Plot
                </div>
                <div className="text-amber-600 text-sm">
                  Scheme 33, Islamabad
                </div>
                <div className="flex justify-between items-center mt-4 text-sm">
                  <div>Facing Park • Ready for Construction</div>
                  <button className="text-xs bg-gray-100 hover:bg-amber-100 px-5 py-2.5 rounded-2xl font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="uppercase text-amber-600 text-sm font-bold tracking-widest">
              Real Stories
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mt-2">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="flex gap-1 mb-6 text-amber-400">★★★★☆</div>
              <p className="text-gray-700 leading-relaxed">
                "Property Dealer helped us buy our dream 5 marla house in DHA
                within 3 weeks. Super professional team and transparent process.
                Highly recommended!"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-2xl"></div>
                <div>
                  <div className="font-semibold">Mr. Ahmed Raza</div>
                  <div className="text-sm text-gray-500">
                    DHA Phase 7 Resident • Bought March 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="flex gap-1 mb-6 text-amber-400">★★★★★</div>
              <p className="text-gray-700 leading-relaxed">
                "I was looking for a plot in Bahria Town. They showed me
                multiple options and negotiated the best price. Got my plot
                registered in just 10 days. Best dealer in Islamabad!"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-2xl"></div>
                <div>
                  <div className="font-semibold">Saba Khan</div>
                  <div className="text-sm text-gray-500">
                    Bahria Town Owner • Bought Feb 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="flex gap-1 mb-6 text-amber-400">★★★★☆</div>
              <p className="text-gray-700 leading-relaxed">
                "Sold my old house and bought a bigger bungalow through them.
                Their marketing team got 7 serious buyers in first week. Very
                smooth experience."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-2xl"></div>
                <div>
                  <div className="font-semibold">Faisal Mehmood</div>
                  <div className="text-sm text-gray-500">
                    TopCity-1 Resident • Sold &amp; Bought Jan 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE ADDRESS & CONTACT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Address */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Our Office</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold text-xl mb-1">
                      Head Office Islamabad
                    </div>
                    <div className="text-gray-600">
                      Office # 12, 2nd Floor, Al-Haram Plaza,
                      <br />
                      Block 15, Gulistan-e-Johar,
                      <br />
                      Islamabad, Pakistan
                    </div>
                    <div className="mt-6 text-sm font-medium text-gray-500">
                      Open: Mon–Sat | 9:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <a
                      href="tel:+923001234567"
                      className="font-semibold text-2xl hover:text-amber-600"
                    >
                      +92 300 1234567
                    </a>
                    <p className="text-gray-500 mt-1">
                      Call or WhatsApp anytime
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <a
                      href="mailto:info@propertydealer.pk"
                      className="font-semibold text-2xl hover:text-amber-600"
                    >
                      info@propertydealer.pk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact form preview */}
            <div className="bg-amber-50 rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-6">Get in touch today!</h3>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-6 py-4 rounded-2xl border border-transparent focus:border-amber-300 outline-none bg-white"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-6 py-4 rounded-2xl border border-transparent focus:border-amber-300 outline-none bg-white"
                />
                <textarea
                  placeholder="What are you looking for? (House / Plot / Size)"
                  rows={4}
                  className="w-full px-6 py-4 rounded-3xl border border-transparent focus:border-amber-300 outline-none bg-white resize-none"
                ></textarea>
                <button className="w-full py-5 bg-amber-600 text-white font-semibold rounded-3xl text-lg hover:bg-amber-700">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-y-10">
            {/* Left column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 rounded-2xl flex items-center justify-center text-white text-4xl">
                  🏠
                </div>
                <h1 className="text-4xl font-bold">Property Dealer</h1>
              </div>
              <p className="text-gray-400 max-w-xs">
                Making Islamabad home since 2015. Professional real estate
                services for buying, selling, and investing in premium
                properties.
              </p>

              {/* Social Links */}
              <div className="mt-10">
                <p className="text-amber-400 text-sm font-medium mb-4">
                  FOLLOW US
                </p>
                <div className="flex gap-6">
                  {/* Social icons remain the same */}
                  <a
                    href="https://facebook.com/propertydealerpk"
                    target="_blank"
                    rel="noopener"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/propertydealerpk"
                    target="_blank"
                    rel="noopener"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.33.56 2.465.292 6.813.23 8.1.222 8.497.222 12s.008 3.9.07 5.187c.268 4.348 2.403 6.483 6.761 6.741 1.28.058 1.688.072 4.949.072 3.26 0 3.668-.014 4.948-.072 4.358-.258 6.493-2.393 6.761-6.741.058-1.287.07-1.685.07-5.187 0-3.503-.012-3.9-.07-5.187-.268-4.348-2.403-6.483-6.761-6.741C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/propertydealerpk"
                    target="_blank"
                    rel="noopener"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-7.5c0-1.93-1.57-3.5-3.5-3.5a3.48 3.48 0 00-3.14 1.97h-.1v-1.67H9v11.2h2.5v-6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6.5h2.5zM7 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5.5 18.5h2.5v-7.5H5.5v7.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener"
                    className="hover:scale-110 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.888-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.1-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.48 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.355L.5 20.5l1.5-5.25a9.868 9.868 0 01-1.354-5.03c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.98 2.89 1.86 1.86 2.89 4.34 2.89 6.98 0 5.46-4.44 9.9-9.9 9.9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links & Newsletter (unchanged structure) */}
            <div className="md:col-span-2">
              <div className="font-medium text-amber-400 mb-6">Company</div>
              <div className="space-y-3 text-gray-400 text-sm">
                <div>About Us</div>
                <div>Our Team</div>
                <div>Careers</div>
                <div>Blog</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="font-medium text-amber-400 mb-6">Properties</div>
              <div className="space-y-3 text-gray-400 text-sm">
                <div>Houses for Sale</div>
                <div>Plots for Sale</div>
                <div>Commercial</div>
                <div>Rentals</div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="font-medium text-amber-400 mb-6">
                Get the latest deals
              </div>
              <div className="text-sm text-gray-400">
                Subscribe to our weekly newsletter and never miss a hot deal in
                Islamabad.
              </div>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-800 text-white placeholder:text-gray-500 px-5 rounded-l-3xl outline-none text-sm"
                />
                <button className="bg-amber-600 px-8 rounded-r-3xl text-sm font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500">
            © 2026 Property Dealer • All Rights Reserved • Islamabad, Pakistan
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDealerLanding;
