import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudiesPage from "./pages/case-studies";
import AIModelOps from "./pages/case-studies/ai-model-ops";
import EcommerceReplatforming from "./pages/case-studies/ecommerce-replatforming";
import HealthcareDashboard from "./pages/case-studies/healthcare-dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/ai-model-ops" element={<AIModelOps />} />
        <Route path="/case-studies/ecommerce-replatforming" element={<EcommerceReplatforming />} />
        <Route path="/case-studies/healthcare-dashboard" element={<HealthcareDashboard />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
