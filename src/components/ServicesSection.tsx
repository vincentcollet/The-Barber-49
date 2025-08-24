import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Users } from "lucide-react";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Coupe Adultes",
      description: "Coupe classique pour adultes avec finition soignée",
      price: "19€",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Coupe Spéciale",
      description: "Taper Espagnol - Coupe moderne avec dégradé technique",
      price: "20€",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coupe Enfant -12ans",
      description: "Coupe adaptée aux enfants avec soin particulier",
      price: "17€",
    },
  ];

  const comboServices = [
    { service: "Coupe + Shampooing + Brushing", price: "21€" },
    { service: "Coupe + Barbe (Uniquement Tondeuse)", price: "22€" },
    { service: "Coupe + Barbe Traçage", price: "28€" },
    { service: "Coupe + Barbe + Shampooing", price: "30€" },
    { service: "Coupe + Barbe + Shampooing + Brushing (Cheveux Courts)", price: "35€" },
  ];

  const specialServices = [
    { service: "Barbe Tracé Courte (0mm-5mm)", price: "13€" },
    { service: "Barbe Tracé Moyen (5mm-22mm)", price: "15€" },
    { service: "Barbe Tracé Longue (+ de 2.2cm)", price: "17€" },
    { service: "Nettoyage au niveau de la nuque", price: "5€" },
    { service: "Coupe + Barbe + Coloration Barbe", price: "40€" },
    { service: "Mèche cheveux courts", price: "30€" },
    { service: "Décoloration + Coloration", price: "90€" },
    { service: "Service Barbershop Complet", price: "60€", highlight: true },
    { service: "Soin du visage", price: "25€" },
    { service: "Permanente", price: "À partir de 50€" },
    { service: "Défrisage", price: "25€" },
    { service: "Coloration de la barbe", price: "À partir de 13€" },
    { service: "Tonte crâne tondeuse (Tête complète)", price: "16€" },
    { service: "Shampooing + Brushing (Cheveux courts)", price: "12€" },
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

        {/* Services principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service, index) => (
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

        {/* Services combinés */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Services Combinés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comboServices.map((service, index) => (
              <Card key={index} className="bg-card border-barber-border">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">{service.service}</span>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services spécialisés */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Services Spécialisés</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialServices.map((service, index) => (
              <Card key={index} className={`bg-card border-barber-border ${service.highlight ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-foreground ${service.highlight ? 'font-semibold' : ''}`}>
                      {service.service}
                    </span>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service premium highlight */}
        <Card className="bg-primary/5 border-primary/30 mb-8">
          <CardHeader>
            <CardTitle className="text-center text-primary">Service Barbershop Complet - 60€</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Coupe + Barbe + Shampooing + Soin du visage + Masque + Serviette chaude
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              L'expérience complète du barbier traditionnel
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Tous nos services incluent les conseils personnalisés de nos professionnels
          </p>
          <div className="inline-flex items-center space-x-2 text-primary">
            <span>Ouvert du mardi au samedi - Sur rendez-vous uniquement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;