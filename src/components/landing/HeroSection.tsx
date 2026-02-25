import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Users, Video, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "30.000+", label: "Creators Treinados" },
  { icon: Video, value: "80.000+", label: "Vídeos Criados" },
  { icon: TrendingUp, value: "R$100M+", label: "em Vendas Geradas" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Solid dark purple background */}
      <div className="absolute inset-0 bg-[hsl(275_80%_7%)]" />

      {/* Video background with low opacity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.05]"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>



      <div className="section-container relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-dark-card/40 border border-primary mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-white">
              A Única Plataforma com Creators Treinados
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Conteúdo UGC com</span>
            <br />
            <span className="text-gradient">30 Mil Creators Treinados</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 px-4 sm:px-0"
          >
            Já criamos <span className="text-white font-bold">80 mil vídeos</span> que geraram mais de{" "}
            <span className="text-white font-bold">R$100 milhões em vendas</span>.
            Conteúdo autêntico e que converte, até <span className="text-primary font-bold">10x mais barato</span> que o mercado tradicional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="success" size="xl" className="group">
              Criar Campanha Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glowOutline" size="lg" className="gap-2">
              <Play className="w-4 h-4" />
              Ver Como Funciona
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-dark-card/40 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors min-w-[240px]"
              >
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
