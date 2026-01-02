import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import MovieCard from "@/components/MovieCard";
import HHCard from "@/components/HHCard";
import { conanMovies, doraemonMovie, hhMovies, tvSeries, HHTQMovies } from "@/data/movies";
import TVCard from "@/components/TVSeriesCard";
import HHTQCard from "@/components/HHTQCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <AnnouncementBanner />
      <HeroSection />

      <main id="mainbody" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <section className="mb-20">
          <div id="doraemon-movie" className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Doraemon Movie
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <ScrollArea className="w-full">
              <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {doraemonMovie.map((movie, index) => (
                  <div
                    key={`doraemon-${movie.movie}`}
                    className="animate-slide-up"
                    style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
                  >
                    <MovieCard
                      title={movie.title}
                      image={movie.img}
                      movie={movie.movie}
                      year={movie.year}
                      badge={movie.badge}
                      link={`xem-phim/doraemon/doraemon-movie-${movie.movie}`}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-20">
          <div id="conan-movie" className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Thám Tử Lừng Danh Conan Movie
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {conanMovies.map((movie, index) => (
              <div
                key={`conan-${movie.movie}`}
                className="animate-slide-up"
                style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
              >
                <MovieCard
                  title={movie.title}
                  image={movie.img}
                  movie={movie.movie}
                  year={movie.year}
                  badge={movie.badge}
                  link={`xem-phim/conan/conan-movie-${movie.movie}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div id="tv-series" className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hoạt Hình - TV Series
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tvSeries.map((movie, index) => (
              <div
                key={`tv-${index}`}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TVCard
                  title={movie.title}
                  image={movie.img}
                  time={movie.time}
                  link={movie.link}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div id="hhtq" className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hoạt Hình Trung Quốc
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HHTQMovies.map((movie, index) => (
              <div
                key={`hhtq-${index}`}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <HHTQCard
                  title={movie.title}
                  image={movie.img}
                  link={movie.link}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div id="hh-dk-tq" className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Hoạt Hình Điêu Khắc
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hhMovies.map((movie, index) => (
              <div
                key={`hh-${index}`}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <HHCard
                  title={movie.title}
                  image={movie.img}
                  time={movie.time}
                  link={movie.link}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
