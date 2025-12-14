import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { BenefitsSection } from "@/components/BenefitsSection";
import { VideoSection } from "@/components/VideoSection";
import { WhySection } from "@/components/WhySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AvaLuz - Avaliações Imobiliárias com IA | A Luz do Mercado Imobiliário</title>
        <meta 
          name="description" 
          content="AvaLuz gera avaliação do imóvel, valor de aluguel, comparativos da região e um PDF profissional pronto para enviar ao cliente. Feche mais vendas com credibilidade." 
        />
        <meta name="keywords" content="avaliação imobiliária, corretor de imóveis, CMA, estudo de mercado, valor de imóvel, aluguel" />
        <meta property="og:title" content="AvaLuz - A Luz do Mercado Imobiliário" />
        <meta property="og:description" content="Avaliações imobiliárias com dados reais. PDF profissional em minutos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avaluz.com.br" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <HowItWorks />
          <BenefitsSection />
          <VideoSection />
          <WhySection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
