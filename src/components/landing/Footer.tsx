import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Como Funciona", href: "#" },
    { label: "Preços", href: "#" },
    { label: "Cases de Sucesso", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-[#faf8fc] relative overflow-hidden">
      {/* Decorative Glow elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container pt-16 pb-8 relative z-10">

        {/* Main Footer Columns */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img src="/imagens/logo-original-si.png" alt="Seu Influencer" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed font-medium">
              A única plataforma do Brasil com 30 mil creators treinados. Conteúdo UCG autêntico que destrói o CPA dos seus anúncios.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white border border-border/50 shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 sm:gap-24 lg:justify-end">
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-foreground">Produto</h4>
              <ul className="space-y-4">
                {footerLinks.produto.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-primary font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-foreground">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-muted-foreground hover:text-primary font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-muted-foreground">
            © 2026 Seu Influencer. Todos os direitos reservados.
          </p>
          <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            Feito com <span className="text-primary">💜</span> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
