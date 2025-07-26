import { Card } from "@/components/ui/card";
import { Globe, Heart, Scale } from "lucide-react";

const PurposeSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Crisis",
      description: "Rising sea levels, droughts, and extreme weather events are displacing millions, particularly affecting communities in the Global South."
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description: "Amplifying the lived experiences of Indigenous Peoples, pastoralists, rural women, and youth affected by climate displacement."
    },
    {
      icon: Scale,
      title: "Justice & Rights",
      description: "Advocating for transformative, rights-based solutions and inclusive policymaking that integrates human mobility into climate strategies."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Centering Human Stories in Climate Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Climate Refugees Pavilion provides a dedicated platform at COP30 to highlight the voices and agency of communities directly impacted by climate-induced displacement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-climate transition-all duration-300 border-0 bg-background">
              <feature.icon className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-lg p-8 lg:p-12 shadow-card">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
            Our Purpose
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              As the world prepares for COP30 in Brazil, we must bring forward voices from the margins and amplify narratives that reflect the lived experiences of climate-induced migration and displacement.
            </p>
            <p>
              This moment presents a critical opportunity to center human mobility within climate negotiations and advocate for transformative, rights-based, and just solutions.
            </p>
            <p>
              The Climate Refugees Pavilion is envisioned as a dynamic, inclusive, and interdisciplinary space that spotlights the intersection of climate change and migration through diverse lenses including culture, policy, research, lived experience, and advocacy.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-accent/50 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Global Climate Impact</h4>
              <p className="text-sm text-muted-foreground">Leading climate action initiatives</p>
            </div>
            <div className="text-center p-6 bg-accent/50 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-2">Youth Love Egypt Foundation</h4>
              <p className="text-sm text-muted-foreground">UNFCCC-accredited Egyptian NGO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;