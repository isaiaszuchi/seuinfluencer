import { motion } from "framer-motion";
import { Building2, User, Camera, Zap, Check, X } from "lucide-react";

const competitors = [
  {
    icon: Building2,
    title: "Agência",
    price: "R$15.000+",
    time: "4-6 semanas",
    cons: [
      "Vídeos genéricos e sem alma",
      "Entrega em 4-6 semanas",
      "Conteúdo sem impacto real",
      "ROAS baixo e prejuízo",
    ],
  },
  {
    icon: User,
    title: "Influencer Famoso",
    price: "R$10.000+",
    time: "2-4 semanas",
    cons: [
      "Cachê alto sem garantia",
      "Entrega em 2-4 semanas",
      "Audiência que não converte",
      "ROI imprevisível",
    ],
  },
  {
    icon: Camera,
    title: "Estúdio Profissional",
    price: "R$5.000+",
    time: "1-2 semanas",
    cons: [
      "Produção engessada e fria",
      "Entrega em 1-2 semanas",
      "Conteúdo artificial e distante",
      "Custo alto, resultado médio",
    ],
  },
];

const deliverables = [
  "Creators verificados",
  "Entrega em 3–5 dias",
  "Conteúdo autêntico",
  "ROAS Alto Garantido",
];

export function ProblemSection() {
  return (
    <section className="section-padding section-light relative overflow-hidden">
      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Sua Marca Merece Conteúdo que{" "}
            <span className="text-gradient">Converte de Verdade</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O marketing tradicional é caro, lento e perdeu a confiança do público.
            UGC é a solução comprovada para aumentar suas vendas.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-center">

          {/* Competitor cards */}
          {competitors.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col p-6 rounded-2xl border border-border/60 bg-white"
            >
              {/* X badge */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                <X className="w-3 h-3 text-red-400" strokeWidth={3} />
              </div>

              {/* Icon */}
              <div className="p-2.5 rounded-xl bg-muted/50 w-fit mb-4">
                <item.icon className="w-5 h-5 text-muted-foreground/50" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground/55 mb-3">
                {item.title}
              </h3>

              {/* Price with slash */}
              <div className="relative inline-block mb-2">
                <span className="font-display text-2xl font-bold text-foreground/30">
                  {item.price}
                </span>
                <span className="absolute inset-x-0 top-1/2 h-[2.5px] bg-red-400 rounded-full -rotate-6 origin-center" />
              </div>

              <p className="text-base text-muted-foreground/60 mb-4">⏱ Prazo: {item.time}</p>

              {/* Divider */}
              <div className="h-px bg-border/50 mb-4" />

              {/* Cons list */}
              <ul className="flex flex-col gap-2.5">
                {item.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-base text-muted-foreground/70">
                    <span className="w-4 h-4 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-2.5 h-2.5 text-red-400" strokeWidth={3} />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #c257d2 0%, #9333ea 55%, #7c3aed 100%)",
              boxShadow: "none",
            }}
          >
            {/* Shine */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full p-7">
              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-[11px] font-extrabold bg-white text-violet-700 rounded-full px-3 py-1 shadow">
                  ✓ Recomendado
                </span>
              </div>

              {/* Title */}
              <p className="text-[11px] font-bold text-white/55 uppercase tracking-widest mb-0.5">
                Seu Influencer
              </p>
              <p className="text-white/75 text-base font-light mb-4">
                Conteúdo UGC que converte
              </p>

              {/* Price */}
              <div className="mb-1">
                <p className="text-[11px] text-white/55 uppercase tracking-widest font-semibold mb-0.5">
                  A partir de
                </p>
                <p className="font-display text-4xl font-black text-white leading-none tracking-tight">
                  R$100,00
                </p>
              </div>

              {/* Economy badge */}
              <span className="inline-block mt-3 mb-4 text-[11px] font-bold bg-white/15 text-white border border-white/20 rounded-full px-3 py-1 w-fit">
                💰 Economize até 99%
              </span>

              {/* Divider */}
              <div className="h-px bg-white/20 mb-4" />

              {/* Deliverables */}
              <ul className="flex flex-col gap-2.5">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-base text-white">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Time */}
              <p className="text-base text-white/50 mt-4">⏱ Prazo: 3-5 dias</p>
            </div>
          </motion.div>
        </div>

        {/* Stats callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {/* Stat 1 */}
            <div className="flex items-center justify-center gap-6 px-8 py-8 md:py-10 group hover:bg-muted/30 transition-colors duration-500">
              <span className="text-6xl md:text-7xl font-black font-display text-gradient-accent leading-none tracking-tight group-hover:scale-105 transition-transform duration-300">
                161%
              </span>
              <div>
                <p className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">Mais conversões</p>
                <p className="text-sm text-muted-foreground leading-relaxed">com conteúdo UGC<br /> vs. tradicional</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center justify-center gap-6 px-8 py-8 md:py-10 group hover:bg-muted/30 transition-colors duration-500">
              <span className="text-6xl md:text-7xl font-black font-display text-gradient-accent leading-none tracking-tight group-hover:scale-105 transition-transform duration-300">
                8.7x
              </span>
              <div>
                <p className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">Mais impactante</p>
                <p className="text-sm text-muted-foreground leading-relaxed">que influencer<br /> tradicional</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}