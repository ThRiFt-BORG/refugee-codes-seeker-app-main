import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Users, Calendar, FileText, Globe } from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This will be connected to your auth system
  
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    organizationType: '',
    sessionTitle: '',
    sessionType: '',
    description: '',
    objectives: '',
    speakers: '',
    duration: '',
    expectedAttendees: '',
    technicalRequirements: '',
    accessibility: false,
    previousExperience: '',
    whyImportant: ''
  });

  // Check authentication status
  useEffect(() => {
    // TODO: Replace with your actual auth check
    const checkAuth = () => {
      // This is where you'll check if user is logged in
      // For now, setting to true for development
      setIsLoggedIn(true);
    };
    checkAuth();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Submit form data to your backend
    console.log('Session application data:', formData);

    toast({
      title: "Application Submitted",
      description: "We've received your session application and will review it shortly.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Apply for Session
          </h1>
          <p className="text-xl text-muted-foreground">
            Submit your proposal to host a session at the Climate Refugees Pavilion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <Card className="p-6 text-center">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Panel Discussions</h3>
            <p className="text-sm text-muted-foreground">Expert panels on climate migration</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Workshops</h3>
            <p className="text-sm text-muted-foreground">Interactive learning sessions</p>
          </Card>
          
          <Card className="p-6 text-center">
            <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Presentations</h3>
            <p className="text-sm text-muted-foreground">Research and case studies</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Cultural Events</h3>
            <p className="text-sm text-muted-foreground">Art, music, and storytelling</p>
          </Card>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Organization Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="organizationName">Organization Name *</Label>
                  <Input
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="organizationType">Organization Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('organizationType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grassroots">Grassroots Organization</SelectItem>
                      <SelectItem value="indigenous">Indigenous Group</SelectItem>
                      <SelectItem value="youth">Youth-Led Movement</SelectItem>
                      <SelectItem value="academic">Academic Institution</SelectItem>
                      <SelectItem value="nonprofit">Non-profit</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Session Details</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="sessionTitle">Session Title *</Label>
                  <Input
                    id="sessionTitle"
                    value={formData.sessionTitle}
                    onChange={(e) => handleInputChange('sessionTitle', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="sessionType">Session Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('sessionType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select session type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="panel">Panel Discussion</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="presentation">Presentation</SelectItem>
                      <SelectItem value="film">Film Screening</SelectItem>
                      <SelectItem value="cultural">Cultural Event</SelectItem>
                      <SelectItem value="dialogue">Dialogue Forum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="duration">Preferred Duration *</Label>
                    <Select onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                        <SelectItem value="120">120 minutes</SelectItem>
                        <SelectItem value="180">3 hours</SelectItem>
                        <SelectItem value="half-day">Half day</SelectItem>
                        <SelectItem value="full-day">Full day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="expectedAttendees">Expected Attendees</Label>
                    <Input
                      id="expectedAttendees"
                      value={formData.expectedAttendees}
                      onChange={(e) => handleInputChange('expectedAttendees', e.target.value)}
                      placeholder="e.g., 50-100 people"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Session Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Provide a detailed description of your proposed session..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="objectives">Learning Objectives *</Label>
                  <Textarea
                    id="objectives"
                    value={formData.objectives}
                    onChange={(e) => handleInputChange('objectives', e.target.value)}
                    placeholder="What will participants learn or gain from this session?"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="speakers">Speakers/Facilitators *</Label>
                  <Textarea
                    id="speakers"
                    value={formData.speakers}
                    onChange={(e) => handleInputChange('speakers', e.target.value)}
                    placeholder="List the speakers and their credentials..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="technicalRequirements">Technical Requirements</Label>
                  <Textarea
                    id="technicalRequirements"
                    value={formData.technicalRequirements}
                    onChange={(e) => handleInputChange('technicalRequirements', e.target.value)}
                    placeholder="Audio/visual equipment, interpretation, seating arrangement, etc."
                    rows={2}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="accessibility"
                    checked={formData.accessibility}
                    onCheckedChange={(checked) => handleInputChange('accessibility', checked as boolean)}
                  />
                  <Label htmlFor="accessibility">
                    This session requires accessibility accommodations
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="previousExperience">Previous Experience</Label>
                  <Textarea
                    id="previousExperience"
                    value={formData.previousExperience}
                    onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                    placeholder="Describe your organization's experience with similar events..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="whyImportant">Why is this session important? *</Label>
                  <Textarea
                    id="whyImportant"
                    value={formData.whyImportant}
                    onChange={(e) => handleInputChange('whyImportant', e.target.value)}
                    placeholder="Explain how this session contributes to climate justice and migration discussions..."
                    rows={4}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="submit" size="lg" className="flex-1">
                Submit Application
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Apply;