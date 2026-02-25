import { motion } from "framer-motion";
import { Sparkles, Users, Package, Video, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: <>Crie a Campanha<br />com IA</>,
    description: "Nossa IA te ajuda a definir o briefing perfeito em minutos.",
  },
  {
    number: "02",
    icon: Users,
    title: "Selecione os Creators",
    description: "Escolha entre 30 mil creators treinados do seu nicho.",
  },
  {
    number: "03",
    icon: Package,
    title: "Envie os Produtos",
    description: "Rastreio automático via API integrada com transportadoras.",
  },
  {
    number: "04",
    icon: Video,
    title: "Receba os Conteúdos",
    description: "Vídeos e fotos profissionais entregues na plataforma.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Aprove e Use",
    description: "Revisão simples e download em alta qualidade.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
            Simples e Rápido
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Conteúdo Profissional em{" "}
            <span className="text-gradient-accent">Poucos Cliques</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do briefing à entrega, nossa plataforma automatiza todo o processo para você.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-[1100px] mx-auto">
          {/* Connection Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[3rem] left-[10%] right-[10%] h-[2px] bg-gradient-primary opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110" />

                  {/* Icon Circle */}
                  <div className="relative w-24 h-24 rounded-3xl p-[2.5px] bg-gradient-primary shadow-lg group-hover:shadow-[0_10px_40px_rgba(253,163,50,0.3)] transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative w-full h-full rounded-[calc(1.5rem-2.5px)] bg-white flex items-center justify-center overflow-hidden">
                      {/* Subtle internal gradient bleed */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                      <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500 relative z-10" />
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-black text-white shadow-xl border-[3px] border-white z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-[#d77600] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}