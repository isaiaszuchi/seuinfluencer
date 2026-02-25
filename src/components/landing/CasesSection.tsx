import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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

export function CasesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0118]" id="cases">
      {/* Dark background with subtle gradient meshes */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Marcas Parceiras
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Grandes marcas confiam na <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fda332] to-[#c257d2]">
              nossa plataforma
            </span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Junte-se às grandes empresas que já revolucionaram suas vendas <br className="hidden sm:block" />
            e campanhas usando conteúdo UGC autêntico.
          </p>
        </motion.div>
      </div>

      {/* Marquee effect */}
      <div className="relative w-full overflow-hidden flex flex-col group select-none mt-10">
        {/* Left and Right fade gradients */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#0A0118] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#0A0118] to-transparent z-10 pointer-events-none" />

        {/* Marquee Wrapper */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] space-x-6 md:space-x-8 px-4">
          {/* We duplicate the array 4 times to ensure it fills ultra-wide screens smoothly */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-48 md:w-64 h-28 md:h-36 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(194,87,210,0.15)] hover:-translate-y-1"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain filter brightness-0 invert opacity-40 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-20 relative z-10 pb-4">
        <Button
          size="lg"
          className="bg-white text-[#0A0118] border hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] font-bold px-8 rounded-full h-14"
        >
          Ver Todos os Cases
          <ArrowUpRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
        </Button>
      </div>
    </section>
  );
}
