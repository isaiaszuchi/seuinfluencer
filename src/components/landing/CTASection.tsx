import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/10 rounded-full blur-[200px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pronto para Criar Conteúdo que{" "}
            <span className="text-gradient">Converte de Verdade?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de marcas e comece a escalar suas vendas com UGC autêntico 
            criado por nossos 30 mil creators treinados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Criar Campanha Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glowOutline" size="lg" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Falar com Especialista
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Sem cartão de crédito • Comece em menos de 5 minutos • Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
