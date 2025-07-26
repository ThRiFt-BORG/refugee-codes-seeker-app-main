import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Climate Refugees
            <br />
            <span className="text-primary-light">Pavilion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Amplifying voices from the margins and centering human mobility within climate negotiations at COP30
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-primary-light" />
              <h3 className="font-semibold text-lg mb-1">November 2025</h3>
              <p className="text-primary-foreground/80">Two weeks of COP30</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-primary-light" />
              <h3 className="font-semibold text-lg mb-1">Belém, Brazil</h3>
              <p className="text-primary-foreground/80">UNFCCC COP30</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary-light" />
              <h3 className="font-semibold text-lg mb-1">Global Voices</h3>
              <p className="text-primary-foreground/80">Frontline communities</p>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;