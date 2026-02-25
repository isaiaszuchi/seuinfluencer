import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "R$0",
    period: "/mês",
    description: "Para testar a plataforma",
    features: [
      "1 campanha por mês",
      "Até 3 creators",
      "Suporte por email",
      "Acesso à plataforma",
    ],
    cta: "Começar Grátis",
    popular: false,
    highlighted: false,
  },
  {
    name: "Avulsa",
    price: "R$100",
    period: "/vídeo",
    description: "Pague por demanda",
    features: [
      "Sem mensalidade",
      "Creators treinados",
      "Briefing com IA",
      "Entrega em 5 dias",
      "Revisões ilimitadas",
    ],
    cta: "Criar Campanha",
    popular: false,
    highlighted: false,
  },
  {
    name: "Growth",
    price: "R$990",
    period: "/mês",
    description: "Para marcas em crescimento",
    features: [
      "20 vídeos/mês",
      "Creators premium",
      "CRM completo",
      "API de rastreamento",
      "Suporte prioritário",
      "Relatórios avançados",
    ],
    cta: "Assinar Agora",
    popular: true,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$2.490",
    period: "/mês",
    description: "Para escalar resultados",
    features: [
      "60 vídeos/mês",
      "Creators exclusivos",
      "IA avançada",
      "Automações completas",
      "Account manager dedicado",
      "SLA de entrega",
      "Integrações personalizadas",
    ],
    cta: "Falar com Especialista",
    popular: false,
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background" id="precos">
      {/* Subtle background glow matching brand palette */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
            Nossos Planos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            Escolha o Plano <span className="text-transparent bg-clip-text bg-gradient-primary">Ideal</span><br className="hidden sm:block" /> para Sua Marca
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece grátis e escale conforme seus resultados crescem. Sem letras miúdas.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {plans.map((plan, index) => {
            const isPro = plan.name === "Pro";
            const isGrowth = plan.name === "Growth";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${isPro ? "lg:-mt-6 lg:mb-6 z-10" : ""}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent rounded-full text-xs font-bold text-white z-20 shadow-md border-2 border-white whitespace-nowrap">
                    Mais Popular
                  </div>
                )}

                {/* Recommended badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-primary rounded-full text-xs font-bold text-white z-20 shadow-lg border-2 border-white whitespace-nowrap">
                    Recomendado para Escala
                  </div>
                )}

                {/* Card glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-primary rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${isPro ? "opacity-20 group-hover:opacity-40" : "opacity-0 group-hover:opacity-5"}`} />

                <div
                  className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${isPro
                    ? "bg-white border-[3px] border-primary shadow-[0_20px_50px_rgba(253,163,50,0.15)] group-hover:-translate-y-2"
                    : isGrowth
                      ? "bg-white border-[2px] border-accent/40 shadow-xl group-hover:border-accent/60 group-hover:-translate-y-1"
                      : "bg-white border border-border shadow-md hover:shadow-lg group-hover:-translate-y-1"
                    }`}
                >
                  {/* Plan header */}
                  <div className="mb-6 flex-1">
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-sm mb-6 min-h-[40px] text-muted-foreground font-medium">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`font-display text-4xl font-black tracking-tight ${isPro ? "text-transparent bg-clip-text bg-gradient-primary" : "text-foreground"
                        }`}>
                        {plan.price}
                      </span>
                      <span className="font-medium text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPro ? "bg-primary/20" : isGrowth ? "bg-accent/10" : "bg-muted"
                          }`}>
                          <Check className={`w-3 h-3 stroke-[3] ${isPro ? "text-primary" : isGrowth ? "text-accent" : "text-foreground"
                            }`} />
                        </div>
                        <span className="text-sm font-medium text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      variant={isPro ? "default" : isGrowth ? "default" : "outline"}
                      className={`w-full h-12 rounded-xl font-bold transition-all ${isPro
                        ? "bg-gradient-primary text-white border-none shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        : isGrowth
                          ? "bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg"
                          : "bg-transparent border-border hover:bg-muted text-foreground"
                        }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-12 text-sm font-medium text-muted-foreground"
        >
          <ShieldCheck className="w-5 h-5 text-primary" />
          <p>
            Todos os planos incluem garantia de satisfação de 7 dias. Cancele com um clique.
          </p>
        </motion.div>
      </div>
    </section>
  );
}