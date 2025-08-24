import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-barber-card border-t border-barber-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">TB</span>
            </div>
            <span className="text-lg font-bold text-primary">The Barber49</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 The Barber49. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
