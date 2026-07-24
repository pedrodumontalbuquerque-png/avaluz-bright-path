import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { BenefitsSection } from "@/components/BenefitsSection";
import { VideoSection } from "@/components/VideoSection";
import { WhySection } from "@/components/WhySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { GlossarySection } from "@/components/GlossarySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona a avaliação de imóvel na AvaLuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você cadastra os dados do imóvel (CEP, metragem, quartos, características) e em segundos recebe a avaliação com valor estimado, valor de aluguel, comparativos da região (CMA) e um PDF profissional pronto para enviar ao cliente."
      }
    },
    {
      "@type": "Question",
      "name": "O que é CMA (Análise Comparativa de Mercado) e como ajuda na venda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CMA é a Análise Comparativa de Mercado que cruza dados de imóveis similares vendidos e à venda na região. Mostra preço por m², faixa de valor e tendências. Com esses dados, você justifica o preço ao cliente com credibilidade e fecha mais vendas."
      }
    },
    {
      "@type": "Question",
      "name": "Como gerar relatório de avaliação imobiliária em PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Após a avaliação, a AvaLuz gera automaticamente um PDF profissional com logo, dados do imóvel, valor estimado, valor de aluguel, comparativos de mercado (CMA) e análise completa. Você pode baixar ou compartilhar diretamente com seu cliente."
      }
    },
    {
      "@type": "Question",
      "name": "A AvaLuz serve para precificação de imóvel para venda e aluguel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! A AvaLuz calcula tanto o valor de venda quanto o valor de aluguel estimado do imóvel, além da rentabilidade. Tudo baseado em dados reais de mercado da região."
      }
    },
    {
      "@type": "Question",
      "name": "A AvaLuz é fácil de usar para corretores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! A plataforma foi desenvolvida pensando na rotina corrida do corretor. Interface limpa, poucos campos para preencher e resultado em segundos. Se você sabe usar WhatsApp, sabe usar AvaLuz."
      }
    },
    {
      "@type": "Question",
      "name": "Como meus dados são usados? (LGPD)",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seguimos a LGPD. Seus dados e os dados dos imóveis são usados apenas para análises, relatórios e melhoria da plataforma, sempre com segurança e consentimento. Você pode solicitar revisão ou exclusão a qualquer momento."
      }
    },
    {
      "@type": "Question",
      "name": "Tenho 90 dias de garantia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Você tem 90 dias de garantia para testar a plataforma. Se não fizer sentido para você, pode cancelar sem multas ou burocracia."
      }
    }
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AvaLuz | Avaliação Imobiliária em Segundos + Estudo de Mercado (CMA)</title>
        <meta 
          name="description" 
          content="AvaLuz: avaliação de imóveis em segundos, estudo de mercado (CMA) e relatório em PDF. Para corretores e imobiliárias. Teste grátis." 
        />
        <meta name="keywords" content="avaluz, avaliação imobiliária, avaliação de imóvel, estudo de mercado imobiliário, CMA, análise comparativa de mercado, relatório de avaliação, precificação de imóvel, ferramenta para corretores, relatório PDF, valor de aluguel" />
        <meta property="og:title" content="AvaLuz | Avaliação Imobiliária em Segundos + Estudo de Mercado (CMA)" />
        <meta property="og:description" content="Avaliação de imóveis em segundos, estudo de mercado (CMA) e relatório profissional em PDF. Ferramenta essencial para corretores." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avaluz.com.br/" />
        <link rel="canonical" href="https://avaluz.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <VideoSection />
          <HowItWorks />
          <BenefitsSection />
          <WhySection />
          <TestimonialsSection />
          <PricingSection />
          <GlossarySection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;