import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Domains from "./pages/Join-us";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import CodeOfConduct from "./pages/CodeOfConduct";
import TermsOfService from "./pages/TermsOfService";
import Notes from "./pages/Notes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Header /> 
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/join-us" element={<Domains />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/codeofconduct" element={<CodeOfConduct />} />
            <Route path="/termsofservice" element={<TermsOfService />} />

            {/* Add any other custom routes here */}

            {/* Catch-all route for 404 Not Found */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
