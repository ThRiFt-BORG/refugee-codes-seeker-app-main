import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Pillars from "./pages/Pillars";
import Activities from "./pages/Activities";
import Partnerships from "./pages/Partnerships";
import Sponsorship from "./pages/Sponsorship";
import SponsorshipForm from "./pages/SponsorshipForm";
import Apply from "./pages/Apply";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/sponsorship-form" element={<SponsorshipForm />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
