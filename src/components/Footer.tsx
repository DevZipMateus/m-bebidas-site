import { Instagram, Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="2M Distribuidora de Bebidas" className="h-16 mb-4" />
            <p className="text-muted-foreground text-sm">
              A sua distribuidora de confiança em Maricá. 
              Os melhores preços em bebidas e descartáveis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Horário de funcionamento</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Segunda a quinta: 8h às 20h</p>
              <p>Sexta e sábado: 8h às 00h</p>
              <p>Domingo: 9h às 18h</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5521971442727"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                (21) 97144-2727
              </a>
              <a 
                href="mailto:2mdistribuidora01@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                2mdistribuidora01@gmail.com
              </a>
              <a 
                href="https://instagram.com/2m_distribuidora01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                @2m_distribuidora01
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 2M Distribuidora de Bebidas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            CNPJ: 62.527.293/0001-17
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
