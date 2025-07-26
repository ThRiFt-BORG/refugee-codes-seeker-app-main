import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, Lightbulb, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Partnership Opportunities
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Join us in creating an inclusive platform that amplifies frontline voices and drives meaningful climate action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 hover:shadow-climate transition-all duration-300">
            <Building className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Sponsored Sessions
            </h3>
            <p className="text-muted-foreground mb-6">
              Organizations may book time slots by contributing to operational costs. These sessions may include panels, film screenings, launches, or dialogue forums.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent-foreground">Panel Discussions</p>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent-foreground">Film Screenings</p>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent-foreground">Product Launches</p>
              </div>
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent-foreground">Dialogue Forums</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Fees are modest and directly support logistics, space usage, and staffing.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-climate transition-all duration-300">
            <Users className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Free/Equity-Based Sessions
            </h3>
            <p className="text-muted-foreground mb-6">
              Selected grassroots, Indigenous, and youth-led groups—particularly those with limited access to resources—will be offered complimentary space to present their work.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">Grassroots Organizations</p>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">Indigenous Groups</p>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">Youth-Led Movements</p>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">Community Leaders</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transparent selection process ensures representation, inclusion, and mission alignment.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-subtle rounded-lg p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Strategic Partners
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            The Pavilion engages with a broad network of strategic partners to amplify impact and reach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Networks</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Climate justice networks</li>
                <li>• Academic institutions</li>
                <li>• Indigenous councils</li>
                <li>• Regional youth alliances</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Communities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Migration experts</li>
                <li>• Cultural practitioners</li>
                <li>• Policy researchers</li>
                <li>• Frontline advocates</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Funding Priorities
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our fundraising strategy ensures participation from underrepresented communities and supports comprehensive programming throughout COP30.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Travel & Accommodation</h3>
              <p className="text-sm text-muted-foreground">Support for community representatives and grassroots leaders</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Building className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Pavilion Operations</h3>
              <p className="text-sm text-muted-foreground">Venue costs, interpretation services, technical equipment</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Cultural Programming</h3>
              <p className="text-sm text-muted-foreground">Artist commissions and production of cultural material</p>
            </Card>
            
            <Card className="p-6 text-center">
              <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">Communications and post-COP30 impact materials</p>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;