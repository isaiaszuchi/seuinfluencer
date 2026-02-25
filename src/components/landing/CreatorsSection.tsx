import { motion } from "framer-motion";
import { Star, Video, Users, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

const niches = [
  "Lifestyle", "Tech", "Beauty", "Fashion", "Food",
  "Fitness", "Finance", "Games", "Pets", "Travel"
];

export function CreatorsSection() {
  return (
    <section className="section-padding section-light relative overflow-hidden" id="comunidade">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20 flex items-center w-fit mx-auto gap-2">
            <Sparkles className="w-4 h-4" />
            Nossa Comunidade
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Temos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">30 Mil Talentos</span> <br className="hidden sm:block" />
            treinados e prontos.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Não perca tempo procurando. Nós construímos o maior e mais qualificado exército de criadores de conteúdo focado em conversão.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Main Stat Card - Spans 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-primary p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow group flex flex-col justify-end min-h-[280px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/30 transition-colors duration-500" />

            <div className="absolute top-8 right-8">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>

            <div className="relative z-10 w-full max-w-sm">
              <div className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-2 drop-shadow-md">
                30.000<span className="text-white/80">+</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Creators Ativos</h3>
              <p className="text-base text-white/90 leading-relaxed font-medium">
                Nossa base passa por um filtro rigoroso. Apenas os criadores com melhor desenvoltura e qualidade audiovisual são aprovados.
              </p>
            </div>
          </motion.div>

          {/* Training Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden bg-white border border-border/60 p-8 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between min-h-[280px]"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-blue-500" />
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black font-display text-foreground tracking-tight mb-2">
                124
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Aulas de Treinamento</h3>
              <p className="text-sm text-muted-foreground">
                Capacitação contínua em storytelling, iluminação e ganchos de persuasão.
              </p>
            </div>
          </motion.div>

          {/* Rating Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A0118] to-gray-900 border border-gray-800 p-8 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6 border border-yellow-500/30">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-4xl md:text-5xl font-black font-display text-white tracking-tight">
                  4.9
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Avaliação Média</h3>
              <p className="text-sm text-gray-400">
                Média das notas dadas pelas marcas após a entrega das campanhas.
              </p>
            </div>
          </motion.div>

          {/* Niches Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden bg-white border border-border/60 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Especialistas em Todos os Nichos</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {niches.map((niche, i) => (
                <div
                  key={niche}
                  className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-foreground hover:bg-white hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {niche}
                </div>
              ))}
              <div className="px-4 py-2 rounded-full bg-accent/5 border border-accent/20 text-sm font-medium text-accent hover:bg-accent/10 transition-colors cursor-default">
                + Dezenas de outros
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}