import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
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
    variant: "outline" as const,
    popular: false
  }
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="planos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Escolha o <span className="text-gradient">Plano Ideal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comece gratuitamente e evolua conforme suas necessidades
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Mensal
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-primary-light"
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Anual
            </span>
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="ml-2 px-3 py-1 bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent text-xs font-semibold rounded-full border border-accent/30"
            >
              Economize 20%
            </motion.span>
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
              className={`relative rounded-2xl transition-all duration-500 ${
                plan.popular 
                  ? "scale-105 z-10" 
                  : "hover:scale-[1.02]"
              }`}
            >
              {/* Gradient Border for Popular */}
              {plan.popular && (
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-primary-light to-purple-500 rounded-2xl" />
              )}

              <div className={`relative bg-card rounded-2xl border ${
                plan.popular 
                  ? "border-transparent shadow-2xl" 
                  : "border-border shadow-lg hover:border-primary/30 hover:shadow-xl"
              } transition-all duration-300 h-full`}>
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center gap-1.5 shadow-glow">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">Mais Popular</span>
                  </div>
                )}

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl blur-xl -z-10" />
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className={`text-4xl lg:text-5xl font-heading font-bold ${plan.popular ? "text-gradient" : "text-foreground"}`}>
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
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular 
                            ? "bg-gradient-to-r from-primary to-primary-light" 
                            : "bg-primary/10"
                        }`}>
                          <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.variant}
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-primary-light hover:shadow-glow text-white border-0" 
                        : plan.name === "Enterprise"
                          ? "hover:bg-primary/10 hover:text-primary hover:border-primary"
                          : ""
                    } transition-all duration-300`}
                    size="lg"
                    data-payment-link={plan.popular ? "pro-plan" : undefined}
                  >
                    {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}