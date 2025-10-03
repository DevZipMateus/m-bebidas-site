import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-hero-gradient pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="2M Distribuidora de Bebidas" className="h-32 w-auto animate-fade-in" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            2M Distribuidora de Bebidas
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-medium animate-fade-in">
            O melhor preço de Maricá
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Sua distribuidora de confiança para cerveja, whisky, refrigerante e descartáveis. 
            Atendimento no atacado e varejo com os melhores preços da região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5521971442727', '_blank')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
            >
              Faça seu Pedido
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/60 font-semibold text-lg px-8"
            >
              Nossos Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
