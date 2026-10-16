import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  Sparkles, 
  Info, 
  Home, 
  Building2, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Headphones, 
  Newspaper, 
  Users, 
  Image, 
  Award, 
  FileText, 
  Users2, 
  GitBranch, 
  Target, 
  LayoutDashboard,
  Star,
  ChevronDown,
  ChevronUp,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type FeatureType = {
  text: string;
  available: boolean;
  comingSoon?: boolean;
  icon?: LucideIcon;
  highlight?: boolean;
};

const plans = [
  {
    name: "Grátis",
    monthlyPrice: "R$ 0",
    yearlyPrice: "R$ 0",
    period: "",
    credits: "",
    description: "Para experimentar",
    features: [
      { text: "Valor do imóvel", available: true, icon: Home },
      { text: "Valor do aluguel", available: true, icon: Building2 },
    ] as FeatureType[],
    cta: "Começar grátis",
    variant: "outline" as const,
    popular: false,
    stripePlan: "free",
    visibleFeatures: 2,
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
      { text: "Avaliações", available: true, icon: Star },
      { text: "Valor do imóvel", available: true, icon: Home },
      { text: "Valor do aluguel", available: true, icon: Building2 },
      { text: "Bate-papo com IA especializada", available: true, icon: MessageSquare, highlight: true },
      { text: "Projeção e valorização do imóvel", available: true, icon: TrendingUp, highlight: true },
      { text: "Histórico", available: true, icon: Clock },
      { text: "Suporte", available: true, icon: Headphones },
      { text: "Noticiário imobiliário", available: true, icon: Newspaper },
      { text: "Grupo de Network (Corretores)", available: true, icon: Users },
      { text: "Leitura de imagem na avaliação", available: true, comingSoon: true, icon: Image },
      { text: "Premiações por app utilizado", available: true, comingSoon: true, icon: Award },
      { text: "Estudo de mercado com foto do corretor", available: true, icon: FileText, highlight: true },
    ] as FeatureType[],
    cta: "Assinar Profissional",
    variant: "default" as const,
    popular: true,
    stripePlan: "profissional",
    visibleFeatures: 5,
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
      { text: "Até 8 pessoas", available: true, icon: Users2, highlight: true },
      { text: "Fluxo de avaliações dos corretores", available: true, icon: GitBranch, highlight: true },
      { text: "Funil de vendas dos corretores", available: true, icon: Target, highlight: true },
      { text: "Valor do imóvel", available: true, icon: Home },
      { text: "Valor do aluguel", available: true, icon: Building2 },
      { text: "Bate-papo com IA especializada", available: true, icon: MessageSquare },
      { text: "Histórico", available: true, icon: Clock },
      { text: "Noticiário imobiliário", available: true, icon: Newspaper },
      { text: "Grupo de Network (Donos de imobiliária)", available: true, icon: Users },
      { text: "Leitura de imagem na avaliação", available: true, comingSoon: true, icon: Image },
      { text: "Premiações por app utilizado", available: true, comingSoon: true, icon: Award },
      { text: "Suporte individualizado", available: true, icon: Headphones, highlight: true },
      { text: "Estudo com foto do corretor e imobiliária", available: true, icon: FileText, highlight: true },
    ] as FeatureType[],
    cta: "Assinar Broker",
    variant: "outline" as const,
    popular: false,
    stripePlan: "broker",
    visibleFeatures: 5,
  },
  {
    name: "Imobiliária",
    monthlyPrice: "R$ 997",
    yearlyPrice: "R$ 10.997",
    period: "/mês",
    yearlyPeriod: "/ano",
    credits: "1.200 créditos mensais",
    yearlyCredits: "14.400 créditos anuais",
    description: "Equipes até 15 pessoas",
    features: [
      { text: "Até 15 pessoas (avulsa R$ 47,90)", available: true, icon: Users2, highlight: true },
      { text: "Fluxo de avaliações dos corretores", available: true, icon: GitBranch, highlight: true },
      { text: "Funil de vendas dos corretores", available: true, icon: Target, highlight: true },
      { text: "Painel de captações diárias", available: true, icon: LayoutDashboard, highlight: true },
      { text: "Valor do imóvel", available: true, icon: Home },
      { text: "Valor do aluguel", available: true, icon: Building2 },
      { text: "Bate-papo com IA especializada", available: true, icon: MessageSquare },
      { text: "Histórico", available: true, icon: Clock },
      { text: "Noticiário imobiliário", available: true, icon: Newspaper },
      { text: "Grupo de Network (Donos de imobiliária)", available: true, icon: Users },
      { text: "Leitura de imagem na avaliação", available: true, comingSoon: true, icon: Image },
      { text: "Premiações por app utilizado", available: true, comingSoon: true, icon: Award },
      { text: "Suporte individualizado", available: true, icon: Headphones, highlight: true },
    ] as FeatureType[],
    cta: "Falar com vendas",
    variant: "outline" as const,
    popular: false,
    stripePlan: "imobiliaria",
    visibleFeatures: 5,
  },
];

function FeatureItem({ 
  feature, 
  isPopular 
}: { 
  feature: FeatureType; 
  isPopular: boolean;
}) {
  const IconComponent = feature.icon;
  const isHighlight = feature.highlight;
  
  return (
    <li className={`flex items-start gap-2 sm:gap-3 ${isHighlight ? "bg-accent/5 -mx-2 px-2 py-1.5 rounded-lg" : ""}`}>
      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
        isHighlight 
          ? "bg-accent text-accent-foreground" 
          : isPopular 
            ? "bg-accent text-accent-foreground" 
            : "bg-primary/10 text-primary"
      }`}>
        {IconComponent ? (
          <IconComponent className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        ) : (
          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        )}
      </div>
      <span className={`text-xs sm:text-sm flex items-center gap-1 min-w-0 ${
        isHighlight ? "text-foreground font-medium" : "text-muted-foreground"
      }`}>
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
  );
}

function PlanCard({ 
  plan, 
  index, 
  isYearly 
}: { 
  plan: typeof plans[0]; 
  index: number; 
  isYearly: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleFeatures = plan.features.slice(0, plan.visibleFeatures);
  const hiddenFeatures = plan.features.slice(plan.visibleFeatures);
  const hasMoreFeatures = hiddenFeatures.length > 0;

  return (
    <motion.div
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
            
            {(isYearly && plan.yearlyCredits ? plan.yearlyCredits : plan.credits) && (
              <p className="text-xs sm:text-sm text-primary font-medium">
                {isYearly && plan.yearlyCredits ? plan.yearlyCredits : plan.credits}
              </p>
            )}
          </div>

          <ul className="space-y-2 sm:space-y-3 mb-4">
            {visibleFeatures.map((feature, i) => (
              <FeatureItem key={i} feature={feature} isPopular={plan.popular} />
            ))}
          </ul>

          {hasMoreFeatures && (
            <div className="mb-4">
              {/* Preview das features ocultas */}
              {!isExpanded && (
                <div className="relative">
                  <div className="flex items-center gap-1 mb-2 opacity-40">
                    {hiddenFeatures.slice(0, 3).map((feature, i) => {
                      const IconComponent = feature.icon;
                      return (
                        <div 
                          key={i} 
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.popular ? "bg-accent/30" : "bg-primary/10"
                          }`}
                        >
                          {IconComponent && (
                            <IconComponent className={`w-2.5 h-2.5 ${plan.popular ? "text-accent" : "text-primary"}`} />
                          )}
                        </div>
                      );
                    })}
                    {hiddenFeatures.length > 3 && (
                      <span className="text-xs text-muted-foreground ml-1">
                        +{hiddenFeatures.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Features expandidas */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 sm:space-y-3 overflow-hidden"
                  >
                    {hiddenFeatures.map((feature, i) => (
                      <FeatureItem key={i} feature={feature} isPopular={plan.popular} />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Botão ver mais/menos */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full flex items-center justify-center gap-1.5 py-2 mt-2 text-xs font-medium rounded-lg transition-colors ${
                  plan.popular 
                    ? "text-accent hover:bg-accent/10" 
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {isExpanded ? (
                  <>
                    Ver menos <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    Ver mais ({hiddenFeatures.length}) <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}

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
  );
}

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
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-3">
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
            </div>
            <span className={`ml-3 px-2 py-0.5 bg-accent/20 text-accent text-xs font-semibold rounded-full transition-opacity ${isYearly ? "opacity-100" : "opacity-0"}`}>
              Economize até 15%
            </span>
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
            <PlanCard key={plan.name} plan={plan} index={index} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
