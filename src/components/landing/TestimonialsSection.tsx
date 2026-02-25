import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "CMO",
    company: "Beauty Co.",
    quote: "Reduzimos nosso custo por aquisição em 45% e triplicamos o ROAS em apenas 2 meses.",
    rating: 5,
  },
  {
    name: "João Silva",
    role: "Founder",
    company: "Tech Store",
    quote: "A qualidade dos creators e a velocidade de entrega são incomparáveis. Melhor investimento que fizemos.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Marketing Director",
    company: "Fashion Hub",
    quote: "Escalamos de 10 para 200 vídeos por mês sem perder qualidade. A plataforma é incrível.",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "CEO",
    company: "Food Delivery",
    quote: "O treinamento dos creators faz toda a diferença. O conteúdo realmente converte.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Growth Lead",
    company: "Wellness Brand",
    quote: "Finalmente encontramos uma solução que escala. O suporte é excepcional.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "E-commerce Manager",
    company: "Home Decor",
    quote: "ROI de 5x no primeiro mês. Os números falam por si.",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de marcas que transformaram seus resultados com UGC.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-light p-6 h-full">
                {/* Video placeholder */}
                <div className="relative aspect-video rounded-xl bg-muted/50 mb-4 overflow-hidden group-hover:ring-2 ring-primary/30 transition-all cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, hsl(${328 + index * 20} 70% 50%) 0%, hsl(${280 + index * 15} 60% 40%) 100%)`,
                    }}
                  />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}