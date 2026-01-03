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
import Conan from "@/pages/ThamTuLungDanhConan";
import ConanMovie28 from "@/pages/ConanMovie28";
import ConanMovie27 from "@/pages/ConanMovie27";
import ConanMovie26 from "@/pages/ConanMovie26";
import ConanMovie25 from "@/pages/ConanMovie25";
import ConanMovie24 from "@/pages/ConanMovie24";
import ConanMovie23 from "@/pages/ConanMovie23";
import ConanMovie22 from "@/pages/ConanMovie22";
import ConanMovie21 from "@/pages/ConanMovie21";
import ConanMovie20 from "@/pages/ConanMovie20";
import ConanMovie19 from "@/pages/ConanMovie19";
import ConanMovie18 from "@/pages/ConanMovie18";
import ConanMovie17 from "@/pages/ConanMovie17";
import ConanMovie16 from "@/pages/ConanMovie16";
import ConanMovie15 from "@/pages/ConanMovie15";
import ConanMovie14 from "@/pages/ConanMovie14";
import ConanMovie13 from "@/pages/ConanMovie13";
import ConanMovie12 from "@/pages/ConanMovie12";
import ConanMovie11 from "@/pages/ConanMovie11";
import ConanMovie10 from "@/pages/ConanMovie10";
import ConanMovie9 from "@/pages/ConanMovie9";
import ConanMovie8 from "@/pages/ConanMovie8";
import ConanMovie7 from "@/pages/ConanMovie7";
import ConanMovie6 from "@/pages/ConanMovie6";
import ConanMovie5 from "@/pages/ConanMovie5";
import ConanMovie4 from "@/pages/ConanMovie4";
import ConanMovie3 from "@/pages/ConanMovie3";
import ConanMovie2 from "@/pages/ConanMovie2";
import ConanMovie1 from "@/pages/ConanMovie1";

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
            <Route path="/xem-phim/conan/conan-movie-28" element={<ConanMovie28 />} />
            <Route path="/xem-phim/conan/conan-movie-27" element={<ConanMovie27 />} />
            <Route path="/xem-phim/conan/conan-movie-26" element={<ConanMovie26 />} />
            <Route path="/xem-phim/conan/conan-movie-25" element={<ConanMovie25 />} />
            <Route path="/xem-phim/conan/conan-movie-24" element={<ConanMovie24 />} />
            <Route path="/xem-phim/conan/conan-movie-23" element={<ConanMovie23 />} />
            <Route path="/xem-phim/conan/conan-movie-22" element={<ConanMovie22 />} />
            <Route path="/xem-phim/conan/conan-movie-21" element={<ConanMovie21 />} />
            <Route path="/xem-phim/conan/conan-movie-20" element={<ConanMovie20 />} />
            <Route path="/xem-phim/conan/conan-movie-19" element={<ConanMovie19 />} />
            <Route path="/xem-phim/conan/conan-movie-18" element={<ConanMovie18 />} />
            <Route path="/xem-phim/conan/conan-movie-17" element={<ConanMovie17 />} />
            <Route path="/xem-phim/conan/conan-movie-16" element={<ConanMovie16 />} />
            <Route path="/xem-phim/conan/conan-movie-15" element={<ConanMovie15 />} />
            <Route path="/xem-phim/conan/conan-movie-14" element={<ConanMovie14 />} />
            <Route path="/xem-phim/conan/conan-movie-13" element={<ConanMovie13 />} />
            <Route path="/xem-phim/conan/conan-movie-12" element={<ConanMovie12 />} />
            <Route path="/xem-phim/conan/conan-movie-11" element={<ConanMovie11 />} />
            <Route path="/xem-phim/conan/conan-movie-10" element={<ConanMovie10 />} />
            <Route path="/xem-phim/conan/conan-movie-9" element={<ConanMovie9 />} />
            <Route path="/xem-phim/conan/conan-movie-8" element={<ConanMovie8 />} />
            <Route path="/xem-phim/conan/conan-movie-7" element={<ConanMovie7 />} />
            <Route path="/xem-phim/conan/conan-movie-6" element={<ConanMovie6 />} />
            <Route path="/xem-phim/conan/conan-movie-5" element={<ConanMovie5 />} />
            <Route path="/xem-phim/conan/conan-movie-4" element={<ConanMovie4 />} />
            <Route path="/xem-phim/conan/conan-movie-3" element={<ConanMovie3 />} />
            <Route path="/xem-phim/conan/conan-movie-2" element={<ConanMovie2 />} />
            <Route path="/xem-phim/conan/conan-movie-1" element={<ConanMovie1 />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
