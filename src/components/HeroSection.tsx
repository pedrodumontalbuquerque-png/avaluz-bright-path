import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import demoVideo from "@/assets/avaluz-demo.webm";
import demoPoster from "@/assets/avaluz-capa.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-12 overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Light Glow - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-radial from-primary-light/20 via-transparent to-transparent blur-3xl" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary-foreground/20"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
              <span className="line-clamp-1">Relatórios em PDF + Estudo de Mercado (CMA) em minutos</span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-heading font-bold text-primary-foreground leading-[1.2] md:leading-[1.10] mb-4 sm:mb-6">
              AvaLuz: Avaliação Imobiliária em Segundos.{" "}
              <span className="text-accent">Estudo de Mercado Personalizado</span> para Corretores.
            </h1>

            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-3 sm:mb-4">
              Plataforma de avaliação de imóveis para corretores e imobiliárias. Receba avaliação, valor de aluguel, CMA (análise comparativa de mercado) e relatório profissional em PDF em segundos.
            </p>

            <p className="text-sm sm:text-base text-primary-foreground/60 italic max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
              "Na visita, tempo é dinheiro. Mostre o valor com dados e feche com confiança."
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group text-sm sm:text-base px-6 sm:px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold btn-glow-accent w-full sm:w-auto min-h-[48px]"
                asChild
              >
                <a href="https://avaluz.app/auth/signin">
                  Criar conta e começar grátis
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-6 sm:px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 group w-full sm:w-auto min-h-[48px]"
                asChild
              >
                <a href="#planos">
                  Ver planos
                  <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {/* Stacked Avatars */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-primary-dark overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face')] bg-cover bg-center" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-primary-dark overflow-hidden -ml-2 sm:-ml-3">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face')] bg-cover bg-center" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-primary-dark overflow-hidden -ml-2 sm:-ml-3">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face')] bg-cover bg-center" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-dark/80 border-2 border-primary-dark flex items-center justify-center -ml-2 sm:-ml-3">
                  <span className="text-[10px] sm:text-xs font-semibold text-primary-foreground">+3k</span>
                </div>
              </div>
              
              {/* Text */}
              <p className="text-xs sm:text-sm text-primary-foreground/70">
                profissionais confiam na <span className="text-accent font-medium">AvaLuz</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Platform Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative order-2 mt-4 lg:mt-0"
          >
            <div className="relative z-10 glass-card rounded-xl sm:rounded-2xl overflow-hidden border-primary-light/20 shadow-2xl">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-primary-dark/60 border-b border-primary-light/10">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 mx-2 sm:mx-4 min-w-0">
                  <div className="bg-primary-dark/50 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-primary-foreground/50 truncate">
                    app.avaluz.com.br/avaliacao
                  </div>
                </div>
              </div>
              <video
                src={demoVideo}
                controls
                poster={demoPoster}
                playsInline
                preload="metadata"
                aria-label="Demonstração da plataforma AvaLuz"
                className="w-full aspect-video object-cover bg-primary-dark"
              />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl scale-150 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
