import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-foreground">
            Entre em contato
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-8 sm:mb-10 md:mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Fale conosco</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground text-sm sm:text-base">Telefone</h4>
                    <a 
                      href="https://wa.me/5521971442727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      (21) 97144-2727
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground text-sm sm:text-base">E-mail</h4>
                    <a 
                      href="mailto:2mdistribuidora01@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                    >
                      2mdistribuidora01@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Estr. Velha de Maricá, 1049<br />
                      Itapeba, Maricá - RJ<br />
                      24931-185
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground text-sm sm:text-base">Instagram</h4>
                    <a 
                      href="https://instagram.com/2m_distribuidora01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      @2m_distribuidora01
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/5521971442727', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
                >
                  Enviar Mensagem no WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Nossa localização</h3>
              <div className="rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[350px] md:h-[400px] border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=Estr.+Velha+de+Maricá,+1049+-+Itapeba,+Maricá+-+RJ,+24931-185&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização 2M Distribuidora de Bebidas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
