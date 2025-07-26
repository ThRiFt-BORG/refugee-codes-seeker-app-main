import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PurposeSection from "@/components/PurposeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PurposeSection />
      
      {/* Partners Section */}
      <div className="bg-accent/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working together with organizations worldwide to amplify frontline voices and drive climate action.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Partner logos will be added here */}
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
