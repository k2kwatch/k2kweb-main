import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shell from "@/components/Shell";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ConanTVSeries from "@/pages/ThamTuLungDanhConan";
import DoraemonTVSeries from "@/pages/Doraemon";
import DoraemonMovie44 from "@/pages/DoraemonMovie44";
import GiaThien from "@/pages/GiaThien";
import Search from "@/pages/Search";
import Hidden210 from "@/pages/210";
import HaiteKDS123 from "@/pages/HaiteKDS123";

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
            <Route path="/xem-phim/conan/tham-tu-lung-danh-conan-tv-series" element={<ConanTVSeries />} />
            <Route path="/xem-phim/doraemon/doraemon-tuyen-tap-moi-nhat-tv-series" element={<DoraemonTVSeries />} />
            <Route path="/xem-phim/doraemon/doraemon-movie-44" element={<DoraemonMovie44 />} />
            <Route path="/xem-phim/gia-thien" element={<GiaThien />} />
            <Route path="/hidden/210" element={<Hidden210 />} />
            <Route path="/hidden/210/haite-kudasai-takamine-san" element={<HaiteKDS123 />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
