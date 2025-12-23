import { Facebook, Instagram, Linkedin, Twitter, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import avaluzLogo from "@/assets/avaluz-logo.png";
import garantiaImg from "@/assets/garantia-90-dias.png";
const footerLinks = {
  produto: [{
    label: "Como Funciona",
    href: "#como-funciona"
  }, {
    label: "Benefícios",
    href: "#beneficios"
  }, {
    label: "Planos",
    href: "#planos"
  }, {
    label: "FAQ",
    href: "#faq"
  }],
  empresa: [{
    label: "Sobre Nós",
    href: "#"
  }, {
    label: "Blog",
    href: "#"
  }, {
    label: "Contato",
    href: "#"
  }, {
    label: "Suporte",
    href: "#"
  }],
  legal: [{
    label: "Termos de Uso",
    href: "/termos",
    isRoute: true
  }, {
    label: "Privacidade",
    href: "/privacidade",
    isRoute: true
  }, {
    label: "LGPD",
    href: "/privacidade",
    isRoute: true
  }]
};
const socialLinks = [{
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}];
export function Footer() {
  return <footer className="bg-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-8 lg:mb-0">
            <a href="#" className="flex items-center mb-4 group">
              <img src={avaluzLogo} alt="AvaLuz" className="h-[60px] w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:opacity-80" />
            </a>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mb-2">
              A Luz do Mercado Imobiliário.
            </p>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
              Avaliações imobiliárias com dados reais, na velocidade da luz, para corretores que querem fechar mais vendas.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 group border border-primary-foreground/10">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary-foreground">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary-foreground">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.label}>
                  {link.isRoute ? <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                      {link.label}
                    </Link> : <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                      {link.label}
                    </a>}
                </li>)}
            </ul>
          </div>

          {/* Garantia 90 dias */}
          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end items-start">
            <img 
              src={garantiaImg} 
              alt="90 dias de garantia" 
              className="w-[168px] h-[168px] object-contain" 
            />
          </div>
        </div>
      </div>

      {/* LGPD Notice */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4">
          <p className="text-xs text-primary-foreground/40 text-center max-w-3xl mx-auto">
            Este site coleta dados para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
            <Link to="/privacidade" className="text-accent hover:underline">Política de Privacidade</Link>{" "}
            e com os{" "}
            <Link to="/termos" className="text-accent hover:underline">Termos de Uso</Link>.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} AvaLuz. Todos os direitos reservados.
          </p>
          
          {/* Security Badges */}
          
        </div>
      </div>
    </footer>;
}