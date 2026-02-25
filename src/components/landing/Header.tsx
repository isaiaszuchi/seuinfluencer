import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como Funciona", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div className={`section-container transition-all duration-300 rounded-2xl border ${isScrolled
        ? "bg-white/95 backdrop-blur-xl border-border/60 shadow-lg"
        : "bg-dark-bg/20 backdrop-blur-md border-white/10"
        }`}>
        <div className="flex items-center justify-between h-[4.5rem] px-4 sm:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={isScrolled ? "/imagens/logo-original-si.png" : "/imagens/logo-si.png"}
              alt="Seu Influencer"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${isScrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-neon-pink to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="neon" size="default">
              Criar Campanha Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 px-4 sm:px-6 border-t border-border/50"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors py-2 ${isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="neon" className="mt-2">
                Criar Campanha Grátis
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
