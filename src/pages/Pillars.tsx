import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { TreePine, Scale, Palette, Building2, Users, Globe } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: TreePine,
      title: "Ancestral Knowledge & Indigenous Resistance",
      description: "Elevating Indigenous and traditional ecological knowledge systems as tools for resilience and adaptation."
    },
    {
      icon: Scale,
      title: "Climate Displacement & Legal Frameworks",
      description: "Analyzing legal protections and gaps for displaced people under climate-related scenarios."
    },
    {
      icon: Palette,
      title: "Cultural Expressions & Storytelling",
      description: "Utilizing music, film, dance, and visual arts as methods of climate memory, mourning, and activism."
    },
    {
      icon: Building2,
      title: "Youth Migration & Urbanization",
      description: "Exploring the push-pull factors that affect rural-to-urban migration and climate-induced youth mobility."
    },
    {
      icon: Users,
      title: "Gender, Care Work & Migration",
      description: "Addressing the disproportionate burden borne by women and girls in contexts of environmental migration."
    },
    {
      icon: Globe,
      title: "Policy Innovations & Global Solidarity",
      description: "Featuring emerging policies, community protocols, and mechanisms of reparative justice and transnational solidarity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Six Thematic Pillars
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our programming is organized around six interconnected themes that reflect the complexity and diversity of climate mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <Card key={index} className="p-6 hover:shadow-climate transition-all duration-300 group">
              <pillar.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-subtle rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Intersectional Approach
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            These pillars work together to create a comprehensive understanding of climate displacement, ensuring that solutions are grounded in both lived experience and systemic analysis. Our intersectional framework recognizes that climate impacts affect communities differently based on geography, identity, and existing vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pillars;