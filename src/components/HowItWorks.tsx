import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

function CountUp({ 
  value, 
  prefix = "", 
  suffix = "",
  duration = 2,
  className = ""
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000) {
      return Math.round(latest).toLocaleString('pt-BR');
    }
    return latest.toFixed(2).replace('.', ',');
  });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [isInView, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const steps = [
  {
    number: "01",
    badge: "Inserindo dados",
    title: "Cadastre o Imóvel do Seu Jeito",
    description: "Digite o CEP, informe metragem, quartos e características. Rápido, intuitivo e sem perder tempo — exatamente como você precisa na correria do dia.",
    bullet: "Interface limpa, sem complicação",
    mockup: "form",
  },
  {
    number: "02",
    badge: "Análise de mercado",
    title: "CMA e Comparativos em Tempo Real",
    description: "Nossa análise cruza dados da região, preço por m², faixa de valor e imóveis similares. Você mostra números reais ao cliente — e ele confia mais.",
    bullet: "Dados atualizados, sem achismo",
    mockup: "cma",
  },
  {
    number: "03",
    badge: "Resultados",
    title: "Avaliação + Valor de Aluguel Instantâneo",
    description: "Em segundos, você tem o valor estimado do imóvel e o aluguel mensal. Tudo calculado com base em dados reais, pronto para apresentar.",
    bullet: "Precisão que gera confiança",
    mockup: "results",
  },
  {
    number: "04",
    badge: "Entrega",
    title: "PDF Profissional Pronto para Enviar",
    description: "Relatório completo com fotos, dados, CMA e resumo. Compartilhe direto com o cliente ou use na apresentação. Credibilidade garantida.",
    bullet: "Design impecável, seu nome em destaque",
    mockup: "pdf",
  },
];

function FormMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform perspective-1000 rotate-y-[-2deg]">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-500 font-medium">CEP</label>
            <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 text-sm text-gray-600">01310-100</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 font-medium">Tipo</label>
              <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 text-sm text-gray-600">Apartamento</div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium">Área (m²)</label>
              <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 text-sm text-gray-600">85</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-gray-500 font-medium">Quartos</label>
              <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 text-sm text-gray-600">3</div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium">Suítes</label>
              <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 text-sm text-gray-600">1</div>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium">Vagas</label>
              <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 text-sm text-gray-600">2</div>
            </div>
          </div>
          <div className="pt-2">
            <button className="w-full h-11 bg-primary rounded-lg text-white font-medium text-sm hover:bg-primary/90 transition-colors">
              Continuar →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CMAMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform perspective-1000 rotate-y-[2deg]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-800">Comparativos da Região</h4>
        <p className="text-xs text-gray-500">Jardins, São Paulo - SP</p>
      </div>
      <div className="space-y-3 mb-4">
        {[
          { label: "Mínimo", value: "R$ 5.200/m²", color: "bg-blue-100 text-blue-700" },
          { label: "Médio", value: "R$ 5.700/m²", color: "bg-primary/10 text-primary", highlight: true },
          { label: "Máximo", value: "R$ 6.100/m²", color: "bg-green-100 text-green-700" },
        ].map((item) => (
          <div
            key={item.label}
            className={`p-3 rounded-xl flex justify-between items-center ${item.color} ${item.highlight ? 'ring-2 ring-primary/30 shadow-lg' : ''}`}
          >
            <span className="text-sm font-medium">{item.label}</span>
            <span className="text-lg font-bold">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="h-20 bg-gray-50 rounded-xl flex items-center justify-center">
        <div className="flex items-end gap-2 h-12">
          {[40, 60, 80, 70, 55, 75, 65].map((h, i) => (
            <div
              key={i}
              className="w-4 bg-primary/60 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultsMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform perspective-1000 rotate-y-[-2deg]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="space-y-4">
        <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <p className="text-xs text-gray-500 mb-1">Valor Estimado</p>
          <p className="text-3xl font-bold text-primary">
            <CountUp value={485000} prefix="R$ " duration={2.5} />
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">Confiança Alta</span>
          </div>
        </div>
        <div className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
          <p className="text-xs text-gray-500 mb-1">Valor do Aluguel</p>
          <p className="text-3xl font-bold text-accent">
            <CountUp value={2800} prefix="R$ " duration={2} />
            <span className="text-lg font-normal text-gray-500">/mês</span>
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full font-medium">
              Rentabilidade: <CountUp value={0.58} suffix="%" duration={1.5} />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded-xl text-center">
            <p className="text-xs text-gray-500">Preço/m²</p>
            <p className="text-lg font-bold text-gray-800">
              <CountUp value={5706} prefix="R$ " duration={2} />
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl text-center">
            <p className="text-xs text-gray-500">Área</p>
            <p className="text-lg font-bold text-gray-800">85 m²</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PDFMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transform perspective-1000 rotate-y-[2deg]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">AV</span>
            </div>
            <span className="text-white font-semibold text-sm">Relatório AvaLuz</span>
          </div>
          <span className="text-white/70 text-xs">PDF</span>
        </div>
        <div className="p-4 space-y-3 bg-gray-50">
          <div className="h-16 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs text-gray-500">Foto do Imóvel</span>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 bg-primary/10 rounded flex items-center justify-center">
              <span className="text-xs text-primary font-medium">R$ 485.000</span>
            </div>
            <div className="h-8 bg-accent/10 rounded flex items-center justify-center">
              <span className="text-xs text-accent font-medium">R$ 2.800/mês</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button className="flex-1 h-10 bg-primary rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
          Baixar PDF
        </button>
        <button className="h-10 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors">
          Compartilhar
        </button>
      </div>
    </div>
  );
}

const mockupComponents: Record<string, React.FC> = {
  form: FormMockup,
  cma: CMAMockup,
  results: ResultsMockup,
  pdf: PDFMockup,
};

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-gradient-to-b from-primary-dark to-[#062a4f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Veja o <span className="text-accent">AvaLuz</span> em ação
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Do cadastro ao PDF pronto: transparência total em cada etapa
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => {
            const MockupComponent = mockupComponents[step.mockup];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Text Content */}
                <div className={`flex-1 lg:w-[40%] ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                    <span className="font-bold">{step.number}</span>
                    <span className="text-blue-400">•</span>
                    <span>{step.badge}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm font-medium">{step.bullet}</span>
                  </div>
                  
                  {index === 0 && (
                    <motion.a
                      href="#planos"
                      className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent/80 transition-colors font-medium group"
                      whileHover={{ x: 4 }}
                    >
                      Testar agora
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  )}
                </div>

                {/* Mockup */}
                <div className="flex-1 lg:w-[60%] flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75 opacity-50" />
                    <MockupComponent />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
