import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogosSection } from "@/components/landing/LogosSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DifferentialsSection } from "@/components/landing/DifferentialsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { CasesSection } from "@/components/landing/CasesSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CreatorsSection } from "@/components/landing/CreatorsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LogosSection />
        <ProblemSection />
        <DifferentialsSection />
        <section id="processo">
          <ProcessSection />
        </section>
        <section id="cases">
          <CasesSection />
        </section>
        <ComparisonSection />
        <TestimonialsSection />
        <CreatorsSection />
        <section id="precos">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
