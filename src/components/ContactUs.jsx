import React, { useState } from "react";

const INFO = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office Address",
    value: "Office #4G, Aspire 1 Block D Top City-1 Islamabad",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "Phone / WhatsApp",
    value: "+92 311 4455087",
    href: "tel:+921234567890",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@rkassociates.com.pk",
    href: "mailto:info@rkassociates.com.pk",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Sat: 10:00 AM – 7:00 PM",
  },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/921234567890",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.523 5.824L0 24l6.341-1.501A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.213-3.727.882.937-3.626-.235-.373A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#0B1628"
        />
      </svg>
    ),
  },
];

const INTERESTS = [
  "Buying a Plot",
  "Buying an Apartment",
  "Buying a House",
  "Renting a Property",
  "Selling a Property",
  "Investment Advice",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", email: "", type: "", message: "" });
    }, 5000);
  };

  return (
    <>
      <section
        id="contact"
        className="relative bg-[#080F1C] py-28 overflow-hidden font-sans"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.025)_1px,transparent_1px)] bg-[64px_64px] pointer-events-none" />

        {/* Glow Effects */}
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.045)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-100px] left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(56,100,180,0.04)_0%,transparent_65%)]" />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
                Get In Touch
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
            </div>

            <h2 className="font-serif text-[2.1rem] md:text-[2.75rem] leading-tight font-light text-[#F0EEE9]">
              Start Your Property{" "}
              <em className="font-semibold not-italic text-[#C9A84C]">
                Journey
              </em>
            </h2>
            <p className="mt-4 text-[#4A5E78] text-[0.84rem] max-w-md mx-auto leading-relaxed">
              Our consultants are ready to help you buy, sell, or rent with
              confidence. No obligation, just honest advice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT PANEL - Contact Info */}
            <div className="border border-[#C9A84C]/10 flex flex-col bg-[#0B1628]">
              {/* Info List */}
              <div className="p-8 md:p-10 flex-1">
                {INFO.map(({ icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex gap-4 py-5 border-b border-[#C9A84C]/5 last:border-none first:pt-0 group"
                  >
                    <div className="w-10 h-10 flex-shrink-0 border border-[#C9A84C]/20 bg-[#C9A84C]/5 flex items-center justify-center transition-all group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/10">
                      {icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#3A4E66] mb-1">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-[#C8C6C0] hover:text-[#C9A84C] transition-colors text-[0.82rem] leading-relaxed"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-[#C8C6C0] text-[0.82rem] leading-relaxed">
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="relative h-[200px] border-t border-[#C9A84C]/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115066!2d66.994!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1"
                  className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-[1.05] saturate-[0.85]"
                  title="Office Location"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-[#C9A84C]/10 pointer-events-none" />
              </div>

              {/* Social Links */}
              <div className="p-8 md:p-10 border-t border-[#C9A84C]/10 bg-[#C9A84C]/5">
                <div className="text-[9px] font-medium tracking-[0.18em] uppercase text-[#3A4E66] mb-4">
                  Follow Us
                </div>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      className="flex items-center gap-2 px-5 py-3 border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 text-[#5A6E88] hover:text-[#C9A84C] text-sm transition-all hover:bg-[#C9A84C]/5"
                    >
                      {icon}
                      <span className="text-[0.6rem] font-medium tracking-wider">
                        {name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - Contact Form */}
            <div className="bg-[#0C1825] border border-[#C9A84C]/10 relative overflow-hidden">
              {/* Gold Top Bar */}
              <div className="h-[3px] bg-gradient-to-r from-[#C9A84C] via-[#E2C27D] to-[#C9A84C] bg-[length:200%_auto] animate-[shiftGold_4s_linear_infinite]" />

              {sent ? (
                /* Success Message */
                <div className="flex flex-col items-center justify-center min-h-[420px] px-8 text-center">
                  <div className="w-[72px] h-[72px] rounded-full border border-emerald-400/40 bg-emerald-500/5 flex items-center justify-center mb-6 animate-[popIn_0.4s]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F0EEE9] mb-2">
                    Message Received!
                  </h3>
                  <p className="text-[#4A5E78] max-w-[260px] text-sm leading-relaxed">
                    Our team will reach out within 24 hours. We appreciate your
                    interest.
                  </p>
                  <div className="mt-6 px-6 py-3 border border-emerald-400/20 bg-emerald-500/5 text-emerald-400/70 text-xs tracking-widest">
                    Expected response within 24 hours
                  </div>
                </div>
              ) : (
                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-[1.6rem] font-light text-[#F0EEE9] mb-1">
                    Send Us a{" "}
                    <em className="font-semibold not-italic text-[#C9A84C]">
                      Message
                    </em>
                  </h3>
                  <p className="text-[#3A5E66] text-sm mb-8">
                    Fill in your details and we'll be in touch shortly.
                  </p>

                  {/* Form Fields */}
                  <div className="space-y-6">
                    {/* Name & Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#3A4E66] mb-2">
                          Full Name <span className="text-[#C9A84C]/60">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[#0A1622] border border-[#C9A84C]/10 focus:border-[#C9A84C]/50 text-[#E8E6E1] placeholder:text-[#2A3A50] px-5 py-3 outline-none transition-all text-sm"
                          placeholder="Ahmed Khan"
                          value={form.name}
                          onChange={set("name")}
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#3A4E66] mb-2">
                          Phone / WhatsApp{" "}
                          <span className="text-[#C9A84C]/60">*</span>
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-[#0A1622] border border-[#C9A84C]/10 focus:border-[#C9A84C]/50 text-[#E8E6E1] placeholder:text-[#2A3A50] px-5 py-3 outline-none transition-all text-sm"
                          placeholder="+92 300 000 0000"
                          value={form.phone}
                          onChange={set("phone")}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#3A4E66] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full bg-[#0A1622] border border-[#C9A84C]/10 focus:border-[#C9A84C]/50 text-[#E8E6E1] placeholder:text-[#2A3A50] px-5 py-3 outline-none transition-all text-sm"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={set("email")}
                      />
                    </div>

                    {/* Interest Chips */}
                    <div>
                      <label className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#3A4E66] mb-3">
                        I'm Interested In
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INTERESTS.map((opt) => (
                          <div
                            key={opt}
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                type: f.type === opt ? "" : opt,
                              }))
                            }
                            className={`px-5 py-2.5 text-xs border cursor-pointer transition-all ${
                              form.type === opt
                                ? "bg-[#C9A84C]/10 border-[#C9A84C]/50 text-[#C9A84C]"
                                : "border-[#C9A84C]/10 hover:border-[#C9A84C]/30 text-[#4A5E78] hover:text-[#C9A84C]"
                            }`}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#3A4E66] mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full bg-[#0A1622] border border-[#C9A84C]/10 focus:border-[#C9A84C]/50 text-[#E8E6E1] placeholder:text-[#2A3A50] px-5 py-4 outline-none transition-all text-sm resize-y"
                        placeholder="Tell us your requirements, budget, preferred location, timeline…"
                        value={form.message}
                        onChange={set("message")}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="mt-8 w-full py-4 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] font-medium text-xs tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.985] transition-all shadow-lg shadow-[#C9A84C]/30"
                  >
                    Send Enquiry
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>

                  {/* Privacy */}
                  <p className="text-center text-[#2A3A50] text-[10px] mt-5 flex items-center justify-center gap-1.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Your information is private and never shared.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
