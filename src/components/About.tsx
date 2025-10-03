import { Clock, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Sobre nós
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A 2M Distribuidora de Bebidas é referência em Maricá quando o assunto é variedade 
              e preço justo. Trabalhamos no ramo de distribuição de bebidas, atendendo tanto no 
              atacado quanto no varejo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é oferecer os melhores produtos com os melhores preços, 
              sempre com atendimento de qualidade e compromisso com nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Horário de funcionamento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Segunda a quinta: 8h às 20h<br />
                Sexta e sábado: 8h às 00h<br />
                Domingo: 9h às 18h
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Localização</h3>
              <p className="text-muted-foreground text-sm">
                Estrada velha de Maricá, nº 6436<br />
                Maricá - RJ
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Contato</h3>
              <p className="text-muted-foreground text-sm">
                (21) 97144-2727<br />
                2mdistribuidora01@gmail.com<br />
                @2m_distribuidora01
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
