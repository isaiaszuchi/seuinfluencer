import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  "Acesso a Creators Treinados",
  "Suporte Individual",
  "Inteligência Artificial",
  "CRM com Automação",
  "Custo por Vídeo",
  "Prazo de Entrega",
  "API de Rastreamento",
  "Garantia de Qualidade",
  "Escalabilidade",
  "Resultados Comprovados",
];

const competitors = [
  {
    name: "Concorrência",
    highlight: false,
    headerColor: "bg-destructive",
    values: ["✗", "✗", "✗", "✗", "R$15.000+", "4-6 semanas", "✗", "Limitada", "Difícil", "Variável"],
  },
  {
    name: "Seu Influencer",
    highlight: true,
    headerColor: "bg-success",
    values: ["✓", "✓", "✓", "✓", "R$100", "3-5 dias", "✓", "✓", "✓", "✓"],
  },
];

export function ComparisonSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Comparativo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Os benefícios são tantos que fazem{" "}
            <span className="text-gradient">os concorrentes ficarem sem graça</span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm shadow-md">
            {/* Header */}
            <div className="grid grid-cols-3">
              <div className="p-4 md:p-5 bg-card/60 font-display font-bold text-foreground text-base md:text-lg border-b border-border/50 flex items-center">
                Benefícios
              </div>
              {competitors.map((comp) => (
                <div
                  key={comp.name}
                  className={`p-4 md:p-5 text-center font-display font-bold text-base md:text-lg text-white border-b border-border/50 ${comp.headerColor}`}
                >
                  {comp.name}
                </div>
              ))}
            </div>

            {/* Rows */}
            {features.map((feature, featureIndex) => (
              <div
                key={feature}
                className={`grid grid-cols-3 ${featureIndex % 2 === 0 ? "bg-card/40" : "bg-card/20"
                  } ${featureIndex === features.length - 1 ? "" : "border-b border-border/30"} hover:bg-muted/50 transition-colors`}
              >
                <div className="p-4 md:p-5 text-sm md:text-base font-medium text-foreground/90 flex items-center">
                  {feature}
                </div>
                {competitors.map((comp) => {
                  const value = comp.values[featureIndex];
                  const isCheck = value === "✓";
                  const isX = value === "✗";

                  return (
                    <div
                      key={`${comp.name}-${feature}`}
                      className={`p-4 md:p-5 flex items-center justify-center ${comp.highlight
                          ? "bg-success/5"
                          : ""
                        }`}
                    >
                      {isCheck ? (
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-success/20 flex items-center justify-center">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-success" strokeWidth={2.5} />
                        </div>
                      ) : isX ? (
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <span className={`text-sm md:text-base ${comp.highlight ? "text-success font-semibold" : "text-muted-foreground font-medium"
                          }`}>
                          {value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
