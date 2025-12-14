import { motion } from "framer-motion";
import { 
  Home, 
  DollarSign, 
  BarChart3, 
  FileText, 
  History, 
  MessageSquare, 
  Image, 
  Newspaper,
  Check
} from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Avaliação automatizada do imóvel",
    description: "Valor de mercado calculado com dados reais da região.",
    available: true,
  },
  {
    icon: DollarSign,
    title: "Valor de aluguel",
    description: "Estimativa de aluguel mensal baseada em comparativos.",
    available: true,
  },
  {
    icon: BarChart3,
    title: "CMA / Comparativos",
    description: "Preço por m², faixa de valor e imóveis similares na região.",
    available: true,
  },
  {
    icon: FileText,
    title: "PDF profissional personalizado",
    description: "Relatório completo com dados, fotos e resumo para enviar ao cliente.",
    available: true,
  },
  {
    icon: History,
    title: "Histórico de avaliações",
    description: "Acesse todas as suas avaliações anteriores quando precisar.",
    available: true,
  },
  {
    icon: MessageSquare,
    title: "Bate-papo sobre o imóvel",
    description: "Assistente que te ajuda a argumentar melhor com o cliente.",
    available: true,
    plan: "Profissional",
  },
  {
    icon: Image,
    title: "Leitura de imagem na avaliação",
    description: "Análise inteligente das fotos do imóvel para avaliação mais precisa.",
    available: false,
  },
  {
    icon: Newspaper,
    title: "Noticiário do mercado e networking",
    description: "Fique por dentro das novidades e conecte-se com outros profissionais.",
    available: false,
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/15 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            O que você <span className="text-accent">recebe</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Tudo que você precisa para fechar mais vendas com credibilidade
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="relative h-full bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300 hover:-translate-y-1">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {benefit.available ? (
                    benefit.plan ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary-light/20 text-primary-light border border-primary-light/30">
                        {benefit.plan}
                      </span>
                    ) : (
                      <span className="badge-available">
                        <Check className="w-3 h-3 mr-1" />
                        Disponível
                      </span>
                    )
                  ) : (
                    <span className="badge-coming-soon">Em breve</span>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  benefit.available 
                    ? 'bg-primary-light/20 text-primary-light' 
                    : 'bg-primary-foreground/10 text-primary-foreground/50'
                }`}>
                  <benefit.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-heading font-semibold mb-2 ${
                  benefit.available ? 'text-primary-foreground' : 'text-primary-foreground/60'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  benefit.available ? 'text-primary-foreground/70' : 'text-primary-foreground/50'
                }`}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
