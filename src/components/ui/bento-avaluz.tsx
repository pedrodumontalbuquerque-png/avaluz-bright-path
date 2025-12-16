import { useEffect, useRef, useState } from "react";
import { Home, DollarSign, BarChart3, FileText, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  className: string;
  animation: string;
}

const features: Feature[] = [
  {
    icon: Home,
    badge: "Core",
    title: "Avaliação Automatizada do Imóvel",
    description: "Valor de mercado calculado com dados reais da região. IA cruza comparativos e entrega o preço justo em segundos, sem achismo.",
    className: "md:col-span-4 md:row-span-2",
    animation: "bento-float",
  },
  {
    icon: DollarSign,
    badge: "Aluguel",
    title: "Valor de Aluguel",
    description: "Estimativa mensal de aluguel baseada em comparativos da região. Ideal para proprietários e investidores.",
    className: "md:col-span-2 md:row-span-1",
    animation: "bento-pulse",
  },
  {
    icon: BarChart3,
    badge: "Dados",
    title: "CMA / Comparativos",
    description: "Preço por m², faixa de valor e imóveis similares. Mostre números reais e ganhe autoridade na negociação.",
    className: "md:col-span-2 md:row-span-1",
    animation: "bento-tilt",
  },
  {
    icon: FileText,
    badge: "Entrega",
    title: "PDF Profissional Personalizado",
    description: "Relatório completo com dados, fotos e resumo. Compartilhe com o cliente e aumente sua credibilidade.",
    className: "md:col-span-3 md:row-span-1",
    animation: "bento-drift",
  },
  {
    icon: Clock,
    badge: "Controle",
    title: "Histórico de Avaliações",
    description: "Acesse todas as suas avaliações anteriores. Acompanhe evolução de preços e compare períodos.",
    className: "md:col-span-3 md:row-span-1",
    animation: "bento-glow",
  },
];

function BentoCard({ feature, index }: { feature: Feature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;
  const isLarge = feature.className.includes("row-span-2");

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-background to-muted/30 p-6 transition-all duration-500",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
        feature.className,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background element */}
      <div 
        className={cn(
          "absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl transition-transform duration-700",
          feature.animation === "bento-float" && "group-hover:translate-y-2 group-hover:translate-x-2",
          feature.animation === "bento-pulse" && "group-hover:scale-110",
          feature.animation === "bento-tilt" && "group-hover:rotate-12",
          feature.animation === "bento-drift" && "group-hover:-translate-x-4",
          feature.animation === "bento-glow" && "group-hover:opacity-150 group-hover:blur-3xl"
        )}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Badge */}
        <span className="inline-flex w-fit items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          {feature.badge}
        </span>

        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
          isLarge && "w-16 h-16"
        )}>
          <Icon className={cn("text-primary", isLarge ? "w-8 h-8" : "w-6 h-6")} />
        </div>

        {/* Content */}
        <h3 className={cn(
          "font-heading font-semibold text-foreground mb-2 transition-colors",
          isLarge ? "text-xl md:text-2xl" : "text-lg"
        )}>
          {feature.title}
        </h3>
        <p className={cn(
          "text-muted-foreground leading-relaxed",
          isLarge ? "text-base" : "text-sm"
        )}>
          {feature.description}
        </p>

        {/* Large card extra visual */}
        {isLarge && (
          <div className="mt-auto pt-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">+3k profissionais usando</span>
            </div>
          </div>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full opacity-50" />
    </div>
  );
}

export function BentoAvaluz() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            O que você <span className="text-primary">recebe</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para fechar mais vendas com credibilidade
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
