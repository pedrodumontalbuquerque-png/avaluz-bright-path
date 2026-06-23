import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Como funciona a avaliação de imóvel na AvaLuz?",
    answer: "Você cadastra os dados do imóvel (CEP, metragem, quartos, características) e em segundos recebe a avaliação com valor estimado, valor de aluguel, comparativos da região (CMA) e um PDF profissional pronto para enviar ao cliente."
  },
  {
    question: "O que é CMA (Análise Comparativa de Mercado) e como ajuda na venda?",
    answer: "CMA é a Análise Comparativa de Mercado que cruza dados de imóveis similares vendidos e à venda na região. Mostra preço por m², faixa de valor e tendências. Com esses dados, você justifica o preço ao cliente com credibilidade e fecha mais vendas."
  },
  {
    question: "Como gerar relatório de avaliação imobiliária em PDF?",
    answer: "Após a avaliação, a AvaLuz gera automaticamente um PDF profissional com logo, dados do imóvel, valor estimado, valor de aluguel, comparativos de mercado (CMA) e análise completa. Você pode baixar ou compartilhar diretamente com seu cliente."
  },
  {
    question: "A AvaLuz serve para precificação de imóvel para venda e aluguel?",
    answer: "Sim! A AvaLuz calcula tanto o valor de venda quanto o valor de aluguel estimado do imóvel, além da rentabilidade. Tudo baseado em dados reais de mercado da região."
  },
  {
    question: "A AvaLuz é fácil de usar para corretores?",
    answer: "Sim! A plataforma foi desenvolvida pensando na rotina corrida do corretor. Interface limpa, poucos campos para preencher e resultado em segundos. Se você sabe usar WhatsApp, sabe usar AvaLuz."
  },
  {
    question: "De onde vêm os dados dos comparativos (CMA)?",
    answer: "Analisamos dados reais de mercado da sua região: imóveis à venda, vendidos recentemente e tendências de preço por m². Tudo atualizado e verificado para garantir precisão na avaliação."
  },
  {
    question: "O que é crédito e como funciona?",
    answer: "1 crédito = 1 avaliação completa de imóvel. Cada vez que você gera uma avaliação, usa 1 crédito. Escolha o plano com a quantidade ideal para você."
  },
  {
    question: "Posso cancelar quando quiser? Tenho garantia?",
    answer: "Sim! Você pode cancelar quando quiser, e ainda conta com 90 dias de garantia para testar a plataforma. Se não fizer sentido para você, cancele sem multas ou burocracia."
  },
  {
    question: "Como meus dados são usados? (LGPD)",
    answer: "Seguimos a LGPD. Seus dados e os dados dos imóveis são usados apenas para análises, relatórios e melhoria da plataforma, sempre com segurança e consentimento. Você pode solicitar revisão ou exclusão a qualquer momento."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-primary-dark relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-primary-foreground/70">
            Tire suas dúvidas sobre avaliação imobiliária, CMA e a plataforma AvaLuz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/10 backdrop-blur-sm rounded-xl px-6 border border-primary-light/10 data-[state=open]:border-accent/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-primary-foreground hover:text-accent py-5 [&[data-state=open]>svg]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/70 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-primary-foreground/60 mb-4">
            Não encontrou sua resposta?
          </p>
          <Button 
            variant="outline" 
            className="gap-2 border-accent/30 text-primary-foreground hover:bg-accent/10 hover:border-accent/50 hover:text-accent group"
            asChild
          >
            <Link to="/contato">
              Entre em contato
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}