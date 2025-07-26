import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About the Climate Refugees Pavilion
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A dynamic platform amplifying frontline voices at COP30
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Climate Refugees Pavilion serves as a dedicated platform at COP30 to center human mobility within climate negotiations and amplify the voices of communities directly impacted by climate-induced displacement.
              </p>
              <p>
                We advocate for transformative, rights-based solutions that integrate human mobility into climate strategies while ensuring inclusive policymaking processes.
              </p>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-subtle border-0">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Key Focus Areas</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Climate-induced migration and displacement</li>
              <li>• Indigenous and traditional knowledge systems</li>
              <li>• Legal frameworks and human rights</li>
              <li>• Gender, youth, and marginalized communities</li>
              <li>• Policy innovation and global solidarity</li>
            </ul>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Co-Conveners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Global Climate Impact
              </h3>
              <p className="text-muted-foreground">
                Leading climate action initiatives worldwide, bringing expertise in policy advocacy and international climate negotiations.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Youth Love Egypt Foundation
              </h3>
              <p className="text-muted-foreground">
                UNFCCC-accredited Egyptian NGO focusing on youth engagement and climate justice from the perspective of developing nations.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;