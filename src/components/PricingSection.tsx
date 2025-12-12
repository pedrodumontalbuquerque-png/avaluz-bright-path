import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Básico",
    description: "Grátis para Sempre",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "5 avaliações por mês",
      "Relatório básico",
      "Suporte por email",
      "Acesso ao simulador",
      "Histórico de 30 dias"
    ],
    cta: "Começar Grátis",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Profissional",
    description: "Para corretores e investidores",
    monthlyPrice: 97,
    yearlyPrice: 970,
    features: [
      "Avaliações ilimitadas",
      "Relatório PDF premium",
      "Suporte prioritário",
      "IA avançada",
      "Análise comparativa",
      "API básica",
      "Exportação de dados"
    ],
    cta: "Assinar Agora",
    variant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    description: "Para imobiliárias e construtoras",
    monthlyPrice: 297,
    yearlyPrice: 2970,
    features: [
      "Tudo do Profissional",
      "API completa",
      "White label",
      "Gerente dedicado",
      "SLA garantido",
      "Integrações customizadas",
      "Treinamento da equipe"
    ],
    cta: "Falar com Vendas",
    variant: "secondary" as const,
    popular: false
  }
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="planos" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comece gratuitamente e evolua conforme suas necessidades
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Mensal
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
            </span>
            <span className="ml-2 px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
              Economize 20%
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-2xl border ${
                plan.popular 
                  ? "border-primary shadow-xl scale-105 z-10" 
                  : "border-border shadow-lg hover:border-primary/30"
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-semibold text-primary-foreground">Mais Popular</span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isYearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
                        R$ {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{isYearly ? "ano" : "mês"}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.variant}
                  className="w-full"
                  size="lg"
                  data-payment-link={plan.popular ? "pro-plan" : undefined}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
