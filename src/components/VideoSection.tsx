import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const videos = [{
  id: 1,
  title: "Parte 01: Inserindo dados",
  description: "Veja como é rápido cadastrar um imóvel",
  duration: "1:30",
  thumbnail: null // Placeholder
}, {
  id: 2,
  title: "Parte 02: Comparativos (CMA)",
  description: "Entenda como funciona a análise de mercado",
  duration: "2:15",
  thumbnail: null
}, {
  id: 3,
  title: "Parte 03: PDF pronto para enviar",
  description: "Veja o relatório profissional que você recebe",
  duration: "1:45",
  thumbnail: null
}];
export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  
  return (
    <section className="py-20 md:py-28 bg-[#0B1F33]">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Veja como <span className="text-[#DF6009]">funciona</span>
          </h2>
          <div className="w-16 h-1 bg-[#DF6009] mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Microvídeos de 2 minutos que mostram tudo que você precisa saber.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <button
                onClick={() => setSelectedVideo(video)}
                className="w-full group"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#0A3F74] to-[#0B1F33] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                    <Clock className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{video.duration}</span>
                  </div>
                </div>
                <div className="mt-4 text-left">
                  <h3 className="font-semibold text-white group-hover:text-[#DF6009] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{video.description}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
            <p className="text-slate-400">Vídeo em breve</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}