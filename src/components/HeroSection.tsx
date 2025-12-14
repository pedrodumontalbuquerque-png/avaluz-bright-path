import { motion } from "framer-motion";
import { ArrowRight, FileText, Play, Home, DollarSign, BarChart3, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Light Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-light/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Relatórios em PDF + Estudo de Mercado (CMA) em minutos</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-heading font-bold text-primary-foreground leading-tight mb-6">
              Na visita, tempo é dinheiro.{" "}
              <span className="text-accent">Mostre o valor com dados</span>, e feche com confiança.
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-4">
              AvaLuz gera avaliação do imóvel, valor de aluguel, comparativos da região e um PDF profissional pronto para enviar ao cliente.
            </p>

            <p className="text-base text-primary-foreground/60 italic max-w-lg mx-auto lg:mx-0 mb-8">
              "Você já chutou um preço e viu o cliente travar? Com AvaLuz, você prova o valor com estudo de mercado."
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
                className="group text-base px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold btn-glow-accent" 
              >
                Criar conta e começar grátis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver microvídeos do app
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              {/* Stacked Avatars */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-primary-dark overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-primary-dark overflow-hidden -ml-3">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-primary-dark overflow-hidden -ml-3">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face')] bg-cover bg-center" />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-dark/80 border-2 border-primary-dark flex items-center justify-center -ml-3">
                  <span className="text-xs font-semibold text-primary-foreground">+3k</span>
                </div>
              </div>
              
              {/* Text */}
              <p className="text-sm text-primary-foreground/70">
                profissionais confiam na <span className="text-accent font-medium">AvaLuz</span>
              </p>
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
                <div className="flex items-center gap-2 px-4 py-3 bg-primary-dark/60 border-b border-primary-light/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-primary-dark/50 rounded-md px-3 py-1.5 text-xs text-primary-foreground/50">
                      app.avaluz.com.br/avaliacao
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-card/95 to-primary-dark/60">
                  {/* Cards Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary-dark/40 rounded-xl p-4 border border-primary-light/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="w-4 h-4 text-primary-light" />
                        <span className="text-xs text-primary-foreground/60">Valor Estimado</span>
                      </div>
                      <p className="text-xl font-heading font-bold text-primary-foreground">R$ 485.000</p>
                    </div>
                    <div className="bg-primary-dark/40 rounded-xl p-4 border border-primary-light/10">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-accent" />
                        <span className="text-xs text-primary-foreground/60">Valor do Aluguel</span>
                      </div>
                      <p className="text-xl font-heading font-bold text-primary-foreground">R$ 2.800/mês</p>
                    </div>
                  </div>

                  {/* CMA Section */}
                  <div className="bg-primary-dark/40 rounded-xl p-4 border border-primary-light/10 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-4 h-4 text-primary-light" />
                      <span className="text-sm font-medium text-primary-foreground">CMA: Comparativos por m²</span>
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      {[65, 85, 70, 95, 80, 90, 75].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                          className={`flex-1 rounded-t ${i === 3 ? 'bg-accent' : 'bg-primary-light/60'}`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-primary-foreground/50 mt-2">
                      <span>R$ 5.200/m²</span>
                      <span>R$ 5.700/m²</span>
                      <span>R$ 6.100/m²</span>
                    </div>
                  </div>

                  {/* PDF Status */}
                  <div className="flex items-center justify-between bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium text-primary-foreground">PDF Gerado</span>
                    </div>
                    <span className="text-xs text-green-400 font-medium">Pronto para envio</span>
                  </div>
                </div>
              </div>

              {/* Floating Toast Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 border border-primary-light/20 float-delayed"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary-foreground">Relatório pronto!</p>
                    <p className="text-[10px] text-primary-foreground/50">Há 2 segundos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute -top-2 -right-2 glass-card rounded-xl px-3 py-2 border border-primary-light/20 float-slow"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-primary-foreground">CMA atualizado</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                className="absolute top-1/2 -right-6 glass-card rounded-xl px-3 py-2 border border-primary-light/20 float"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary-light" />
                  <span className="text-xs font-medium text-primary-foreground">PDF exportado</span>
                </div>
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl scale-150 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
