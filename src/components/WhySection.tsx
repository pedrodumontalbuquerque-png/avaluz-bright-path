import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ShieldCheck, Clock, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: 1,
    icon: HelpCircle,
    question: "Isso é complicado de usar?",
    title: "Não é complicado. É 3 passos e pronto.",
    answer: "Você informa os dados do imóvel, vê o CMA e baixa o PDF profissional. Sem planilhas, sem achismo, sem enrolação.",
    checks: ["Gera confiança na visita", "Economiza tempo no dia a dia"],
  },
  {
    id: 2,
    icon: ShieldCheck,
    question: "Meu cliente vai confiar nesses números?",
    title: "CMA com dados reais da região.",
    answer: "Comparativos por m², faixa de valor e imóveis similares. O cliente vê números de mercado, não opiniões.",
    checks: ["Gera confiança na visita", "Economiza tempo no dia a dia"],
  },
  {
    id: 3,
    icon: Clock,
    question: "Vou perder tempo aprendendo?",
    title: "Sem curva de aprendizado. Use agora.",
    answer: "Interface intuitiva: preenche, clica e pronto. Seu primeiro PDF sai em menos de 5 minutos.",
    checks: ["Gera confiança na visita", "Economiza tempo no dia a dia"],
  },
];

export function WhySection() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const activeData = questions[activeQuestion];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-3 sm:mb-4">
            Por que o corretor <span className="text-[#DF6009]">precisa</span> disso?
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#0A3F74] mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            As dúvidas que travam sua decisão — respondidas em segundos.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Coluna Esquerda - Perguntas */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-3">
            {questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setActiveQuestion(index)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 relative min-h-[56px] sm:min-h-[64px] ${
                  activeQuestion === index
                    ? "border-2 border-[#0A3F74] bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-[#0A3F74] hover:bg-blue-50/30 shadow-sm"
                }`}
              >
                {activeQuestion === index && (
                  <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 w-2 h-2 rounded-full bg-[#DF6009]" />
                )}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <q.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A3F74]" />
                  </div>
                  <span className="font-semibold text-slate-900 text-sm sm:text-base pr-4">{q.question}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Coluna Direita - Painel de Resposta */}
          <div className="lg:col-span-8">
            <div className="border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg min-h-[380px] sm:min-h-[420px] bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Topo */}
                  <div className="mb-4 sm:mb-6">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-medium">
                      RESPOSTA CURTA
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-1.5 sm:mt-2 mb-2 sm:mb-3">
                      {activeData.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {activeData.answer}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 my-4 sm:my-6" />

                  {/* Mockup do Produto */}
                  <div className="bg-gradient-to-br from-blue-50/80 via-white to-slate-50/50 rounded-lg sm:rounded-xl border border-slate-200 overflow-hidden">
                    {/* Header do Mockup */}
                    <div className="bg-[#0B1F33] px-3 sm:px-4 py-2 flex items-center gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-white/70">AvaLuz - Avaliação</span>
                    </div>

                    {/* Conteúdo do Mockup */}
                    <div className="p-3 sm:p-5 md:p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {/* Valor Estimado */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-100 shadow-sm">
                          <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Valor Estimado</span>
                          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A3F74] mt-1">R$ 485.000</p>
                        </div>

                        {/* Métrica CMA */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-100 shadow-sm">
                          <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide">Métrica CMA</span>
                          <div className="flex justify-between mt-2 text-xs sm:text-sm">
                            <div className="text-center">
                              <span className="text-slate-400 text-[10px] sm:text-xs">Mín</span>
                              <p className="font-semibold text-slate-700">R$ 420k</p>
                            </div>
                            <div className="text-center">
                              <span className="text-slate-400 text-[10px] sm:text-xs">Med</span>
                              <p className="font-semibold text-[#0A3F74]">R$ 485k</p>
                            </div>
                            <div className="text-center">
                              <span className="text-slate-400 text-[10px] sm:text-xs">Máx</span>
                              <p className="font-semibold text-slate-700">R$ 550k</p>
                            </div>
                          </div>
                        </div>

                        {/* Botão PDF */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-100 shadow-sm flex flex-col justify-center">
                          <Button className="bg-[#0A3F74] hover:bg-[#0A3F74]/90 text-white w-full min-h-[40px] sm:min-h-[44px]">
                            <FileText className="w-4 h-4 mr-2" />
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer do Painel */}
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6">
                      {activeData.checks.map((check, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A3F74] flex-shrink-0" />
                          <span className="text-slate-700 text-xs sm:text-sm">{check}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-[#0A3F74] hover:bg-[#0A3F74]/90 text-white w-full sm:w-auto min-h-[44px]" asChild>
                      <a href="https://avaluz.app/auth/signin">Começar grátis</a>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer da Seção */}
        <p className="text-center text-slate-500 text-xs sm:text-sm mt-8 sm:mt-12">
          Sem cartão. 2 avaliações grátis.
        </p>
      </div>
    </section>
  );
}
