import { useEffect, useRef, useState } from "react";
import { FileText, Zap, MessageSquare, History, BarChart3, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    icon: BarChart3,
    badge: "Core",
    title: "Estudo de Mercado Personalizado",
    description: "Relatório completo com análise da região, comparativos por m² e faixa de valor. Tudo adaptado ao imóvel e ao contexto do seu cliente.",
    className: "col-span-1 sm:col-span-2 md:col-span-4 md:row-span-2",
    animation: "bento-float",
  },
  {
    icon: FileText,
    badge: "Entrega",
    title: "PDF Profissional Personalizado",
    description: "Relatório pronto para enviar ao cliente, com dados, gráficos e sua marca em destaque.",
    className: "col-span-1 sm:col-span-1 md:col-span-2 md:row-span-1",
    animation: "bento-pulse",
  },
  {
    icon: Zap,
    badge: "Velocidade",
    title: "Avaliação em Segundos",
    description: "Valor estimado do imóvel calculado em poucos segundos, sem perder tempo com planilhas.",
    className: "col-span-1 sm:col-span-1 md:col-span-2 md:row-span-1",
    animation: "bento-tilt",
  },
  {
    icon: MessageSquare,
    badge: "Assistente",
    title: "Bate-papo com IA Especializada",
    description: "Converse com a Ava, uma IA treinada em avaliação imobiliária, para tirar dúvidas e refinar sua análise.",
    className: "col-span-1 sm:col-span-1 md:col-span-3 md:row-span-1",
    animation: "bento-drift",
  },
  {
    icon: History,
    badge: "Controle",
    title: "Histórico de Avaliações",
    description: "Acompanhe todas as avaliações que já fez e a evolução de preços ao longo do tempo.",
    className: "col-span-1 sm:col-span-1 md:col-span-3 md:row-span-1",
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
        "group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 transition-all duration-500",
        "shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1",
        isLarge 
          ? "border-2 border-blue-200 bg-gradient-to-br from-blue-50/40 via-white to-white" 
          : "border border-slate-200",
        feature.className,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(ellipse 60% 120% at 12% 0%, rgba(10,63,116,0.12), transparent 72%)'
        }}
      />
      
      {/* Animated background element */}
      <div 
        className={cn(
          "absolute -right-8 -top-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 blur-2xl transition-transform duration-700",
          feature.animation === "bento-float" && "group-hover:translate-y-2 group-hover:translate-x-2",
          feature.animation === "bento-pulse" && "group-hover:scale-110",
          feature.animation === "bento-tilt" && "group-hover:rotate-12",
          feature.animation === "bento-drift" && "group-hover:-translate-x-4",
          feature.animation === "bento-glow" && "group-hover:opacity-150 group-hover:blur-3xl"
        )}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Badge */}
        <span className="inline-flex w-fit items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-blue-50 border border-blue-200 text-blue-700 mb-3 sm:mb-4">
          {feature.badge}
        </span>

        {/* Icon */}
        <div className={cn(
          "rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm",
          isLarge ? "w-12 h-12 sm:w-16 sm:h-16" : "w-10 h-10 sm:w-12 sm:h-12"
        )}>
          <Icon className={cn("text-blue-900", isLarge ? "w-6 h-6 sm:w-8 sm:h-8" : "w-5 h-5 sm:w-6 sm:h-6")} />
        </div>

        {/* Content */}
        <h3 className={cn(
          "font-heading font-bold text-slate-900 mb-1.5 sm:mb-2 transition-colors",
          isLarge ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg"
        )}>
          {feature.title}
        </h3>
        <p className={cn(
          "text-slate-700 leading-normal",
          isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm"
        )}>
          {feature.description}
        </p>

        {/* Large card extra visual */}
        {isLarge && (
          <div className="mt-auto pt-4 sm:pt-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs text-slate-600 font-medium">+3k profissionais usando</span>
            </div>
          </div>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-tl-full opacity-60" />
    </div>
  );
}

export function BentoAvaluz() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden" aria-labelledby="benefits-heading">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Estudo de Mercado e CMA: <span className="text-primary">O que você recebe</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ferramentas completas de avaliação imobiliária para fechar mais vendas com credibilidade
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 auto-rows-[minmax(160px,auto)] sm:auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 h-auto group shadow-xl btn-glow font-semibold"
            asChild
          >
            <a href="https://avaluz.app/auth/signin">
              Acessar todas as funcionalidades
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
