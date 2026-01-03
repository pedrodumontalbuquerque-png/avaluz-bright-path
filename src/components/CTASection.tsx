import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-light/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
            Comece sua Avaliação Imobiliária <span className="text-accent">Agora</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Junte-se aos corretores que já usam AvaLuz para gerar estudo de mercado, CMA e relatórios em PDF.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 h-auto group shadow-2xl btn-glow-accent font-semibold w-full sm:w-auto min-h-[52px]"
              asChild
            >
              <a href="https://avaluz.app/auth/signin">
                Criar conta e começar grátis
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <p className="text-primary-foreground/60 text-xs sm:text-sm mt-4 sm:mt-6">
            Não é necessário cartão de crédito • 2 avaliações grátis
          </p>
        </motion.div>
      </div>
    </section>
  );
}
