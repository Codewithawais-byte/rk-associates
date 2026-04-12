import { useState } from "react";
import { Play, X } from "lucide-react";
import interior from "../assets/videos/interior-video.mp4";
import drone from "../assets/videos/drone-video.mp4";
import apartment from "../assets/apartment.webp";
import plot from "../assets/plot.webp";
import home1 from "../assets/home1.jpg";
import kitchen from "../assets/kitchen.jpg";

const GALLERY_MEDIA = [
  // Add your images and videos here
  {
    id: 1,
    type: "image",
    src: home1,
    title: "Luxury Villa Exterior",
    category: "Homes",
  },
  {
    id: 2,
    type: "video",
    src: interior,
    title: "3D Property Tour",
    category: "Tours",
  },
  {
    id: 3,
    type: "image",
    src: apartment,
    title: "Modern Apartment Interior",
    category: "Interiors",
  },
  {
    id: 4,
    type: "image",
    src: plot,
    title: "Plot Aerial View",
    category: "Plots",
  },
  {
    id: 5,
    type: "video",
    src: drone,
    title: "Aerial Drone View",
    category: "Tours",
  },
  {
    id: 6,
    type: "image",
    src: kitchen,
    title: "Elegant Kitchen Design",
    category: "Interiors",
  },
  // ... add more as needed
];

const CATEGORIES = ["All", "Homes", "Interiors", "Plots", "Tours"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredMedia =
    activeFilter === "All"
      ? GALLERY_MEDIA
      : GALLERY_MEDIA.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
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
              Visual Journey
            </span>
            <div className="w-10 h-px bg-gradient-to-r from-[#C9A84C] to-transparent" />
          </div>
          <h2 className="font-serif text-[2.1rem] md:text-[2.75rem] leading-tight font-light text-[#1C2B3A]">
            Gallery of{" "}
            <em className="font-semibold not-italic text-[#C9A84C]">
              Excellence
            </em>
          </h2>
          <p className="mt-4 text-[#55637B] max-w-md mx-auto">
            Explore our premium properties through stunning visuals and
            immersive tours
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all rounded-xl border ${
                activeFilter === cat
                  ? "bg-[#C9A84C] text-[#0B1628] border-[#C9A84C]"
                  : "border-[#C9A84C]/20 text-[#55637B] hover:border-[#C9A84C]/50 hover:text-[#1C2B3A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#EDE6D9] hover:border-[#C9A84C]/30 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl aspect-[4/3]"
            >
              <div className="relative h-full overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    />
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play
                          className="w-7 h-7 text-white ml-0.5"
                          fill="white"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {item.title}
                  </p>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-medium tracking-widest uppercase bg-white/90 text-[#1C2B3A] rounded border border-[#C9A84C]/20">
                  {item.type === "video" ? "Video" : "Photo"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#C9A84C] transition-colors"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full max-h-[85vh] object-contain"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh]"
                />
              )}
            </div>

            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {selectedItem.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
