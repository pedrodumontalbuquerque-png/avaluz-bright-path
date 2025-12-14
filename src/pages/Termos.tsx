import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Termos = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | AvaLuz</title>
        <meta name="description" content="Termos de Uso da plataforma AvaLuz - Avaliações Imobiliárias com IA" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container max-w-4xl">
            <Link to="/">
              <Button variant="ghost" className="mb-8 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>

            <h1 className="text-4xl font-heading font-bold text-foreground mb-8">
              Termos de Uso
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar a plataforma AvaLuz, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  2. Descrição do Serviço
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  AvaLuz é uma plataforma de avaliações imobiliárias que utiliza tecnologia para fornecer estimativas de valor de imóveis, análises comparativas de mercado (CMA) e relatórios profissionais em formato PDF.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  3. Uso da Plataforma
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda em:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Fornecer informações precisas e verdadeiras</li>
                  <li>Manter a confidencialidade de sua conta</li>
                  <li>Não usar a plataforma para fins ilegais</li>
                  <li>Não compartilhar sua conta com terceiros</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  4. Limitação de Responsabilidade
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As avaliações fornecidas pela AvaLuz são estimativas baseadas em dados de mercado e não constituem laudos oficiais de avaliação. A AvaLuz não se responsabiliza por decisões tomadas com base nas informações fornecidas pela plataforma.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  5. Pagamentos e Cancelamentos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Os planos pagos são cobrados mensalmente. Você pode cancelar sua assinatura a qualquer momento, mantendo acesso até o fim do período pago. Não há multas por cancelamento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  6. Contato
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas sobre estes termos, entre em contato pelo email: contato@avaluz.com.br
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Termos;
