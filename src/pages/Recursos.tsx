import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, BarChart3, Home, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "avaliacao-de-imovel",
    title: "Avaliação de Imóvel: Guia Completo para Corretores",
    description: "Aprenda como fazer avaliação de imóvel profissional, os métodos mais usados e como justificar o preço para seu cliente.",
    icon: Home,
    status: "soon",
    readTime: "8 min",
  },
  {
    slug: "como-precificar-um-imovel",
    title: "Como Precificar um Imóvel Corretamente em 2025",
    description: "Descubra as melhores práticas para precificação de imóveis: análise de mercado, comparativos e fatores que influenciam o valor.",
    icon: BarChart3,
    status: "soon",
    readTime: "10 min",
  },
  {
    slug: "o-que-e-cma",
    title: "O que é CMA (Análise Comparativa de Mercado)?",
    description: "Entenda o que é CMA, como funciona e por que é essencial para corretores que querem fechar mais vendas com credibilidade.",
    icon: FileText,
    status: "soon",
    readTime: "6 min",
  },
  {
    slug: "relatorio-avaliacao-imobiliaria-pdf",
    title: "Relatório de Avaliação Imobiliária em PDF: Por que é Importante?",
    description: "Saiba como um relatório profissional em PDF pode aumentar sua credibilidade e ajudar a fechar vendas mais rápido.",
    icon: BookOpen,
    status: "soon",
    readTime: "5 min",
  },
];

export default function Recursos() {
  return (
    <>
      <Helmet>
        <title>Recursos e Blog | AvaLuz - Avaliação Imobiliária</title>
        <meta 
          name="description" 
          content="Artigos, guias e recursos sobre avaliação imobiliária, CMA, precificação de imóveis e relatórios profissionais. Conteúdo para corretores e imobiliárias." 
        />
        <meta name="keywords" content="blog imobiliário, avaliação de imóvel, como precificar imóvel, o que é CMA, relatório de avaliação, dicas para corretores" />
        <link rel="canonical" href="https://avaluz.com.br/recursos" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                Recursos AvaLuz
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Aprenda sobre <span className="text-primary">Avaliação Imobiliária</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guias, artigos e dicas para corretores que querem dominar avaliação de imóveis, CMA e precificação.
              </p>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  {article.status === "soon" && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Em breve
                    </span>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <article.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {article.readTime} de leitura
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  
                  {article.status === "soon" ? (
                    <span className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                      Publicação em breve
                    </span>
                  ) : (
                    <Link 
                      to={`/recursos/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      Ler artigo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.article>
              ))}
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground mb-3">
                Quer receber novos conteúdos?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
                Avisaremos quando publicarmos novos artigos sobre avaliação imobiliária, CMA e dicas para corretores.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                asChild
              >
                <a href="https://avaluz.app/auth/signin">
                  Criar conta grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}