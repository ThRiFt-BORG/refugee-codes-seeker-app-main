import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Join us in amplifying frontline voices and centering human mobility in climate action at COP30.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Global Climate Impact
                </h3>
                <p className="text-muted-foreground mb-3">
                  Tafadzwa Chando
                </p>
                <a 
                  href="mailto:media@tafadzwachando.org"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  media@tafadzwachando.org
                </a>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Youth Love Egypt Foundation
                </h3>
                <p className="text-muted-foreground mb-3">
                  Ahmed Fathy
                </p>
                <a 
                  href="mailto:ahmedfathyngo@gmail.com"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  ahmedfathyngo@gmail.com
                </a>
              </Card>
            </div>

            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="mailto:media@tafadzwachando.org?subject=Climate%20Refugees%20Pavilion%20Partnership%20Inquiry">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Partnership Inquiry
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Event Details
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">November 2025</h3>
                <p className="text-muted-foreground">Two weeks during COP30</p>
              </Card>
              
              <Card className="p-6">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Belém, Brazil</h3>
                <p className="text-muted-foreground">UNFCCC COP30 Conference</p>
              </Card>
              
              <Card className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Platform</h3>
                <p className="text-muted-foreground">Climate Refugees Pavilion</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-gradient-subtle rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Ready to Make an Impact?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            Whether you're representing a grassroots organization, academic institution, cultural collective, or policy network, there are multiple ways to contribute to the Climate Refugees Pavilion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-climate transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Apply for Sessions</h3>
              <p className="text-muted-foreground mb-4">Book sponsored slots or apply for equity-based programming</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-climate transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Strategic Partnership</h3>
              <p className="text-muted-foreground mb-4">Join our network of climate justice organizations</p>
              <Button variant="outline" size="sm">Get Involved</Button>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-climate transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Support & Funding</h3>
              <p className="text-muted-foreground mb-4">Help us ensure inclusive participation for all</p>
              <Button variant="outline" size="sm">Contribute</Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="mailto:media@tafadzwachando.org?subject=Climate%20Refugees%20Pavilion%20-%20Collaboration%20Inquiry">
                Start the Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;