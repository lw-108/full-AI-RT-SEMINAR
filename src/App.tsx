import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next"
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReactComponents from "./pages/ReactComponents";
import AISettings from "./pages/AISettings";
import ReactComps from "./pages/ReactComps";
import { FloatingDockDemo } from "./components/FloatingDockDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* FloatingDock available on all pages */}
        <FloatingDockDemo />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/react-components" element={<ReactComponents />} />
          <Route path="/ai-settings" element={<AISettings />} />
          <Route path="/react-comps" element={<ReactComps />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;