import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Corretor de Imóveis",
    city: "São Paulo, SP",
    content: "Antes eu perdia tempo pesquisando preços. Agora chego na visita já com o relatório pronto. Os clientes ficam impressionados.",
    result: "Fechando mais negócios",
  },
  {
    id: 2,
    name: "Ana Martins",
    role: "Corretora Autônoma",
    city: "Rio de Janeiro, RJ",
    content: "O PDF profissional faz toda diferença. Transmite credibilidade e o cliente leva a sério minha avaliação.",
    result: "Mais credibilidade",
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Gestor Imobiliária",
    city: "Belo Horizonte, MG",
    content: "Adotamos para toda a equipe. Padronizou as avaliações e aumentou nossa produtividade.",
    result: "Equipe mais produtiva",
  },
  {
    id: 4,
    name: "Juliana Costa",
    role: "Corretora Premium",
    city: "Curitiba, PR",
    content: "O CMA com comparativos reais convence até os clientes mais exigentes. Ferramenta indispensável.",
    result: "Clientes convencidos",
  },
  {
    id: 5,
    name: "Fernando Santos",
    role: "Corretor",
    city: "Porto Alegre, RS",
    content: "Simples de usar e resultado profissional. Em minutos tenho tudo que preciso para a apresentação.",
    result: "Praticidade",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += speed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-primary-dark relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container relative z-10 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
            Corretores que Usam <span className="text-accent">AvaLuz</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-primary-foreground/70 max-w-2xl mx-auto px-4">
            Profissionais que já estão usando AvaLuz no dia a dia
          </p>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-hidden cursor-grab px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
          >
            <div className="h-full bg-card/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/50 mb-3 sm:mb-4" />
              
              <p className="text-primary-foreground/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              <div className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Star className="w-3 h-3" fill="currentColor" />
                {testimonial.result}
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary-light/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-base sm:text-lg font-semibold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-primary-foreground text-sm sm:text-base truncate">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-primary-foreground/60 truncate">
                    {testimonial.role} • {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mt-6 sm:mt-8">
        <p className="text-center text-xs sm:text-sm text-primary-foreground/40 italic">
          Depoimentos ilustrativos. Casos reais em produção.
        </p>
      </div>
    </section>
  );
}
