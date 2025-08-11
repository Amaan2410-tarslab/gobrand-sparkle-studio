import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BAT from "./pages/BAT";
import MAT from "./pages/MAT";
import CAT from "./pages/CAT";
import SAT from "./pages/SAT";
import HAT from "./pages/HAT";
import PAT from "./pages/PAT";
import KnowUs from "./pages/KnowUs";
import Questionnaire from "./pages/Questionnaire";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/bat" element={<Layout><BAT /></Layout>} />
          <Route path="/mat" element={<Layout><MAT /></Layout>} />
          <Route path="/cat" element={<Layout><CAT /></Layout>} />
          <Route path="/sat" element={<Layout><SAT /></Layout>} />
          <Route path="/hat" element={<Layout><HAT /></Layout>} />
          <Route path="/pat" element={<Layout><PAT /></Layout>} />
          <Route path="/know-us" element={<Layout><KnowUs /></Layout>} />
          <Route path="/questionnaire" element={<Layout><Questionnaire /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
