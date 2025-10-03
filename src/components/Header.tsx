import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="2M Distribuidora de Bebidas" className="h-28 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Button onClick={() => window.open('https://wa.me/5521971442727', '_blank')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              Contato
            </button>
            <Button onClick={() => window.open('https://wa.me/5521971442727', '_blank')} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Fale Conosco
            </Button>
          </div>}
      </nav>
    </header>;
};
export default Header;