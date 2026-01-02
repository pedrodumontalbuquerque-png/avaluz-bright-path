import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import avaluzLogo from "@/assets/avaluz-logo.png";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "O que você recebe", href: "#beneficios" },
  { label: "Microvídeos", href: "#videos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary-dark/90 backdrop-blur-xl border-b border-primary-light/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img 
              src={avaluzLogo} 
              alt="AvaLuz - A Luz do Mercado Imobiliário" 
              className="h-10 sm:h-[48px] md:h-[52px] lg:h-[58px] w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:opacity-80"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="https://avaluz.app/auth/signin">Login</a>
            </Button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold btn-glow-accent"
              asChild
            >
              <a href="https://avaluz.app/auth/signin">Criar conta</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary-dark/95 backdrop-blur-xl border-b border-primary-light/10 max-h-[calc(100vh-56px)] overflow-y-auto"
          >
            <nav className="container py-4 sm:py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors py-3 px-2 rounded-lg hover:bg-primary-foreground/5 min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-primary-foreground/10">
                <Button 
                  variant="ghost" 
                  className="justify-center text-primary-foreground/70 hover:text-primary-foreground w-full min-h-[44px]"
                  asChild
                >
                  <a href="https://avaluz.app/auth/signin">Login</a>
                </Button>
                <Button 
                  className="justify-center bg-accent hover:bg-accent/90 text-accent-foreground w-full min-h-[48px] font-semibold" 
                  asChild
                >
                  <a href="https://avaluz.app/auth/signin">Criar conta grátis</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
