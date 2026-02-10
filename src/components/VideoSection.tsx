import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import demoVideo from "@/assets/avaluz-demo.webm";

export function VideoSection() {
  return (
    <section id="videos" className="py-20 md:py-28 bg-[#0B1F33]" aria-labelledby="video-heading">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="video-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Veja a <span className="text-[#DF6009]">Avaliação Imobiliária</span> na Prática
          </h2>
          <div className="w-16 h-1 bg-[#DF6009] mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Demonstração de como gerar avaliação de imóvel, CMA e relatório em PDF com a AvaLuz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src={demoVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-8 sm:mt-10"
        >
          <Button
            size="lg"
            className="bg-[#DF6009] hover:bg-[#DF6009]/90 text-white px-6 sm:px-8 py-5 sm:py-6 h-auto group shadow-xl font-semibold"
            asChild
          >
            <a href="https://avaluz.app/auth/signin">
              Testar AvaLuz agora
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
