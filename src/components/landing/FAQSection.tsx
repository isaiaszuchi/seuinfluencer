import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que diferencia os creators da Seu Influencer?",
    answer: "Nossos creators passam por um treinamento completo de 124 aulas, cobrindo técnicas de storytelling, edição, iluminação e metodologias de conversão. Isso garante que cada conteúdo produzido seja estratégico e focado em resultados, não apenas bonito.",
  },
  {
    question: "Como funciona a garantia de qualidade?",
    answer: "Oferecemos revisões ilimitadas em todos os planos. Se o conteúdo não atender ao briefing ou suas expectativas, refazemos sem custo adicional. Nossa taxa de aprovação na primeira entrega é de 98%.",
  },
  {
    question: "Qual o prazo de entrega dos conteúdos?",
    answer: "O prazo médio é de 3 a 5 dias úteis após o creator receber o produto. Para campanhas maiores, oferecemos entregas escalonadas para manter seu calendário de conteúdo sempre abastecido.",
  },
  {
    question: "Posso escolher os creators para minha campanha?",
    answer: "Sim! Você pode navegar por nossa base de 30.000 creators, filtrar por nicho, localização, estilo e avaliações. Nossa IA também sugere os creators com melhor fit para seu produto e público.",
  },
  {
    question: "Como funciona o envio de produtos?",
    answer: "Nossa plataforma possui integração com as principais transportadoras. Você gera as etiquetas diretamente no sistema e acompanha cada envio em tempo real via nossa API de rastreamento.",
  },
  {
    question: "Quais direitos tenho sobre os conteúdos criados?",
    answer: "Todos os conteúdos são entregues com cessão total de direitos. Você pode usar em qualquer canal: redes sociais, anúncios pagos, e-commerce, email marketing, etc. Sem limitações.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, não há fidelidade. Você pode cancelar seu plano a qualquer momento e continuar usando até o fim do período já pago. Oferecemos também garantia de satisfação nos primeiros 30 dias.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding section-light relative overflow-hidden" id="faq">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ainda Tem <span className="text-gradient">Dúvidas?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre nossa plataforma.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-5 border-b border-border group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}