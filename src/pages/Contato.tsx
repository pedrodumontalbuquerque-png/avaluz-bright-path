import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contato | AvaLuz - Avaliação Imobiliária</title>
        <meta 
          name="description" 
          content="Entre em contato com a AvaLuz. Tire dúvidas sobre avaliação imobiliária, estudo de mercado (CMA) e relatórios em PDF para corretores." 
        />
        <link rel="canonical" href="https://avaluz.com.br/contato" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Fale com a <span className="text-primary">AvaLuz</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dúvidas sobre avaliação imobiliária, CMA ou a plataforma? Nossa equipe está pronta para ajudar.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground text-sm mb-2">Para dúvidas gerais e suporte</p>
                      <a href="mailto:contato@avaluz.com.br" className="text-primary hover:underline font-medium">
                        contato@avaluz.com.br
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Chat com a AVA</h3>
                      <p className="text-muted-foreground text-sm mb-2">Assistente de avaliação imobiliária</p>
                      <p className="text-sm text-muted-foreground">Disponível dentro da plataforma para clientes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground text-sm">
                        Segunda a Sexta: 9h às 18h<br />
                        Tempo médio de resposta: 24h úteis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">AvaLuz para Imobiliárias</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Precisa de um plano personalizado para sua equipe? Oferecemos condições especiais para imobiliárias.
                  </p>
                  <a 
                    href="mailto:comercial@avaluz.com.br" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group"
                  >
                    comercial@avaluz.com.br
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nome completo</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      type="text" 
                      required 
                      placeholder="Seu nome"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">E-mail</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="seu@email.com"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Assunto</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      type="text" 
                      required 
                      placeholder="Ex: Dúvida sobre avaliação imobiliária"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Descreva sua dúvida ou sugestão..."
                      className="mt-1.5 min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você concorda com nossa{" "}
                    <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}