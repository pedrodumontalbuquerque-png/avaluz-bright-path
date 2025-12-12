import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Avaliações com IA • 91% de Precisão
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4">
              A <span className="text-gradient">Luz</span> do Mercado
              <br />
              Imobiliário
            </h1>

            <h2 className="text-xl sm:text-2xl text-primary font-heading font-semibold mb-6">
              Avaliações Imobiliárias que Iluminam
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Descubra o valor real do seu imóvel em segundos. Nossa tecnologia de 
              Inteligência Artificial analisa milhares de dados do mercado para 
              entregar avaliações precisas e confiáveis.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group text-base px-8" data-payment-link>
                Simule uma Avaliação Agora
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                <Play className="mr-2 w-5 h-5" />
                Ver Planos
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+3.400</span> profissionais
                <br />já confiam na AvaLuz
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground">
                      app.avaluz.com.br/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-card to-muted">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Valor Estimado</p>
                      <p className="text-3xl font-heading font-bold text-foreground">R$ 485.000</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Alta Precisão
                    </div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="h-32 flex items-end gap-2 mb-6">
                    {[40, 65, 45, 70, 55, 80, 60, 75, 85, 70, 90, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/20 rounded-t-sm transition-all hover:bg-primary/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-background rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground">m²</p>
                      <p className="font-semibold text-foreground">85</p>
                    </div>
                    <div className="bg-background rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground">Quartos</p>
                      <p className="font-semibold text-foreground">3</p>
                    </div>
                    <div className="bg-background rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground">Confiança</p>
                      <p className="font-semibold text-primary">91%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl border border-border p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Relatório Pronto!</p>
                    <p className="text-xs text-muted-foreground">Há 2 segundos</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
