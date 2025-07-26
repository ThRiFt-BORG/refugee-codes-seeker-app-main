import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { MessageSquare, Wrench, Palette, Heart, BookOpen, Camera } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: MessageSquare,
      title: "Panel Discussions & Roundtables",
      description: "High-level dialogues with activists, researchers, government representatives, and community leaders.",
      timing: "Throughout both weeks"
    },
    {
      icon: Wrench,
      title: "Workshops & Skill-Sharing Labs",
      description: "Participatory sessions on advocacy tools, storytelling techniques, and community research methods.",
      timing: "Daily sessions"
    },
    {
      icon: Palette,
      title: "Art Installations & Performances",
      description: "Exhibits, screenings, music, and performance art from displaced artists and cultural workers.",
      timing: "Continuous exhibition"
    },
    {
      icon: Heart,
      title: "Daily Reflection Spaces",
      description: "Informal debriefing, care spaces, and facilitated healing circles especially for frontline delegates.",
      timing: "Every evening"
    },
    {
      icon: BookOpen,
      title: "Interactive Exhibit Zone",
      description: "Visual displays and infographics on climate migration patterns, lived experiences, and policy pathways.",
      timing: "Open access"
    },
    {
      icon: Camera,
      title: "Media Briefings & Press Engagements",
      description: "Scheduled sessions to amplify Pavilion messages to international media and climate correspondents.",
      timing: "Key moments"
    }
  ];

  const audiences = [
    "UNFCCC Party delegates and negotiators",
    "Civil society actors and Indigenous delegations",
    "Foundations and philanthropic institutions",
    "Youth-led and women-led climate movements",
    "Researchers, journalists, and cultural practitioners",
    "Displaced and migrant communities"
  ];

  const outcomes = [
    "Increase visibility of climate migration in COP30 negotiations",
    "Deepen cross-regional and cross-movement solidarity",
    "Provide safe and creative platform for marginalized voices",
    "Influence policies with grassroots-informed recommendations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Pavilion Activities & Programming
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            The Pavilion will operate throughout the two weeks of COP30 with diverse programming designed to engage, educate, and amplify frontline voices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <Card key={index} className="p-6 hover:shadow-climate transition-all duration-300 group">
              <activity.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {activity.description}
              </p>
              <div className="text-sm font-medium text-primary">
                {activity.timing}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-gradient-subtle border-0">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Target Audiences
            </h2>
            <ul className="space-y-3">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{audience}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-primary/5 border-0">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Expected Outcomes
            </h2>
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activities;