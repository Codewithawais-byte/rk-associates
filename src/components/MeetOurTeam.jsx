"use client";

import { Mail, MailCheck, PlayCircle } from "lucide-react";
import { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const TEAM = [
  {
    id: 1,
    name: "RAJA KASHIF MINHAS",
    title: "Founder & CEO",
    image: "/images/team/ceo.jpg",
    video: "/videos/ceo-intro.mp4", // Short intro video
    bio: "With over 15 years of experience in real estate development and investment, Awais leads RK Associates with a vision to redefine luxury living in Pakistan.",
    quote: "Every property we offer is a promise of excellence and trust.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rajakashif8196@gmail.com",
    },
  },
  // Add more team members here if needed
];

export default function MeetOurTeam() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      id="team"
      className="relative bg-[#F8F5EF] py-28 overflow-hidden font-sans"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.8px,transparent_1px)] bg-[40px_40px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-medium tracking-[0.28em] uppercase">
              Our Leadership
            </span>
            <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
          </div>
          <h2 className="font-serif text-[2.1rem] md:text-[2.75rem] leading-tight font-light text-[#1C2B3A]">
            Meet Our{" "}
            <em className="font-semibold not-italic text-[#C9A84C]">Team</em>
          </h2>
          <p className="mt-4 text-[#55637B] max-w-md mx-auto">
            Passionate professionals dedicated to helping you find your perfect
            property
          </p>
        </div>

        {/* CEO Highlight Card */}
        <div className="max-w-5xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EDE6D9] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Image + Video */}
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                  />

                  {/* Video Play Button Overlay */}
                  {member.video && (
                    <button
                      onClick={() => setSelectedVideo(member.video)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
                    >
                      <div className="w-20 h-20 rounded-full border-2 border-white/90 flex items-center justify-center backdrop-blur-md hover:scale-110 transition-transform">
                        <PlayCircle
                          className="w-9 h-9 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </button>
                  )}

                  {/* Gold Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C9A84C] to-[#E2C27D]" />
                </div>

                {/* Right - Content */}
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div>
                    <span className="inline-block px-4 py-1 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-medium tracking-widest uppercase mb-4">
                      Founder & CEO
                    </span>

                    <h3 className="font-serif text-4xl md:text-5xl font-light text-[#1C2B3A] leading-none mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#C9A84C] text-lg font-medium">
                      {member.title}
                    </p>
                  </div>

                  <div className="my-8 h-px bg-[#EDE6D9]" />

                  <p className="text-[#55637B] leading-relaxed text-[1.02rem] mb-8">
                    {member.bio}
                  </p>

                  <div className="italic text-[#1C2B3A] border-l-2 border-[#C9A84C] pl-6 mb-10">
                    “{member.quote}”
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={member.social.linkedin}
                      className="text-[#55637B] hover:text-[#C9A84C] transition-colors"
                    >
                      <LiaLinkedin size={22} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-[#55637B] hover:text-[#C9A84C] transition-colors"
                    >
                      <BsTwitter size={22} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-[#55637B] hover:text-[#C9A84C] transition-colors"
                    >
                      <MailCheck size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add more team members in grid below if needed */}
        {/* <div className="mt-20 grid md:grid-cols-3 gap-8"> ... </div> */}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-4 text-white hover:text-[#C9A84C] text-4xl transition-colors"
            >
              ×
            </button>

            <div className="bg-black rounded-2xl overflow-hidden">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-2xl"
              />
            </div>
            <p className="text-center text-white/70 mt-4 text-sm">
              CEO Introduction Video
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
