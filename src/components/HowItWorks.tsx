import { motion } from "framer-motion";
import { FileText, Brain, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Informe os Dados",
    description: "Insira as características do imóvel como localização, metragem, número de quartos e outros detalhes relevantes.",
    color: "cyan"
  },
  {
    number: "02",
    icon: Brain,
    title: "IA em Ação",
    description: "Nossa inteligência artificial analisa milhares de dados do mercado em tempo real para calcular o valor preciso.",
    color: "purple"
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Receba o Relatório",
    description: "Em segundos, você recebe um relatório completo com a avaliação, comparativos de mercado e análise de tendências.",
    color: "green"
  }
];

// Floating Notifications
function FloatingNotifications() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-20 right-8 hidden lg:block"
      >
        <div className="notification-float">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Nova avaliação concluída</p>
              <p className="text-xs text-muted-foreground">R$ 520k • Há 3 min</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-32 left-8 hidden lg:block"
      >
        <div className="notification-float animation-delay-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-light/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-light" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Relatório gerado</p>
              <p className="text-xs text-muted-foreground">Em 2 segundos</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute top-1/2 right-20 hidden xl:block"
      >
        <div className="notification-float animation-delay-1000">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Confiança:</span>
            <span className="text-sm font-bold text-primary-light">93%</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <FloatingNotifications />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas três passos simples, você obtém uma avaliação profissional do seu imóvel
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-primary via-purple-500 to-green-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 perspective-1000">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative bg-card rounded-2xl p-8 shadow-xl border border-border hover:border-primary/50 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-glow">
                  {/* Step Number */}
                  <div className={`absolute -top-5 left-8 px-4 py-2 rounded-full bg-gradient-to-r ${
                    step.color === "cyan" ? "from-primary to-primary-light" :
                    step.color === "purple" ? "from-purple-500 to-pink-500" :
                    "from-green-500 to-emerald-400"
                  } shadow-lg`}>
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon with Glow */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-2 transition-all duration-300 group-hover:scale-110 ${
                    step.color === "cyan" ? "bg-primary/10 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]" :
                    step.color === "purple" ? "bg-purple-500/10 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]" :
                    "bg-green-500/10 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      step.color === "cyan" ? "text-primary-light" :
                      step.color === "purple" ? "text-purple-400" :
                      "text-green-400"
                    }`} />
                  </div>

                  {/* Particles for Brain step */}
                  {step.color === "purple" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-purple-400"
                          animate={{
                            x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                            y: [0, Math.sin(i * 60 * Math.PI / 180) * 40],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  )}

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
        </div>
      </div>
    </section>
  );
}