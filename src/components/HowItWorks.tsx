import { motion } from "framer-motion";
import { Home, Zap, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Home,
    title: "Informe os Dados",
    description: "Insira as características do imóvel como localização, metragem, número de quartos e outros detalhes relevantes."
  },
  {
    number: "02",
    icon: Zap,
    title: "IA em Ação",
    description: "Nossa inteligência artificial analisa milhares de dados do mercado em tempo real para calcular o valor preciso."
  },
  {
    number: "03",
    icon: FileText,
    title: "Receba o Relatório",
    description: "Em segundos, você recebe um relatório completo com a avaliação, comparativos de mercado e análise de tendências."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas três passos simples, você obtém uma avaliação profissional do seu imóvel
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-primary rounded-full">
                    <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
