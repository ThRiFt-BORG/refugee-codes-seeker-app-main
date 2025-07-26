import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Trophy } from "lucide-react";

const Sponsorship = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: "bronze",
      name: "Bronze Partner",
      price: 5000,
      icon: Trophy,
      color: "text-amber-600",
      features: [
        "Logo on pavilion materials",
        "Recognition in opening ceremony",
        "2 complimentary passes",
        "Social media mentions"
      ]
    },
    {
      id: "silver",
      name: "Silver Partner",
      price: 10000,
      icon: Star,
      color: "text-gray-400",
      features: [
        "All Bronze benefits",
        "Speaking opportunity in panel",
        "4 complimentary passes",
        "Exhibition space (small)",
        "Newsletter inclusion"
      ]
    },
    {
      id: "gold",
      name: "Gold Partner",
      price: 25000,
      icon: Crown,
      color: "text-yellow-500",
      popular: true,
      features: [
        "All Silver benefits",
        "Keynote speaking slot",
        "8 complimentary passes",
        "Exhibition space (medium)",
        "Logo on main banner",
        "Press release inclusion"
      ]
    },
    {
      id: "platinum",
      name: "Platinum Partner",
      price: 50000,
      icon: Crown,
      color: "text-purple-500",
      features: [
        "All Gold benefits",
        "Co-hosting opportunity",
        "15 complimentary passes",
        "Exhibition space (large)",
        "Exclusive networking event",
        "Custom partnership activation"
      ]
    }
  ];

  const handleSelectPackage = (packageId: string, amount: number) => {
    navigate(`/sponsorship-form?package=${packageId}&amount=${amount}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Sponsorship Packages
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Partner with us to amplify frontline voices and drive meaningful climate action at COP30.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={pkg.id} 
                className={`relative p-8 hover:shadow-climate transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <IconComponent className={`h-12 w-12 mx-auto mb-4 ${pkg.color}`} />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-4">
                    ${pkg.price.toLocaleString()}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => handleSelectPackage(pkg.id, pkg.price)}
                >
                  Select Package
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-subtle">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Custom Partnership Opportunities
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for a tailored partnership that meets your specific goals? 
              We'd love to work with you to create a custom sponsorship package.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Discuss Custom Partnership
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;