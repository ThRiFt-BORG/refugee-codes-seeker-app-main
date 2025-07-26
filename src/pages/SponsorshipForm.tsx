import { useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SponsorshipForm = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This will be connected to your auth system
  
  const packageId = searchParams.get('package');
  const amount = searchParams.get('amount');

  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    organizationType: '',
    description: '',
    specialRequests: ''
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

  const packageNames = {
    bronze: "Bronze Partner",
    silver: "Silver Partner",
    gold: "Gold Partner",
    platinum: "Platinum Partner"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Submit form data to your backend
    console.log('Sponsorship form data:', {
      ...formData,
      package: packageId,
      amount: amount
    });

    toast({
      title: "Application Submitted",
      description: "We've received your sponsorship application and will contact you soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
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
            Sponsorship Application
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete your application for the {packageNames[packageId as keyof typeof packageNames]} package
          </p>
        </div>

        <Card className="p-8">
          <div className="mb-8 p-4 bg-accent/20 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Selected Package: {packageNames[packageId as keyof typeof packageNames]}
                </h3>
                <p className="text-muted-foreground">Investment Amount</p>
              </div>
              <div className="text-2xl font-bold text-primary">
                ${Number(amount).toLocaleString()}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="nonprofit">Non-profit</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="academic">Academic Institution</SelectItem>
                    <SelectItem value="foundation">Foundation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Organization Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Tell us about your organization and why you want to partner with us..."
                rows={4}
                required
              />
            </div>

            <div>
              <Label htmlFor="specialRequests">Special Requests or Requirements</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Any specific requirements or requests for your partnership..."
                rows={3}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="submit" size="lg" className="flex-1">
                Submit Application
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={() => window.history.back()}>
                Back to Packages
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SponsorshipForm;