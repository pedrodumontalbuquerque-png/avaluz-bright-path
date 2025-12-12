import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-dark">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-light/10 via-transparent to-transparent blur-3xl" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern-animated opacity-30" />
        
        {/* Decorative Orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-light text-sm font-medium mb-6 border border-primary-light/20"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Avaliações com IA
              </span>
              <span className="w-1 h-1 rounded-full bg-primary-light/50" />
              <span>91% de Precisão</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-4">
              A <span className="text-gradient">Luz</span> do Mercado
              <br />
              Imobiliário
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground font-heading font-bold mb-6">
              Avaliações Imobiliárias que Iluminam
            </h2>

            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8">
              Descubra o valor real do seu imóvel em segundos. Nossa tecnologia de 
              Inteligência Artificial analisa milhares de dados do mercado para 
              entregar avaliações precisas e confiáveis.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="group text-base px-8 bg-gradient-to-r from-primary to-primary-light hover:shadow-glow transition-all duration-300" 
                data-payment-link
              >
                Simule uma Avaliação Agora
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-light/50 transition-all duration-300"
              >
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
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary-light/40 border-2 border-primary-dark flex items-center justify-center text-xs font-medium text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-primary-foreground/70">
                <span className="font-semibold text-primary-foreground">+3.400</span> profissionais
                <br />já confiam na AvaLuz
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative perspective-1000"
          >
            {/* Main Dashboard Card */}
            <div className="relative z-10 float">
              <div className="glass-card rounded-2xl overflow-hidden border-primary-light/20">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-primary-dark/50 border-b border-primary-light/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-primary-dark/50 rounded-md px-3 py-1.5 text-xs text-primary-foreground/50">
                      app.avaluz.com.br/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-card/90 to-primary-dark/50">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-primary-foreground/60">Valor Estimado</p>
                      <p className="text-3xl font-heading font-bold text-primary-foreground">R$ 485.000</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-primary-light/20 text-primary-light text-sm font-medium flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      Alta Precisão
                    </div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="h-32 flex items-end gap-2 mb-6">
                    {[40, 65, 45, 70, 55, 80, 60, 75, 85, 70, 90, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                        className="flex-1 bg-gradient-to-t from-primary to-primary-light/50 rounded-t-sm"
                      />
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass-dark rounded-lg p-3 text-center border border-primary-light/10">
                      <p className="text-xs text-primary-foreground/50">m²</p>
                      <p className="font-semibold text-primary-foreground">85</p>
                    </div>
                    <div className="glass-dark rounded-lg p-3 text-center border border-primary-light/10">
                      <p className="text-xs text-primary-foreground/50">Quartos</p>
                      <p className="font-semibold text-primary-foreground">3</p>
                    </div>
                    <div className="glass-dark rounded-lg p-3 text-center border border-primary-light/10">
                      <p className="text-xs text-primary-foreground/50">Confiança</p>
                      <p className="font-semibold text-primary-light">91%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-4 -left-8 glass-card rounded-xl p-4 border border-primary-light/20 float-delayed"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-foreground">Relatório Pronto!</p>
                    <p className="text-xs text-primary-foreground/50">Há 2 segundos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 border border-primary-light/20 float-slow"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary-light" />
                  <span className="text-sm font-medium text-primary-foreground">91% Confiança</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute top-1/3 -right-6 glass-card rounded-xl px-4 py-2 border border-primary-light/20 float"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-primary-foreground">Análise Instantânea</span>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary-light/10 to-transparent blur-3xl scale-150 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}