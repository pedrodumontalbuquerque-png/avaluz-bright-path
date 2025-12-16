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
  return;
}