import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const gifCriandoCampanha = "https://isaiaszuchi.com/gifs/criando-campanha.gif";
const gifAprovandoCreator = "https://isaiaszuchi.com/gifs/aprovando-creator.gif";
const gifCrm = "https://isaiaszuchi.com/gifs/crm.gif";


const features = [
  {
    id: "creators",
    label: "Creators Treinados",
    description: "Selecione creators que já dominam storytelling, iluminação e edição para criar conteúdos que realmente convertem.",
    image: gifAprovandoCreator,
  },
  {
    id: "ai",
    label: "Inteligência Artificial",
    description: "Nossa IA analisa seu produto e sugere os melhores creators, roteiros e formatos para maximizar seus resultados.",
    image: gifCriandoCampanha,
  },
  {
    id: "crm",
    label: "CRM com Automação",
    description: "Automação de mensagens, rastreio de produtos e gestão completa de campanhas com dashboards em tempo real.",
    image: gifCrm,
  },
];

const CARD_W = 320;
const CARD_GAP = 16;
const STEP = CARD_W + CARD_GAP;

export function DifferentialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const scrollTo = useCallback((index: number) => {
    const next = ((index % features.length) + features.length) % features.length;
    setActiveIndex(next);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: next * STEP, behavior: "smooth" });
    }
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = false;
    startX.current = e.pageX;
    scrollLeftStart.current = trackRef.current?.scrollLeft ?? 0;

    const onMove = (ev: MouseEvent) => {
      const diff = ev.pageX - startX.current;
      if (Math.abs(diff) > 5) isDragging.current = true;
      if (trackRef.current) trackRef.current.scrollLeft = scrollLeftStart.current - diff;
    };
    const onUp = (ev: MouseEvent) => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      if (isDragging.current) {
        const diff = ev.pageX - startX.current;
        if (diff < -60) scrollTo(activeIndex + 1);
        else if (diff > 60) scrollTo(activeIndex - 1);
        else scrollTo(activeIndex);
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <section className="section-padding section-light relative overflow-hidden" id="diferenciais">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">

          {/* ── Left sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
              Produtos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
              Creators <span className="text-gradient">Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Descubra nossos principais recursos para criadores, criados para elevar
              sua criatividade e impulsionar sua presença digital.
            </p>

            <nav className="flex flex-col gap-1.5">
              {features.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => scrollTo(i)}
                  className={`w-full text-left px-4 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${activeIndex === i
                    ? "bg-accent text-white font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* ── Right: carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-w-0"
          >
            {/* Track */}
            <div className="relative">
              <div
                ref={trackRef}
                onMouseDown={onMouseDown}
                className="flex gap-4 overflow-x-auto pb-4 select-none"
                style={{ scrollbarWidth: "none", cursor: "grab", scrollSnapType: "x mandatory" }}
              >
                {features.map((f, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <div
                      key={f.id}
                      onClick={() => !isDragging.current && scrollTo(i)}
                      style={{
                        width: CARD_W,
                        flexShrink: 0,
                        scrollSnapAlign: "start",
                        background: isActive
                          ? "linear-gradient(145deg, #c257d2 0%, #9333ea 55%, #7c3aed 100%)"
                          : "#ffffff",
                        boxShadow: "none",
                      }}
                      className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${isActive
                        ? "border-transparent"
                        : "border-border/50 opacity-80 hover:opacity-100"
                        }`}
                    >
                      <div className="px-5 pt-5 pb-0 pointer-events-none">
                        <img
                          src={f.image}
                          alt={f.label}
                          draggable={false}
                          className="w-full rounded-t-lg shadow-lg object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: isActive ? "rgba(255,255,255,0.6)" : undefined }}
                        >
                          Produto
                        </span>
                        <h3
                          className="font-display text-xl font-bold mt-1 mb-2"
                          style={{ color: isActive ? "#fff" : undefined }}
                        >
                          Creators{" "}
                          <span style={{ color: isActive ? "#e9d5ff" : undefined }} className={isActive ? "" : "text-accent"}>
                            {f.label}
                          </span>
                        </h3>
                        <p
                          className="text-base mb-4 leading-relaxed line-clamp-3"
                          style={{ color: isActive ? "rgba(255,255,255,0.75)" : undefined }}
                        >
                          {f.description}
                        </p>
                        <Button
                          size="sm"
                          variant="default"
                          className="group pointer-events-auto"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          Explore nossas vantagens
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right fade hint */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white/90 to-transparent rounded-r-2xl" />
            </div>

            {/* Dots + Arrows */}
            <div className="flex items-center justify-between mt-4 pr-1">
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                      }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollTo(activeIndex - 1)}
                  className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition-all shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={() => scrollTo(activeIndex + 1)}
                  className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition-all shadow-sm"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
