import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Grátis",
    monthlyPrice: "R$ 0",
    yearlyPrice: "R$ 0",
    period: "",
    credits: "2 créditos de avaliação",
    description: "Para experimentar",
    features: [
      { text: "Valor do imóvel", available: true },
      { text: "Valor do aluguel", available: true },
    ],
    cta: "Começar grátis",
    variant: "outline" as const,
    popular: false,
    stripePlan: "free",
  },
  {
    name: "Profissional",
    monthlyPrice: "R$ 97",
    yearlyPrice: "R$ 997",
    period: "/mês",
    yearlyPeriod: "/ano",
    credits: "80 créditos mensais",
    yearlyCredits: "960 créditos anuais",
    description: "Para corretores ativos",
    features: [
      { text: "Valor do imóvel + aluguel", available: true },
      { text: "Estudo de mercado + PDF", available: true },
      { text: "Bate-papo com IA", available: true },
      { text: "Projeção/valorização", available: true },
      { text: "Histórico + suporte", available: true },
      { text: "Grupo de network", available: true },
      { text: "Leitura de imagem", available: true, comingSoon: true },
    ],
    cta: "Assinar Profissional",
    variant: "default" as const,
    popular: true,
    stripePlan: "profissional",
  },
  {
    name: "Broker",
    monthlyPrice: "R$ 497,90",
    yearlyPrice: "R$ 5.799",
    period: "/mês",
    yearlyPeriod: "/ano",
    credits: "500 créditos mensais",
    yearlyCredits: "6.000 créditos anuais",
    description: "Para time pequeno",
    features: [
      { text: "Até 8 pessoas", available: true },
      { text: "Fluxo de avaliações", available: true },
      { text: "Funil de vendas", available: true },
      { text: "Valor do imóvel + aluguel", available: true },
      { text: "Bate-papo com IA", available: true },
      { text: "Suporte individualizado", available: true },
    ],
    cta: "Assinar Broker",
    variant: "outline" as const,
    popular: false,
    stripePlan: "broker",
  },
  {
    name: "Imobiliária",
    monthlyPrice: "R$ 997",
    yearlyPrice: "R$ 10.997",
    period: "/mês",
    yearlyPeriod: "/ano",
    credits: "Até 1.200 créditos",
    yearlyCredits: "Até 14.400 créditos",
    description: "Equipes até 15 pessoas",
    features: [
      { text: "Tudo do Broker", available: true },
      { text: "Usuário avulso: R$ 47,90", available: true },
      { text: "Estudo de mercado + PDF", available: true },
      { text: "Painel de captações", available: true },
      { text: "Suporte individualizado", available: true },
    ],
    cta: "Falar com vendas",
    variant: "outline" as const,
    popular: false,
    stripePlan: "imobiliaria",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="planos" className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden" aria-labelledby="pricing-heading">
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 id="pricing-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Planos de Avaliação Imobiliária: <span className="text-primary">Escolha o ideal</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 px-4">
            Ferramenta de avaliação de imóveis para corretores. Comece grátis e evolua conforme sua necessidade
          </p>
          
          {/* Switch Mensal/Anual */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-primary" : "text-muted-foreground"}`}>
              Mensal
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-accent"
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? "text-primary" : "text-muted-foreground"}`}>
              Anual
            </span>
            {isYearly && (
              <span className="ml-2 px-2 py-0.5 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                Economize até 15%
              </span>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              1 crédito = 1 avaliação
            </div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              1 crédito = 1 busca AVA
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative ${plan.popular ? "sm:-mt-2 sm:mb-2 lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10 px-3 sm:px-4 py-1 sm:py-1.5 bg-accent rounded-full flex items-center gap-1 sm:gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
                  <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">Mais Popular</span>
                </div>
              )}

              <div className={`relative h-full bg-card rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? "border-accent shadow-xl shadow-accent/10" 
                  : "border-border hover:border-primary/30 hover:shadow-lg"
              }`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent rounded-xl sm:rounded-2xl" />
                )}

                <div className="relative p-4 sm:p-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="mb-2">
                      <span className={`text-2xl sm:text-3xl font-heading font-bold ${plan.popular ? "text-accent" : "text-foreground"}`}>
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {(isYearly ? plan.yearlyPeriod : plan.period) && (
                        <span className="text-muted-foreground text-sm">{isYearly ? plan.yearlyPeriod : plan.period}</span>
                      )}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-primary font-medium">
                      {isYearly && plan.yearlyCredits ? plan.yearlyCredits : plan.credits}
                    </p>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-accent" : "bg-primary/10"
                        }`}>
                          <Check className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${plan.popular ? "text-accent-foreground" : "text-primary"}`} />
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 min-w-0">
                          <span className="truncate">{feature.text}</span>
                          {feature.comingSoon && (
                            <Tooltip>
                              <TooltipTrigger>
                                <span className="badge-coming-soon ml-1 flex-shrink-0">Breve</span>
                              </TooltipTrigger>
                              <TooltipContent className="bg-popover border border-border">
                                <p>Em desenvolvimento</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.variant}
                    className={`w-full min-h-[44px] ${
                      plan.popular 
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold btn-glow-accent border-0" 
                        : plan.name === "Imobiliária" || plan.name === "Broker"
                          ? "hover:bg-primary/10 hover:text-primary hover:border-primary"
                          : ""
                    } transition-all duration-300`}
                    size="lg"
                    asChild
                  >
                    <a href="https://avaluz.app/auth/signin">{plan.cta}</a>
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
