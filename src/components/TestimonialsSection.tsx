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
    avatar: null,
  },
  {
    id: 2,
    name: "Ana Martins",
    role: "Corretora Autônoma",
    city: "Rio de Janeiro, RJ",
    content: "O PDF profissional faz toda diferença. Transmite credibilidade e o cliente leva a sério minha avaliação.",
    result: "Mais credibilidade",
    avatar: null,
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Gestor Imobiliária",
    city: "Belo Horizonte, MG",
    content: "Adotamos para toda a equipe. Padronizou as avaliações e aumentou nossa produtividade.",
    result: "Equipe mais produtiva",
    avatar: null,
  },
  {
    id: 4,
    name: "Juliana Costa",
    role: "Corretora Premium",
    city: "Curitiba, PR",
    content: "O CMA com comparativos reais convence até os clientes mais exigentes. Ferramenta indispensável.",
    result: "Clientes convencidos",
    avatar: null,
  },
  {
    id: 5,
    name: "Fernando Santos",
    role: "Corretor",
    city: "Porto Alegre, RS",
    content: "Simples de usar e resultado profissional. Em minutos tenho tudo que preciso para a apresentação.",
    result: "Praticidade",
    avatar: null,
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
    <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            O que dizem os <span className="text-accent">corretores</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Profissionais que já estão usando AvaLuz no dia a dia
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate testimonials for infinite scroll */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[350px] md:w-[400px]"
          >
            <div className="h-full bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              
              {/* Content */}
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Star className="w-3 h-3" fill="currentColor" />
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary-light/40 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.role} • {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note about testimonials */}
      <div className="container mt-8">
        <p className="text-center text-sm text-primary-foreground/40 italic">
          Depoimentos ilustrativos. Casos reais em produção.
        </p>
      </div>
    </section>
  );
}
