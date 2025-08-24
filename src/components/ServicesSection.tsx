import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Users, Clock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Coupe Classique",
      description: "Coupe traditionnelle avec finition soignée et styling",
      price: "25€",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Coupe + Barbe",
      description: "Service complet avec taille de barbe et soins",
      price: "35€",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coupe Enfant",
      description: "Coupe adaptée aux plus jeunes dans un cadre accueillant",
      price: "20€",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Service Express",
      description: "Coupe rapide pour les emplois du temps chargés",
      price: "18€",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des prestations de qualité pour tous les styles et tous les âges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="elegant-shadow hover:scale-105 transition-all duration-300 bg-card border-barber-border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Tous nos services incluent un shampoing et un styling professionnel
          </p>
          <div className="inline-flex items-center space-x-2 text-primary">
            <Clock className="w-4 h-4" />
            <span>Ouvert du mardi au samedi - Sur rendez-vous</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;