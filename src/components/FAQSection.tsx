import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "É difícil de usar?",
    answer: "Não! AvaLuz foi feito para ser simples. Você preenche os dados do imóvel em poucos campos e recebe tudo pronto. Se souber usar WhatsApp, sabe usar AvaLuz."
  },
  {
    question: "De onde vêm os comparativos do CMA?",
    answer: "Analisamos dados reais de mercado da sua região: imóveis à venda, vendidos recentemente e tendências de preço por m². Tudo atualizado e verificado."
  },
  {
    question: "O PDF sai pronto mesmo?",
    answer: "Sim! Em poucos minutos você recebe um PDF profissional com logo, dados do imóvel, valor estimado, comparativos e análise de mercado. Pronto para enviar ao cliente."
  },
  {
    question: "O que é crédito?",
    answer: "1 crédito = 1 avaliação completa de imóvel ou 1 busca no chat AVA. Cada vez que você gera uma avaliação ou conversa com a IA, usa 1 crédito. Escolha o plano com a quantidade ideal para você."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim. Você pode cancelar quando quiser, e ainda conta com 90 dias de garantia para testar a plataforma. Sem multas ou burocracia."
  },
  {
    question: "Meus dados ficam seguros?",
    answer: "Absolutamente. Usamos criptografia de ponta e seguimos as melhores práticas de segurança. Seus dados nunca são compartilhados sem sua autorização."
  },
  {
    question: "Como a AvaLuz usa meus dados?",
    answer: "Seguimos a LGPD. Seus dados e os dados dos imóveis são usados apenas para análises, relatórios e melhoria da plataforma, sempre com segurança e consentimento. Você pode solicitar revisão ou exclusão a qualquer momento."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-primary-foreground/70">
            Tire suas dúvidas sobre a plataforma
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
          >
            Contate-nos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
