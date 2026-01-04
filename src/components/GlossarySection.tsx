import { motion } from "framer-motion";
import { BookOpen, BarChart3, FileText, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const glossaryItems = [
  {
    icon: BarChart3,
    term: "CMA (Análise Comparativa de Mercado)",
    definition: "Metodologia que compara imóveis similares vendidos e à venda na região para determinar o valor justo de mercado. A AvaLuz gera CMA automatizado com preço por m² e faixa de valor.",
  },
  {
    icon: BookOpen,
    term: "Estudo de Mercado Imobiliário",
    definition: "Análise completa da região incluindo tendências de preço, oferta e demanda, perfil de compradores e comparativos. Essencial para precificação correta e negociação.",
  },
  {
    icon: FileText,
    term: "Relatório de Avaliação de Imóvel",
    definition: "Documento profissional em PDF com dados do imóvel, valor estimado, comparativos de mercado e análise. Pronto para apresentar ao cliente ou usar em negociações.",
  },
];

const pricingTips = [
  "Analise imóveis similares vendidos nos últimos 6 meses na mesma região",
  "Compare preço por m² de imóveis com características semelhantes (quartos, vagas, área)",
  "Considere fatores como estado de conservação, andar e vista para ajustar o valor",
];

export function GlossarySection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden" aria-labelledby="glossary-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 id="glossary-heading" className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Glossário: <span className="text-primary">Termos do Mercado Imobiliário</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Entenda os conceitos essenciais para avaliação e precificação de imóveis
            </p>
          </motion.div>

          {/* Glossary Grid */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-10 sm:mb-12">
            {glossaryItems.map((item, index) => (
              <motion.article
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base leading-tight">
                    {item.term}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.definition}
                </p>
              </motion.article>
            ))}
          </div>

          {/* How to Price Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                Como Precificar um Imóvel Corretamente
              </h3>
            </div>
            <ul className="space-y-3">
              {pricingTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {tip}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Com a <strong className="text-primary">AvaLuz</strong>, todo esse processo é automatizado. Você insere os dados e recebe avaliação, CMA e relatório em PDF em segundos.
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 h-auto group shadow-lg btn-glow font-semibold"
                asChild
              >
                <a href="https://avaluz.app/auth/signin">
                  Gerar minha primeira avaliação
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}