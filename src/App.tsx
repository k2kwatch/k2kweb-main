import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shell from "@/components/Shell";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ConanTVSeries from "@/pages/ThamTuLungDanhConan";

// const Kudodz.APIKey = import.meta.env.VITE_KUDODZ_API_KEY;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Shell />}>
            <Route path="/" element={<Index />} />
            <Route path="/tham-tu-lung-danh-conan" element={<ConanTVSeries />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
