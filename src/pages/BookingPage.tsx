import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const bookingPlatforms = [
    {
      name: "Calendly",
      description: "Plateforme de réservation simple et efficace",
      features: ["Gratuit jusqu'à 1 type d'événement", "Synchronisation calendrier", "Notifications automatiques"],
      pros: "Interface très intuitive",
      link: "https://calendly.com",
      recommended: true,
    },
    {
      name: "SimplyBook.me",
      description: "Solution complète de gestion des rendez-vous",
      features: ["50 réservations/mois gratuites", "Personnalisation avancée", "Paiements en ligne"],
      pros: "Très personnalisable",
      link: "https://simplybook.me",
      recommended: false,
    },
    {
      name: "Acuity Scheduling",
      description: "Outil professionnel de planification",
      features: ["Version gratuite limitée", "Intégrations nombreuses", "Formulaires personnalisés"],
      pros: "Fonctionnalités professionnelles",
      link: "https://acuityscheduling.com",
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-barber-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Prendre <span className="text-primary">Rendez-vous</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez votre méthode de réservation préférée pour un créneau au salon
          </p>
        </div>

        {/* Contact Direct */}
        <Card className="mb-12 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>Réservation par téléphone</span>
              <Badge variant="secondary">Recommandé</Badge>
            </CardTitle>
            <CardDescription>
              La méthode la plus rapide et personnalisée
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Appelez-nous directement</h4>
                <p className="text-3xl font-bold text-primary mb-2">02 40 12 34 56</p>
                <p className="text-muted-foreground text-sm">
                  Mardi - Vendredi: 9h00 - 19h00<br />
                  Samedi: 9h00 - 17h00
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Réponse immédiate</span>
                </p>
                <p className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Créneaux en temps réel</span>
                </p>
                <p className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Conseils personnalisés</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plateformes en ligne */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Réservation en ligne
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookingPlatforms.map((platform, index) => (
              <Card key={index} className={`elegant-shadow hover:scale-105 transition-all duration-300 ${platform.recommended ? 'border-primary/50' : 'border-barber-border'}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    {platform.recommended && (
                      <Badge variant="default">Recommandé</Badge>
                    )}
                  </div>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Fonctionnalités :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-barber-border pt-4">
                    <p className="text-sm font-medium text-primary mb-2">Avantage :</p>
                    <p className="text-sm text-muted-foreground">{platform.pros}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(platform.link, '_blank')}
                  >
                    Découvrir <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information supplémentaire */}
        <Card className="bg-muted/30 border-barber-border">
          <CardHeader>
            <CardTitle>Informations importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Temps de réponse :</h4>
              <p className="text-muted-foreground">
                • Téléphone : Réponse immédiate aux heures d'ouverture<br />
                • Plateformes en ligne : Confirmation sous 2h maximum
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Annulation :</h4>
              <p className="text-muted-foreground">
                Merci de prévenir au moins 2h à l'avance en cas d'annulation
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Conseils :</h4>
              <p className="text-muted-foreground">
                Pour un premier rendez-vous, n'hésitez pas à nous appeler directement 
                pour discuter de vos attentes et recevoir nos conseils personnalisés.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingPage;