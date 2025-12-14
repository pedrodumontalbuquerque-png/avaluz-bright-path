import { motion } from "framer-motion";
import { Target, TrendingUp, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Target,
    text: "Pare de perder venda por insegurança no preço.",
    highlight: "perder venda",
  },
  {
    icon: TrendingUp,
    text: "Troque achismo por estudo de mercado.",
    highlight: "estudo de mercado",
  },
  {
    icon: Award,
    text: "Ganhe autoridade na visita com um PDF profissional.",
    highlight: "autoridade",
  },
  {
    icon: Clock,
    text: "Mais agilidade para atender mais clientes no mesmo dia.",
    highlight: "mais clientes",
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Por que o corretor <span className="text-accent">precisa</span> disso?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="flex items-center gap-6 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground font-medium">
                    {reason.text.split(reason.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-accent font-semibold">{reason.highlight}</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
