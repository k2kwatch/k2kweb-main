import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
// import Navbar from "@/components/Navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import MovieCard from "@/components/MovieCard";
import HHCard from "@/components/HHCard";
import { conanMovies, hhMovies, tvSeries } from "@/data/movies";
import TVCard from "@/components/TVSeriesCard";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <AnnouncementBanner />
      <HeroSection />

      <main id="mainbody" className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <section id="conan-movie" className="mb-24">
          <SectionTitle
            title="Thám Tử Lừng Danh Conan Movie"
            subtitle="Cập nhật nhanh vip pro"
            variant="primary"
          />
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


        <section id="tv-series" className="mb-24">
          <SectionTitle
            title="Hoạt Hình - TV Series"
            subtitle="Có cả Vietsub & Lồng Tiếng"
            variant="secondary"
          />
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


        <section id="hh-dk-tq" className="mb-16">
          <SectionTitle
            title="Hoạt Hình Trung Quốc"
            subtitle="Phim điêu khắc, ngắn,.."
            variant="secondary"
          />
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
