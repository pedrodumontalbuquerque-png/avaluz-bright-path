import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const videos = [
  {
    id: 1,
    title: "Parte 01: Inserindo dados",
    description: "Veja como é rápido cadastrar um imóvel",
    duration: "1:30",
    thumbnail: null, // Placeholder
  },
  {
    id: 2,
    title: "Parte 02: Comparativos (CMA)",
    description: "Entenda como funciona a análise de mercado",
    duration: "2:15",
    thumbnail: null,
  },
  {
    id: 3,
    title: "Parte 03: PDF pronto para enviar",
    description: "Veja o relatório profissional que você recebe",
    duration: "1:45",
    thumbnail: null,
  },
];

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="videos" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Veja o app <span className="text-primary">por dentro</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rápido e direto: entenda como funciona em menos de 5 minutos
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary-light/10">
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
                      <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-foreground/80 text-background text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>

                  {/* Production badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-accent/90 text-accent-foreground text-xs font-medium">
                    Vídeo em produção
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Vídeo em produção</p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Em breve disponível
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
