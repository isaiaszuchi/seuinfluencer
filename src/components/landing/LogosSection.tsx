import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const logos = [
  { name: "Amazon", src: "/logos/amazon.png" },
  { name: "Americanas", src: "/logos/americanas.png" },
  { name: "Magalu", src: "/logos/magalu.png" },
  { name: "Mercado Livre", src: "/logos/mercadolivre.png" },
  { name: "Natura", src: "/logos/natura.png" },
  { name: "Boticário", src: "/logos/boticario.png" },
  { name: "Renner", src: "/logos/renner.png" },
  { name: "Shopee", src: "/logos/shopee.png" },
];

export function LogosSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Infinite scroll: when track reaches half, reset to start seamlessly
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll via requestAnimationFrame when not paused
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId: number;

    const step = () => {
      if (!isPaused && !isDragging) {
        track.scrollLeft += 1;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    track.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <section className="section-padding bg-[#fdfaff] border-y border-border/40 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,87,210,0.06),transparent_70%)] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-6 border border-primary/20 uppercase tracking-widest">
            Marcas Parceiras
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Quem Confia em Nossos <br className="hidden md:block" />
            <span className="text-gradient">Creators Treinados</span>
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#fdfaff] via-[#fdfaff]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#fdfaff] via-[#fdfaff]/80 to-transparent z-10 pointer-events-none" />

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className={`flex overflow-x-scroll gap-16 md:gap-24 py-8 scrollbar-hide select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { setIsPaused(false); onMouseLeave(); }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-44 md:w-60 h-24 md:h-32 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  draggable={false}
                  className="max-h-full max-w-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
