
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BusinessStructureArticlePage from "./pages/BusinessStructureArticlePage";
import ManagementProblemsArticlePage from "./pages/ManagementProblemsArticlePage";
import AdidasTurnaroundArticlePage from "./pages/AdidasTurnaroundArticlePage";
import GlobalExhibitionsArticlePage from "./pages/GlobalExhibitionsArticlePage";
import EACArticlePage from "./pages/EACArticlePage";
import DestinationManagementPage from "./pages/DestinationManagementPage";
import SmartStaffingPage from "./pages/SmartStaffingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/business-structure-kenya" element={<BusinessStructureArticlePage />} />
            <Route path="/blog/management-problems" element={<ManagementProblemsArticlePage />} />
            <Route path="/blog/adidas-turnaround" element={<AdidasTurnaroundArticlePage />} />
            <Route path="/blog/global-exhibitions" element={<GlobalExhibitionsArticlePage />} />
            <Route path="/blog/eac-cross-border-operations" element={<EACArticlePage />} />
            <Route path="/destination-management" element={<DestinationManagementPage />} />
            <Route path="/smart-staffing" element={<SmartStaffingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
