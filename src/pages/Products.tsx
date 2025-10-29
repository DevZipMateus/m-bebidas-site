import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import antarcticaImg from '@/assets/products/antarctica.jpeg';
import heinekenImg from '@/assets/products/heineken.jpeg';
import mansaoMarombaImg from '@/assets/products/mansao-maromba.png';
import imperioImg from '@/assets/products/imperio.jpeg';
import chivasImg from '@/assets/products/chivas.webp';
import blueLabelImg from '@/assets/products/blue-label.jpeg';
import goldLabelImg from '@/assets/products/gold-label.jpeg';
import ballantinesImg from '@/assets/products/ballantines.jpeg';
import buchanansImg from '@/assets/products/buchanans.jpeg';
import royalSaluteImg from '@/assets/products/royal-salute-21.webp';
import jackDanielsImg from '@/assets/products/jack-daniels.webp';
import jackDanielsHoneyImg from '@/assets/products/jack-daniels-honey.webp';
import jackDanielsAppleImg from '@/assets/products/jack-daniels-apple.webp';
import whiteHorseImg from '@/assets/products/white-horse.jpeg';
import blackLabelImg from '@/assets/products/black-label.jpeg';
import redLabelImg from '@/assets/products/red-label.webp';
import lariosRoseImg from '@/assets/products/larios-rose.png';
import lariosGinebraImg from '@/assets/products/larios-ginebra.jpeg';
import cirocImg from '@/assets/products/ciroc.jpeg';
import leonoffImg from '@/assets/products/leonoff.jpeg';
import beefeaterImg from '@/assets/products/beefeater.jpeg';
import budweiserImg from '@/assets/products/budweiser.jpeg';
import stellaArtoisImg from '@/assets/products/stella-artois.webp';
import coronaImg from '@/assets/products/corona.jpeg';
import heinekenLongNeckImg from '@/assets/products/heineken-long-neck.jpeg';
import brahmaImg from '@/assets/products/brahma.jpeg';
import redBullImg from '@/assets/products/red-bull.jpeg';
import topCocoCocoImg from '@/assets/products/top-coco-coco.jpeg';
import topCocoMacaVerdeImg from '@/assets/products/top-coco-maca-verde.jpeg';
import topCocoMaracujaImg from '@/assets/products/top-coco-maracuja.jpeg';
import topCocoMelanciaImg from '@/assets/products/top-coco-melancia.jpeg';
import topCocoMorangoImg from '@/assets/products/top-coco-morango.jpeg';

const Products = () => {
  const products = [
    {
      name: 'Antarctica Lata 350ml',
      image: antarcticaImg,
      category: 'Cerveja'
    },
    {
      name: 'Brahma Chopp',
      image: brahmaImg,
      category: 'Cerveja'
    },
    {
      name: 'Heineken Lata',
      image: heinekenImg,
      category: 'Cerveja'
    },
    {
      name: 'Heineken Long Neck',
      image: heinekenLongNeckImg,
      category: 'Cerveja'
    },
    {
      name: 'Budweiser',
      image: budweiserImg,
      category: 'Cerveja'
    },
    {
      name: 'Stella Artois',
      image: stellaArtoisImg,
      category: 'Cerveja'
    },
    {
      name: 'Corona Extra',
      image: coronaImg,
      category: 'Cerveja'
    },
    {
      name: 'Império 300ml',
      image: imperioImg,
      category: 'Cerveja'
    },
    {
      name: 'Mansão Maromba Whisky Combo',
      image: mansaoMarombaImg,
      category: 'Whisky'
    },
    {
      name: 'Chivas Regal 12 Anos',
      image: chivasImg,
      category: 'Whisky'
    },
    {
      name: 'Johnnie Walker Blue Label',
      image: blueLabelImg,
      category: 'Whisky'
    },
    {
      name: 'Johnnie Walker Gold Label',
      image: goldLabelImg,
      category: 'Whisky'
    },
    {
      name: 'Johnnie Walker Black Label',
      image: blackLabelImg,
      category: 'Whisky'
    },
    {
      name: 'Johnnie Walker Red Label',
      image: redLabelImg,
      category: 'Whisky'
    },
    {
      name: 'Ballantine\'s Finest',
      image: ballantinesImg,
      category: 'Whisky'
    },
    {
      name: 'Buchanan\'s DeLuxe 12 Anos',
      image: buchanansImg,
      category: 'Whisky'
    },
    {
      name: 'Royal Salute 21 Anos',
      image: royalSaluteImg,
      category: 'Whisky'
    },
    {
      name: 'Jack Daniel\'s Tennessee Whiskey',
      image: jackDanielsImg,
      category: 'Whisky'
    },
    {
      name: 'Jack Daniel\'s Tennessee Honey',
      image: jackDanielsHoneyImg,
      category: 'Whisky'
    },
    {
      name: 'Jack Daniel\'s Tennessee Apple',
      image: jackDanielsAppleImg,
      category: 'Whisky'
    },
    {
      name: 'White Horse',
      image: whiteHorseImg,
      category: 'Whisky'
    },
    {
      name: 'Larios Rose Gin',
      image: lariosRoseImg,
      category: 'Gin'
    },
    {
      name: 'Larios Ginebra Mediterránea',
      image: lariosGinebraImg,
      category: 'Gin'
    },
    {
      name: 'Beefeater Pink Strawberry',
      image: beefeaterImg,
      category: 'Gin'
    },
    {
      name: 'Cîroc Vodka',
      image: cirocImg,
      category: 'Vodka'
    },
    {
      name: 'Leonoff Vodka',
      image: leonoffImg,
      category: 'Vodka'
    },
    {
      name: 'Red Bull',
      image: redBullImg,
      category: 'Energético'
    },
    {
      name: 'Top Coco Gelo - Coco',
      image: topCocoCocoImg,
      category: 'Gelo para Drinks'
    },
    {
      name: 'Top Coco Gelo - Maçã Verde',
      image: topCocoMacaVerdeImg,
      category: 'Gelo para Drinks'
    },
    {
      name: 'Top Coco Gelo - Maracujá',
      image: topCocoMaracujaImg,
      category: 'Gelo para Drinks'
    },
    {
      name: 'Top Coco Gelo - Melancia',
      image: topCocoMelanciaImg,
      category: 'Gelo para Drinks'
    },
    {
      name: 'Top Coco Gelo - Morango',
      image: topCocoMorangoImg,
      category: 'Gelo para Drinks'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-foreground">
                Nossos Produtos
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-8 sm:mb-12"></div>
              
              <p className="text-center text-muted-foreground text-base sm:text-lg mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
                Confira nossa seleção de cervejas e whiskies premium. Temos os melhores preços e produtos sempre gelados!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {products.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-secondary/10 flex items-center justify-center p-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                          {product.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4">
                          {product.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12 sm:mt-16">
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Interessado em algum produto? Entre em contato para consultar preços e disponibilidade!
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
