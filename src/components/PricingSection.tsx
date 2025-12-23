import { motion } from "framer-motion";
import { Check, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
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
    price: "R$ 97",
    period: "/mês",
    credits: "80 créditos mensais",
    description: "Para corretores ativos",
    features: [
      { text: "Valor do imóvel + aluguel", available: true },
      { text: "Estudo de mercado + PDF profissional", available: true },
      { text: "Bate-papo sobre imóvel com IA", available: true },
      { text: "Projeção/valorização", available: true },
      { text: "Histórico + suporte prioritário", available: true },
      { text: "Noticiário + grupo de network", available: true },
      { text: "Leitura de imagem na avaliação", available: true, comingSoon: true },
    ],
    cta: "Assinar Profissional",
    variant: "default" as const,
    popular: true,
    stripePlan: "profissional",
  },
  {
    name: "Broker",
    price: "R$ 497,90",
    period: "/mês",
    credits: "500 créditos mensais",
    description: "Para donos de imobiliária com time pequeno",
    features: [
      { text: "Até 8 pessoas", available: true },
      { text: "Fluxo de avaliações dos corretores", available: true },
      { text: "Funil de vendas do time", available: true },
      { text: "Valor do imóvel + aluguel", available: true },
      { text: "Bate-papo com IA especializada", available: true },
      { text: "Histórico + suporte individualizado", available: true },
    ],
    cta: "Assinar Broker",
    variant: "outline" as const,
    popular: false,
    stripePlan: "broker",
  },
  {
    name: "Imobiliária",
    price: "R$ 997",
    period: "/mês",
    credits: "Até 1.200 créditos",
    description: "Para equipes de até 15 pessoas",
    features: [
      { text: "Tudo do Broker", available: true },
      { text: "Usuário avulso: R$ 47,90", available: true },
      { text: "Estudo de mercado + PDF profissional", available: true },
      { text: "Painel de captações diárias", available: true },
      { text: "Suporte individualizado", available: true },
    ],
    cta: "Falar com vendas",
    variant: "outline" as const,
    popular: false,
    stripePlan: "imobiliaria",
  },
];

export function PricingSection() {
  return (
    <section id="planos" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Escolha o <span className="text-primary">plano ideal</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Comece grátis e evolua conforme sua necessidade
          </p>
          
          {/* Credit explanation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Info className="w-4 h-4" />
              1 crédito = 1 avaliação completa
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Info className="w-4 h-4" />
              1 crédito = 1 busca no chat AVA
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-accent rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-4 h-4 text-accent-foreground" />
                  <span className="text-sm font-semibold text-accent-foreground">Mais Popular</span>
                </div>
              )}

              <div className={`relative h-full bg-card rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? "border-accent shadow-xl shadow-accent/10" 
                  : "border-border hover:border-primary/30 hover:shadow-lg"
              }`}>
                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent rounded-2xl" />
                )}

                <div className="relative p-6">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <span className={`text-3xl font-heading font-bold ${plan.popular ? "text-accent" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                    
                    {/* Credits */}
                    <p className="text-sm text-primary font-medium">
                      {plan.credits}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular 
                            ? "bg-accent" 
                            : "bg-primary/10"
                        }`}>
                          <Check className={`w-3 h-3 ${plan.popular ? "text-accent-foreground" : "text-primary"}`} />
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          {feature.text}
                          {feature.comingSoon && (
                            <Tooltip>
                              <TooltipTrigger>
                                <span className="badge-coming-soon ml-1">Breve</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Funcionalidade em desenvolvimento</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.variant}
                    className={`w-full ${
                      plan.popular 
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold btn-glow-accent border-0" 
                        : plan.name === "Imobiliária" || plan.name === "Broker"
                          ? "hover:bg-primary/10 hover:text-primary hover:border-primary"
                          : ""
                    } transition-all duration-300`}
                    size="lg"
                    data-stripe-plan={plan.stripePlan}
                  >
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
