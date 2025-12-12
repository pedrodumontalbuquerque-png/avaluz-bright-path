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
    question: "Como funciona a avaliação com IA?",
    answer: "Nossa inteligência artificial utiliza machine learning para analisar milhares de dados do mercado imobiliário, incluindo transações recentes, características do imóvel, localização e tendências de mercado. O algoritmo compara seu imóvel com propriedades similares para determinar um valor justo e preciso."
  },
  {
    question: "Quanto tempo leva para receber o relatório?",
    answer: "O relatório é gerado instantaneamente após você inserir os dados do imóvel. Em menos de 30 segundos, você terá acesso a uma avaliação completa com valor estimado, análise comparativa e insights de mercado."
  },
  {
    question: "Os dados do meu imóvel ficam seguros?",
    answer: "Sim, absolutamente. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança da indústria. Seus dados são armazenados em servidores seguros e nunca são compartilhados com terceiros sem sua autorização."
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim! Você pode cancelar sua assinatura a qualquer momento através do painel de controle. Não há multas ou taxas de cancelamento. Após o cancelamento, você continua tendo acesso até o fim do período pago."
  },
  {
    question: "Quais cidades têm cobertura?",
    answer: "Atualmente, a AvaLuz cobre mais de 156 cidades em todo o Brasil, incluindo todas as capitais e principais regiões metropolitanas. Estamos constantemente expandindo nossa cobertura para atender mais regiões."
  },
  {
    question: "Como a precisão de 91% é calculada?",
    answer: "Nossa taxa de precisão é calculada comparando as avaliações da AvaLuz com os valores reais de venda dos imóveis. Analisamos milhares de transações efetivadas e medimos a diferença entre nossa estimativa e o preço final de venda."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-primary-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-6" />
          <p className="text-lg text-primary-foreground/70">
            Tire suas dúvidas sobre a plataforma AvaLuz
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
                className="glass-dark rounded-xl px-6 border border-primary-light/10 data-[state=open]:border-primary-light/30 data-[state=open]:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-primary-foreground hover:text-primary-light py-5 [&[data-state=open]>svg]:text-primary-light">
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
            className="gap-2 border-primary-light/30 text-primary-foreground hover:bg-primary-light/10 hover:border-primary-light/50 group"
          >
            Contate-nos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}