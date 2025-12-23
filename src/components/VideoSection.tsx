import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="videos" className="py-20 md:py-28 bg-[#0B1F33]">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Veja como <span className="text-[#DF6009]">funciona</span>
          </h2>
          <div className="w-16 h-1 bg-[#DF6009] mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Assista ao Henrique explicando a AvaLuz na prática.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <button
            onClick={() => setIsVideoOpen(true)}
            className="w-full group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-[#0A3F74] to-[#0B1F33] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/10">
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A3F74]/80 via-[#0B1F33] to-[#0A3F74]/60" />
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#DF6009]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0A3F74]/40 rounded-full blur-3xl" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 border border-white/20">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-left">
                <span className="text-xs uppercase tracking-wider text-white/60 font-medium">Demonstração</span>
                <h3 className="text-lg md:text-xl font-semibold text-white mt-1">AvaLuz na prática</h3>
              </div>
            </div>
          </button>
        </motion.div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>AvaLuz na prática</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
            <p className="text-slate-400">Vídeo em breve</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
