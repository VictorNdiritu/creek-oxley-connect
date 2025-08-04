
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BusinessStructureArticlePage from "./pages/BusinessStructureArticlePage";
import ManagementProblemsArticlePage from "./pages/ManagementProblemsArticlePage";
import DestinationManagementPage from "./pages/DestinationManagementPage";
import SmartStaffingPage from "./pages/SmartStaffingPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/business-structure-kenya" element={<BusinessStructureArticlePage />} />
          <Route path="/blog/management-problems" element={<ManagementProblemsArticlePage />} />
          <Route path="/destination-management" element={<DestinationManagementPage />} />
          <Route path="/smart-staffing" element={<SmartStaffingPage />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
