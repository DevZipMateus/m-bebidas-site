import { Beer, Wine, Droplets, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Beer,
      title: 'Cerveja',
      description: 'Ampla variedade de cervejas nacionais e importadas, sempre geladas e com os melhores preços do mercado.'
    },
    {
      icon: Wine,
      title: 'Whisky',
      description: 'Seleção especial de whiskies de diversas marcas e procedências para os apreciadores mais exigentes.'
    },
    {
      icon: Droplets,
      title: 'Refrigerante',
      description: 'Refrigerantes de todas as marcas e sabores, ideais para seu evento, festa ou consumo diário.'
    },
    {
      icon: Package,
      title: 'Descartáveis',
      description: 'Linha completa de descartáveis para suas festas e eventos, com qualidade e preço competitivo.'
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-foreground">
            Nossos produtos
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-8 sm:mb-10 md:mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              Atendimento no atacado e varejo. Entre em contato e faça seu orçamento!
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5521971442727', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
