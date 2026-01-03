import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import avaluzLogo from "@/assets/avaluz-logo.png";

const footerLinks = {
  produto: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ],
  recursos: [
    { label: "Avaliação de Imóvel", href: "/recursos", isRoute: true },
    { label: "O que é CMA", href: "/recursos", isRoute: true },
    { label: "Precificação de Imóveis", href: "/recursos", isRoute: true },
    { label: "Relatório em PDF", href: "/recursos", isRoute: true },
  ],
  empresa: [
    { label: "Contato", href: "/contato", isRoute: true },
    { label: "Recursos e Blog", href: "/recursos", isRoute: true },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos", isRoute: true },
    { label: "Privacidade", href: "/privacidade", isRoute: true },
    { label: "LGPD", href: "/privacidade", isRoute: true },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container py-10 sm:py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 mb-4 lg:mb-0">
            <a href="/" className="flex items-center mb-4 group" aria-label="AvaLuz - Ir para página inicial">
              <img 
                src={avaluzLogo} 
                alt="AvaLuz - Plataforma de Avaliação Imobiliária" 
                className="h-12 sm:h-[60px] w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:opacity-80" 
              />
            </a>
            <p className="text-primary-foreground/60 text-xs sm:text-sm leading-relaxed max-w-xs mb-2">
              <strong>AvaLuz</strong> é a luz do mercado imobiliário.
            </p>
            <p className="text-primary-foreground/50 text-xs sm:text-sm leading-relaxed max-w-xs">
              Avaliação imobiliária, estudo de mercado (CMA) e relatório em PDF para corretores.
            </p>
            
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`AvaLuz no ${social.label}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 group border border-primary-foreground/10"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Produto */}
          <nav aria-label="Links do Produto">
            <h4 className="font-heading font-semibold mb-3 sm:mb-4 text-primary-foreground text-sm sm:text-base">Produto</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Recursos */}
          <nav aria-label="Links de Recursos">
            <h4 className="font-heading font-semibold mb-3 sm:mb-4 text-primary-foreground text-sm sm:text-base">Recursos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Links da Empresa">
            <h4 className="font-heading font-semibold mb-3 sm:mb-4 text-primary-foreground text-sm sm:text-base">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Links Legais">
            <h4 className="font-heading font-semibold mb-3 sm:mb-4 text-primary-foreground text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-xs sm:text-sm text-primary-foreground/60 hover:text-accent transition-colors py-1 inline-block">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-3 sm:py-4">
          <p className="text-[10px] sm:text-xs text-primary-foreground/40 text-center max-w-3xl mx-auto px-4">
            Este site coleta dados para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
            <Link to="/privacidade" className="text-accent hover:underline">Política de Privacidade</Link>{" "}
            e com os{" "}
            <Link to="/termos" className="text-accent hover:underline">Termos de Uso</Link>.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-xs sm:text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} AvaLuz - Avaliação Imobiliária. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
