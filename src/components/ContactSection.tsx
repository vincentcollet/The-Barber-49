import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nous <span className="text-primary">Contacter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venez nous rendre visite ou prenez rendez-vous facilement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-barber-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Adresse</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Rue de la Coiffure<br />
                  49000 Angers, France
                </p>
              </CardContent>
            </Card>

            <Card className="border-barber-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="tel:+33240123456" className="hover:text-primary transition-colors">
                    02 40 12 34 56
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-barber-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Horaires</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-1">
                  <p>Mardi - Vendredi: 9h00 - 19h00</p>
                  <p>Samedi: 9h00 - 17h00</p>
                  <p>Dimanche - Lundi: Fermé</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071870196416"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@the_barber_49"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-black transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-barber-hero-bg p-8 rounded-lg elegant-shadow">
              <h3 className="text-3xl font-bold mb-4">
                Prêt pour une nouvelle <span className="text-primary">coupe</span> ?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Réservez votre créneau en quelques clics et venez découvrir 
                l'expertise de notre salon.
              </p>
              
              <Link to="/rendez-vous">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Réserver maintenant
                </Button>
              </Link>
              
              <div className="mt-6 pt-6 border-t border-barber-border">
                <p className="text-sm text-muted-foreground">
                  Réponse garantie sous 2h • Confirmation par SMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;