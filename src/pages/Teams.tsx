import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Globe } from "lucide-react";

const Teams = () => {
  const teamMembers = [
    {
      name: "Dr. Maria Santos",
      role: "Executive Director",
      bio: "Dr. Santos is a climate migration researcher with over 15 years of experience working with displaced communities. She holds a PhD in Environmental Policy and has authored numerous papers on climate-induced displacement.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        email: "maria@climaterefugees.org"
      }
    },
    {
      name: "James Patterson",
      role: "Program Coordinator",
      bio: "James brings grassroots organizing experience from his work with Indigenous communities in the Pacific Islands. He specializes in community engagement and culturally responsive programming.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        website: "#",
        email: "james@climaterefugees.org"
      }
    },
    {
      name: "Aisha Patel",
      role: "Communications Director",
      bio: "Aisha is a strategic communications expert with a background in international development. She has led communication campaigns for major environmental organizations and speaks four languages.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        email: "aisha@climaterefugees.org"
      }
    },
    {
      name: "Dr. Benjamin Okoye",
      role: "Research Lead",
      bio: "Dr. Okoye is a leading expert on African climate migration patterns. His research focuses on adaptive strategies of communities facing climate-induced displacement across the Sahel region.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        email: "benjamin@climaterefugees.org"
      }
    },
    {
      name: "Sofia Rodriguez",
      role: "Youth Engagement Coordinator",
      bio: "Sofia is a young climate activist from Central America who has been working on youth climate justice for over 5 years. She leads our youth engagement and mentorship programs.",
      image: "/placeholder.svg",
      links: {
        twitter: "#",
        instagram: "#",
        email: "sofia@climaterefugees.org"
      }
    },
    {
      name: "Dr. Fatima Al-Rashid",
      role: "Policy Advisor",
      bio: "Dr. Al-Rashid is a former UN climate negotiator with expertise in international climate law and migration policy. She advises on policy development and advocacy strategies.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        email: "fatima@climaterefugees.org"
      }
    }
  ];

  const advisors = [
    {
      name: "Prof. Elena Kowalski",
      role: "Senior Advisor",
      bio: "Former IPCC lead author and climate migration specialist",
      image: "/placeholder.svg"
    },
    {
      name: "Roberto Silva",
      role: "Community Liaison",
      bio: "Indigenous rights advocate and community organizer",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Meet the dedicated individuals working to amplify frontline voices and advance climate justice at COP30.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Core Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-climate transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {member.links.linkedin && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.links.twitter && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.links.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.links.website && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.links.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.links.email && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`mailto:${member.links.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Advisory Board
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="p-6 hover:shadow-climate transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {advisor.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {advisor.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-subtle max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals to join our team and contribute to climate justice efforts.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teams;