import { motion } from "framer-motion";
import { FileEdit, GitCompare, FileCheck, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileEdit,
    title: "Preencha os dados do imóvel",
    description: "Informe localização, tamanho, quartos e características. Simples e rápido.",
  },
  {
    number: "2",
    icon: GitCompare,
    title: "AvaLuz cruza mercado e comparativos",
    description: "Analisamos dados reais da região para calcular o valor justo.",
  },
  {
    number: "3",
    icon: FileCheck,
    title: "Receba avaliação + CMA + PDF pronto",
    description: "Tudo em minutos: valor, aluguel, comparativos e relatório profissional.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em três passos simples, você tem tudo que precisa para impressionar seu cliente
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Connection Line - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] h-0.5 bg-border">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-light origin-left"
                  />
                </div>
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-primary/30 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl group-hover:shadow-glow">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-2 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
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
                <div className="flex justify-center my-6 md:hidden">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-primary-light rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why it works block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              Por que isso funciona
            </div>
            <p className="text-lg text-foreground font-medium">
              Sem achismo. Você mostra dados e ganha autoridade.
            </p>
            <p className="text-muted-foreground mt-2">
              Clientes confiam mais quando veem números reais do mercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
