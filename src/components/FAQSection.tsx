import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
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
                className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <Button variant="outline" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Contate-nos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
