import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.png';
const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-70" style={{ backgroundImage: `url(${heroBg})` }}></div>
      
      <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
            <img src={logo} alt="2M Distribuidora de Bebidas" className="h-24 w-24 sm:h-32 sm:w-32 md:h-38 md:w-38 animate-fade-in" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-3 sm:mb-4 md:mb-6 animate-fade-in leading-tight">
            2M Distribuidora de Bebidas
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-3 sm:mb-4 font-medium animate-fade-in">
            O melhor preço de Maricá
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in px-2">
            Sua distribuidora de confiança para cerveja, whisky, refrigerante e descartáveis. 
            Atendimento no atacado e varejo com os melhores preços da região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-2">
            <Button size="lg" onClick={() => window.open('https://wa.me/5521971442727', '_blank')} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
              Faça seu Pedido
            </Button>
            <Button size="lg" onClick={() => {
            const element = document.getElementById('servicos');
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }} className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/60 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
              Nossos Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;