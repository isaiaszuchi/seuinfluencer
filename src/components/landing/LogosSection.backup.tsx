import { motion } from "framer-motion";

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

export function LogosSection() {
    return (
        <section className="section-padding bg-[#fdfaff] border-y border-border/40 relative overflow-hidden">
            {/* Subtle radial glow for emphasis */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,87,210,0.06),transparent_70%)] pointer-events-none" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-6 border border-primary/20 uppercase tracking-widest">
                        Marcas Parceiras
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                        Quem Confia em Nossos <br className="hidden md:block" />
                        <span className="text-gradient">Creators Treinados</span>
                    </h2>
                </motion.div>

                {/* Marquee container */}
                <div className="relative">
                    {/* Fade edges - exactly matching the background #fdfaff */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-r from-[#fdfaff] via-[#fdfaff]/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-80 bg-gradient-to-l from-[#fdfaff] via-[#fdfaff]/80 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling logos */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-marquee items-center gap-16 md:gap-24 py-8">
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <div
                                    key={`${logo.name}-${index}`}
                                    className="flex-shrink-0 w-56 md:w-72 h-28 md:h-36 flex items-center justify-center transition-all duration-300"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className={`max-h-full max-w-full object-contain`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
