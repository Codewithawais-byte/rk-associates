// import React, { useState } from "react";

// function ContactUs() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     type: "",
//     message: "",
//   });
//   const [sent, setSent] = useState(false);
//   const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

//   const handleSubmit = () => {
//     setSent(true);
//     setTimeout(() => {
//       setSent(false);
//       setForm({ name: "", phone: "", email: "", type: "", message: "" });
//     }, 4000);
//   };

//   const info = [
//     {
//       icon: "📍",
//       label: "Office Address",
//       value: "Office 204, Business Avenue, Gulshan-e-Iqbal, Karachi",
//     },
//     { icon: "📞", label: "Phone / WhatsApp", value: "+92 321 000 0000" },
//     { icon: "✉️", label: "Email", value: "info@rkassociates.com.pk" },
//     {
//       icon: "🕐",
//       label: "Office Hours",
//       value: "Mon – Sat: 10:00 AM – 7:00 PM",
//     },
//   ];

//   const inputCls =
//     "rk-input bg-white/[.04] border border-[#C9A84C]/15 text-[#F8F6F1] text-sm px-4 py-3 rounded-sm";

//   return (
//     <section id="contact" className="bg-[#0B1628] py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-14 reveal">
//           <span className="text-[#C9A84C] text-[.62rem] font-bold tracking-[.28em] uppercase">
//             Get In Touch
//           </span>
//           <h2
//             className="font-display text-[#F8F6F1] font-light mt-3"
//             style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)" }}
//           >
//             Start Your Property <span className="text-[#C9A84C]">Journey</span>
//           </h2>
//           <p className="text-[#8B99B5] text-sm leading-relaxed max-w-sm mx-auto mt-3">
//             Our consultants are ready to help you buy, sell, or rent with
//             confidence. No obligation, just honest advice.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left */}
//           <div className="reveal">
//             <div className="flex flex-col gap-5 mb-8">
//               {info.map(({ icon, label, value }) => (
//                 <div key={label} className="flex gap-4 items-start">
//                   <div className="w-10 h-10 flex-shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-sm flex items-center justify-center text-base">
//                     {icon}
//                   </div>
//                   <div>
//                     <div className="text-[#8B99B5] text-[.62rem] font-semibold tracking-[.14em] uppercase mb-0.5">
//                       {label}
//                     </div>
//                     <div className="text-[#F8F6F1] text-[.86rem]">{value}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Map */}
//             <div className="rounded-sm overflow-hidden border border-[#C9A84C]/12 h-52">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115066!2d66.994!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1"
//                 width="100%"
//                 height="100%"
//                 style={{
//                   border: 0,
//                   filter: "invert(92%) hue-rotate(180deg) contrast(1.05)",
//                 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="Location"
//               />
//             </div>

//             <div className="flex flex-wrap gap-2 mt-5">
//               {["Facebook", "Instagram", "WhatsApp", "YouTube"].map((s) => (
//                 <button
//                   key={s}
//                   className="border border-[#C9A84C]/45 text-[#C9A84C] text-[.6rem] font-semibold tracking-[.12em] uppercase px-3.5 py-2 rounded-sm hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-200"
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Form */}
//           <div className="bg-[#141F34] border border-[#C9A84C]/10 rounded-sm p-8 reveal">
//             {sent ? (
//               <div className="flex flex-col items-center justify-center text-center py-14">
//                 <div className="w-16 h-16 rounded-full bg-green-500/12 border-2 border-green-500/40 flex items-center justify-center mb-5">
//                   <svg
//                     width="28"
//                     height="28"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#34c759"
//                     strokeWidth="2.5"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 </div>
//                 <h3
//                   className="font-display text-[#F8F6F1] font-light mb-2"
//                   style={{ fontSize: "1.6rem" }}
//                 >
//                   Message Received!
//                 </h3>
//                 <p className="text-[#8B99B5] text-sm">
//                   Our team will reach out within 24 hours.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <h3
//                   className="font-display text-[#F8F6F1] font-light mb-6"
//                   style={{ fontSize: "1.4rem" }}
//                 >
//                   Send Us a Message
//                 </h3>
//                 <div className="flex flex-col gap-4">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-[#8B99B5] text-[.62rem] font-semibold tracking-[.14em] uppercase mb-1.5">
//                         Full Name
//                       </label>
//                       <input
//                         className={inputCls}
//                         placeholder="Ahmed Khan"
//                         value={form.name}
//                         onChange={set("name")}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-[#8B99B5] text-[.62rem] font-semibold tracking-[.14em] uppercase mb-1.5">
//                         Phone / WhatsApp
//                       </label>
//                       <input
//                         className={inputCls}
//                         placeholder="+92 300 000 0000"
//                         value={form.phone}
//                         onChange={set("phone")}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-[#8B99B5] text-[.62rem] font-semibold tracking-[.14em] uppercase mb-1.5">
//                       Email Address
//                     </label>
//                     <input
//                       className={inputCls}
//                       placeholder="your@email.com"
//                       value={form.email}
//                       onChange={set("email")}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[#8B99B5] text-[.62rem] font-semibold tracking-[.14em] uppercase mb-1.5">
//                       I'm Interested In
//                     </label>
//                     <select
//                       className={`${inputCls} select-input`}
//                       value={form.type}
//                       onChange={set("type")}
//                     >
//                       <option value="" disabled>
//                         Select property type…
//                       </option>
//                       {[
//                         "Buying a Plot",
//                         "Buying an Apartment",
//                         "Buying a House",
//                         "Renting a Property",
//                         "Selling a Property",
//                         "Investment Advice",
//                       ].map((o) => (
//                         <option key={o} value={o}>
//                           {o}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-[#8B99B5] text-[.62rem] font-semibold tracking-[.14em] uppercase mb-1.5">
//                       Message
//                     </label>
//                     <textarea
//                       className={`${inputCls} resize-none`}
//                       rows={4}
//                       placeholder="Tell us your requirements, budget, preferred location…"
//                       value={form.message}
//                       onChange={set("message")}
//                     />
//                   </div>
//                   <button
//                     onClick={handleSubmit}
//                     className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D] text-[#0B1628] font-bold text-[.68rem] tracking-[.16em] uppercase py-4 rounded-sm mt-1 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A84C]/30 transition-all duration-200"
//                   >
//                     Send Enquiry
//                     <svg
//                       width="13"
//                       height="13"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                     >
//                       <line x1="22" y1="2" x2="11" y2="13" />
//                       <polygon points="22 2 15 22 11 13 2 9 22 2" />
//                     </svg>
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;

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
    value: "Office 204, Business Avenue, Gulshan-e-Iqbal, Karachi",
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
    value: "+92 321 000 0000",
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-root {
          font-family: 'DM Sans', sans-serif;
          background: #080F1C;
          padding: 7rem 0 8rem;
          position: relative;
          overflow: hidden;
        }

        /* Top divider accent */
        .ct-root::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 240px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent);
        }

        /* Background grid */
        .ct-grid-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* Glow */
        .ct-glow {
          position: absolute; top: -80px; right: -80px; z-index: 0;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.045) 0%, transparent 65%);
          pointer-events: none;
        }
        .ct-glow-2 {
          position: absolute; bottom: -100px; left: 10%; z-index: 0;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(56,100,180,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        .ct-inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .ct-header { text-align: center; margin-bottom: 4rem; }

        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 1.2rem;
        }
        .ct-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, transparent, #C9A84C);
        }
        .ct-eyebrow-line.r { background: linear-gradient(90deg, #C9A84C, transparent); }
        .ct-eyebrow span {
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C9A84C;
        }
        .ct-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; line-height: 1.1;
          color: #F0EEE9; margin: 0 0 1rem;
        }
        .ct-heading em { font-style: italic; font-weight: 600; color: #C9A84C; }
        .ct-sub {
          font-size: 0.84rem; font-weight: 300;
          line-height: 1.75; color: #4A5E78;
          max-width: 360px; margin: 0 auto;
        }

        /* Layout */
        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2rem;
          align-items: start;
        }

        /* ─── LEFT PANEL ─── */
        .ct-left {
          display: flex; flex-direction: column; gap: 0;
          border: 1px solid rgba(201,168,76,0.1);
          overflow: hidden;
        }

        /* Info items */
        .ct-info-list { padding: 2rem 2rem 1.5rem; }

        .ct-info-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(201,168,76,0.06);
        }
        .ct-info-item:first-child { padding-top: 0; }
        .ct-info-item:last-child { border-bottom: none; }

        .ct-info-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          border: 1px solid rgba(201,168,76,0.18);
          background: rgba(201,168,76,0.06);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }
        .ct-info-item:hover .ct-info-icon {
          border-color: rgba(201,168,76,0.4);
          background: rgba(201,168,76,0.1);
        }

        .ct-info-label {
          font-size: 0.58rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #3A4E66; margin-bottom: 4px;
        }
        .ct-info-val {
          font-size: 0.82rem; font-weight: 300;
          color: #C8C6C0; line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s;
        }
        a.ct-info-val:hover { color: #C9A84C; }

        /* Map */
        .ct-map { height: 200px; overflow: hidden; position: relative; }
        .ct-map::before {
          content: '';
          position: absolute; inset: 0; z-index: 1;
          box-shadow: inset 0 0 0 1px rgba(201,168,76,0.1);
          pointer-events: none;
        }
        .ct-map iframe {
          width: 100%; height: 100%; border: 0;
          filter: invert(90%) hue-rotate(180deg) contrast(1.05) saturate(0.85);
        }

        /* Socials */
        .ct-socials {
          padding: 1.4rem 2rem;
          border-top: 1px solid rgba(201,168,76,0.06);
          background: rgba(201,168,76,0.02);
        }
        .ct-socials-label {
          font-size: 0.56rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #3A4E66; margin-bottom: 12px;
        }
        .ct-social-row { display: flex; gap: 8px; }
        .ct-social-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 14px;
          border: 1px solid rgba(201,168,76,0.15);
          background: none; cursor: pointer;
          color: #5A6E88;
          font-size: 0.6rem; font-weight: 400;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: all 0.25s;
          position: relative; overflow: hidden;
        }
        .ct-social-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(201,168,76,0.07);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.25s;
        }
        .ct-social-btn:hover { color: #C9A84C; border-color: rgba(201,168,76,0.35); }
        .ct-social-btn:hover::before { transform: scaleX(1); }
        .ct-social-btn span, .ct-social-btn svg { position: relative; z-index: 1; }

        /* ─── RIGHT FORM PANEL ─── */
        .ct-form-wrap {
          background: #0C1825;
          border: 1px solid rgba(201,168,76,0.1);
          position: relative; overflow: hidden;
        }

        /* Gold top bar */
        .ct-form-topbar {
          height: 3px;
          background: linear-gradient(90deg, #C9A84C, #E2C27D, #C9A84C);
          background-size: 200% auto;
          animation: shiftGold 4s linear infinite;
        }
        @keyframes shiftGold { to { background-position: 200% center; } }

        .ct-form-inner { padding: 2.5rem 2.5rem 2.8rem; }

        .ct-form-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem; font-weight: 300;
          color: #F0EEE9; margin: 0 0 0.4rem;
          line-height: 1.15;
        }
        .ct-form-heading em { font-style: italic; font-weight: 600; color: #C9A84C; }
        .ct-form-sub {
          font-size: 0.78rem; font-weight: 300;
          color: #3A4E66; margin: 0 0 2rem;
        }

        /* Field */
        .ct-field { display: flex; flex-direction: column; gap: 6px; }
        .ct-label {
          font-size: 0.57rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #3A4E66; display: flex; align-items: center; gap: 4px;
        }
        .ct-required { color: rgba(201,168,76,0.6); }

        .ct-input, .ct-select, .ct-textarea {
          width: 100%; background: rgba(255,255,255,0.025);
          border: 1px solid rgba(201,168,76,0.1);
          color: #E8E6E1;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem; font-weight: 300;
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          appearance: none; -webkit-appearance: none;
          box-sizing: border-box;
          border-radius: 0;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: #2A3A50; }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus {
          border-color: rgba(201,168,76,0.45);
          background: rgba(201,168,76,0.03);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.06);
        }

        /* Select arrow */
        .ct-select-wrap { position: relative; }
        .ct-select-arrow {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          pointer-events: none; color: #C9A84C; opacity: 0.5;
        }
        .ct-select { padding-right: 38px; cursor: pointer; }
        .ct-select option { background: #0C1825; color: #E8E6E1; }

        .ct-textarea { resize: none; line-height: 1.6; }

        /* Interest chips */
        .ct-chips { display: flex; flex-wrap: wrap; gap: 7px; }
        .ct-chip {
          padding: 7px 14px;
          border: 1px solid rgba(201,168,76,0.1);
          background: rgba(255,255,255,0.02);
          color: #4A5E78;
          font-size: 0.62rem; font-weight: 400;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .ct-chip:hover { border-color: rgba(201,168,76,0.3); color: #C9A84C; }
        .ct-chip.selected {
          background: rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.4);
          color: #C9A84C;
        }

        /* Row */
        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        /* Divider */
        .ct-form-divider {
          height: 1px; margin: 1.5rem 0;
          background: linear-gradient(90deg, rgba(201,168,76,0.1), transparent);
        }

        /* Submit */
        .ct-submit {
          width: 100%; padding: 14px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          background: linear-gradient(135deg, #C9A84C, #E2C27D);
          color: #0B1628;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          border: none; cursor: pointer;
          position: relative; overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
          margin-top: 0.5rem;
        }
        .ct-submit::after {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0.12);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }
        .ct-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(201,168,76,0.3); }
        .ct-submit:hover::after { transform: scaleX(1); }
        .ct-submit span, .ct-submit svg { position: relative; z-index: 1; }

        /* Privacy note */
        .ct-privacy {
          text-align: center; margin-top: 12px;
          font-size: 0.6rem; font-weight: 300;
          color: #2A3A50; letter-spacing: 0.04em;
          display: flex; align-items: center; justify-content: center; gap: 5px;
        }

        /* ─── SUCCESS ─── */
        .ct-success {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 4rem 2rem;
          min-height: 400px;
        }
        .ct-success-ring {
          width: 72px; height: 72px; border-radius: 50%;
          border: 1px solid rgba(52,211,153,0.4);
          background: rgba(52,211,153,0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          animation: popIn 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        @keyframes popIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .ct-success-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem; font-weight: 300;
          color: #F0EEE9; margin: 0 0 8px;
        }
        .ct-success-sub {
          font-size: 0.82rem; font-weight: 300;
          color: #4A5E78; max-width: 260px;
          line-height: 1.7;
        }
        .ct-success-detail {
          margin-top: 1.5rem;
          padding: 12px 20px;
          border: 1px solid rgba(52,211,153,0.15);
          background: rgba(52,211,153,0.04);
          font-size: 0.68rem; font-weight: 400;
          letter-spacing: 0.08em;
          color: rgba(52,211,153,0.7);
        }

        @media (max-width: 900px) {
          .ct-layout { grid-template-columns: 1fr; }
          .ct-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ct-form-inner { padding: 1.75rem 1.5rem 2rem; }
          .ct-info-list { padding: 1.5rem 1.5rem 1rem; }
          .ct-socials { padding: 1.2rem 1.5rem; }
          .ct-social-row { flex-wrap: wrap; }
        }
      `}</style>

      <section id="contact" className="ct-root">
        <div className="ct-grid-bg" />
        <div className="ct-glow" />
        <div className="ct-glow-2" />

        <div className="ct-inner">
          {/* Header */}
          <div className="ct-header">
            <div className="ct-eyebrow">
              <div className="ct-eyebrow-line" />
              <span>Get In Touch</span>
              <div className="ct-eyebrow-line r" />
            </div>
            <h2 className="ct-heading">
              Start Your Property <em>Journey</em>
            </h2>
            <p className="ct-sub">
              Our consultants are ready to help you buy, sell, or rent with
              confidence. No obligation, just honest advice.
            </p>
          </div>

          <div className="ct-layout">
            {/* ─── LEFT ─── */}
            <div className="ct-left">
              {/* Info */}
              <div className="ct-info-list">
                {INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className="ct-info-item">
                    <div className="ct-info-icon">{icon}</div>
                    <div>
                      <div className="ct-info-label">{label}</div>
                      {href ? (
                        <a href={href} className="ct-info-val">
                          {value}
                        </a>
                      ) : (
                        <div className="ct-info-val">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="ct-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115066!2d66.994!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1"
                  title="Office Location"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Socials */}
              <div className="ct-socials">
                <div className="ct-socials-label">Follow Us</div>
                <div className="ct-social-row">
                  {SOCIALS.map(({ name, href, icon }) => (
                    <a key={name} href={href} className="ct-social-btn">
                      {icon}
                      <span>{name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── RIGHT FORM ─── */}
            <div className="ct-form-wrap">
              <div className="ct-form-topbar" />

              {sent ? (
                <div className="ct-success">
                  <div className="ct-success-ring">
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
                  <h3 className="ct-success-heading">Message Received!</h3>
                  <p className="ct-success-sub">
                    Our team will reach out within 24 hours. We appreciate your
                    interest.
                  </p>
                  <div className="ct-success-detail">
                    Expected response within 24 hours
                  </div>
                </div>
              ) : (
                <div className="ct-form-inner">
                  <h3 className="ct-form-heading">
                    Send Us a <em>Message</em>
                  </h3>
                  <p className="ct-form-sub">
                    Fill in your details and we'll be in touch shortly.
                  </p>

                  {/* Row 1 */}
                  <div className="ct-row" style={{ marginBottom: "14px" }}>
                    <div className="ct-field">
                      <label className="ct-label">
                        Full Name <span className="ct-required">*</span>
                      </label>
                      <input
                        className="ct-input"
                        placeholder="Ahmed Khan"
                        value={form.name}
                        onChange={set("name")}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-label">
                        Phone / WhatsApp <span className="ct-required">*</span>
                      </label>
                      <input
                        className="ct-input"
                        placeholder="+92 300 000 0000"
                        value={form.phone}
                        onChange={set("phone")}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="ct-field" style={{ marginBottom: "14px" }}>
                    <label className="ct-label">Email Address</label>
                    <input
                      className="ct-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>

                  {/* Interest chips */}
                  <div className="ct-field" style={{ marginBottom: "14px" }}>
                    <label className="ct-label">I'm Interested In</label>
                    <div className="ct-chips">
                      {INTERESTS.map((opt) => (
                        <div
                          key={opt}
                          className={`ct-chip${form.type === opt ? " selected" : ""}`}
                          onClick={() =>
                            setForm((f) => ({
                              ...f,
                              type: f.type === opt ? "" : opt,
                            }))
                          }
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ct-form-divider" />

                  {/* Message */}
                  <div className="ct-field" style={{ marginBottom: "20px" }}>
                    <label className="ct-label">Your Message</label>
                    <textarea
                      className="ct-textarea"
                      rows={4}
                      placeholder="Tell us your requirements, budget, preferred location, timeline…"
                      value={form.message}
                      onChange={set("message")}
                    />
                  </div>

                  {/* Submit */}
                  <button className="ct-submit" onClick={handleSubmit}>
                    <span>Send Enquiry</span>
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

                  <p className="ct-privacy">
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
