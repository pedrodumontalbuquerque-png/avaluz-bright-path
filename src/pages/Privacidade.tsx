import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | AvaLuz</title>
        <meta name="description" content="Política de Privacidade da plataforma AvaLuz - Avaliações Imobiliárias com IA" />
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
              Política de Privacidade
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  1. Coleta de Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A AvaLuz coleta as seguintes informações:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Dados de cadastro (nome, email, telefone)</li>
                  <li>Dados dos imóveis avaliados</li>
                  <li>Histórico de avaliações</li>
                  <li>Dados de uso da plataforma</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  2. Uso dos Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos seus dados para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Fornecer os serviços de avaliação imobiliária</li>
                  <li>Melhorar nossos algoritmos e serviços</li>
                  <li>Enviar comunicações relevantes sobre a plataforma</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  3. Proteção de Dados (LGPD)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantimos que seus dados são tratados com segurança e respeito à sua privacidade. Você tem direito a acessar, corrigir, excluir ou portar seus dados a qualquer momento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  4. Compartilhamento de Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário para prestação dos serviços (ex: processadores de pagamento) ou por exigência legal.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  5. Segurança
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança da informação para proteger seus dados contra acesso não autorizado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  6. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência na plataforma. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  7. Seus Direitos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conforme a LGPD, você tem direito a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar anonimização ou eliminação de dados</li>
                  <li>Revogar o consentimento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  8. Contato do Encarregado (DPO)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato: privacidade@avaluz.com.br
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

export default Privacidade;
