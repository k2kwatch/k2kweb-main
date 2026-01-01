import { useState, useEffect, useRef } from "react";
import { Search, X, Film, Tv } from "lucide-react";
import { conanMovies, hhMovies, tvSeries, doraemonMovie, HHTQMovies } from "@/data/movies";

interface SearchResult {
  type: "conan" | "hh" | "tv" | "doraemon" | "movie";
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#conan-movie", label: "Conan Movie" },
    { href: "#doraemon-movie", label: "Doraemon Movie" },
    { href: "#tv-series", label: "📺 TV Series" },
    { href: "#hhtq", label: "Hoạt Hình Trung Quốc" },
    { href: "#hh-dk-tq", label: "Hoạt Hình Điêu Khắc" },
  ];

  const totalMovies = conanMovies.length + hhMovies.length + tvSeries.length + doraemonMovie.length + HHTQMovies.length;
  const formattedTotal = new Intl.NumberFormat("vi-VN").format(totalMovies);
  const placeholderText = `Tìm kiếm với ${formattedTotal} phim...`;

  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();
    const results: SearchResult[] = [];

    if (searchFocused && q === "") {
      const popular: SearchResult[] = [];
      conanMovies.slice(0, 6).forEach((movie) =>
        popular.push({
          type: "conan",
          title: movie.title,
          subtitle: `Movie ${movie.movie} (${movie.year})`,
          img: movie.img,
          link: `xem-phim/conan/conan-movie-${movie.movie}`,
        })
      );
      hhMovies.slice(0, 6).forEach((movie) =>
        popular.push({
          type: "hh",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        })
      );
      tvSeries.slice(0, 6).forEach((movie) =>
        popular.push({
          type: "tv",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        })
      );
      setSearchResults(popular);
      return;
    }

    if (q === "") {
      setSearchResults([]);
      return;
    }

    const tokens = q.split(/\s+/).filter(Boolean);

    conanMovies.forEach((movie) => {
      const hay = `${movie.title} conan movie ${movie.movie} ${movie.year}`.toLowerCase();
      const matched = tokens.every((t) => hay.includes(t));
      if (matched) {
        results.push({
          type: "conan",
          title: movie.title,
          subtitle: `Movie ${movie.movie} (${movie.year})`,
          img: movie.img,
          link: `xem-phim/conan/conan-movie-${movie.movie}`,
        });
      }
    });

    hhMovies.forEach((movie) => {
      const hay = `${movie.title} ${movie.time} ${movie.link}`.toLowerCase();
      const matched = tokens.every((t) => hay.includes(t));
      if (matched) {
        results.push({
          type: "hh",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        });
      }
    });

    tvSeries.forEach((movie) => {
      const hay = `${movie.title} ${movie.time} ${movie.link}`.toLowerCase();
      const matched = tokens.every((t) => hay.includes(t));
      if (matched) {
        results.push({
          type: "tv",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        });
      }
    });

    doraemonMovie.forEach((movie) => {
      const hay = `${movie.title} doraemon movie ${movie.movie} ${movie.year}`.toLowerCase();
      const matched = tokens.every((t) => hay.includes(t));
      if (matched) {
        results.push({
          type: "doraemon",
          title: movie.title,
          subtitle: `Movie ${movie.movie} (${movie.year})`,
          img: movie.img,
          link: `xem-phim/doraemon/doraemon-movie-${movie.movie}`,
        });
      }
    });

    setSearchResults(results.slice(0, 37));
  }, [searchQuery, searchFocused]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4" ref={searchRef}>
        <a href="/" className="shrink-0 group">
          <img
            src="https://i.postimg.cc/8PxTnNp6/k2kwatch.png"
            alt="K2KWatch"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <div className="relative w-full max-w-md">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder={placeholderText}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-[#404040] text-white text-sm outline-none focus:border-[#ffc107] transition-all duration-200 placeholder:text-white/50 rounded"
              />
              {searchQuery ? (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              )}
            </div>
            <button className="px-5 py-2.5 bg-[#ffc107] text-black font-medium rounded hover:bg-[#ffb300] transition-colors duration-300 text-sm">
              Tìm
            </button>
          </div>

          {searchFocused && searchResults.length > 0 ? (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded overflow-hidden shadow-2xl z-50">
              <div className="p-3 border-b border-white/10">
                <p className="text-xs text-white/60">Tìm thấy {searchResults.length} kết quả</p>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {searchResults.map((result, index) => (
                  <a
                    key={`${result.type}-${index}`}
                    href={result.link}
                    className="flex items-center gap-3 p-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                  >
                    <div className="relative w-12 h-16 rounded overflow-hidden shrink-0">
                      <img src={result.img} alt={result.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{result.title}</p>
                      <p className="text-xs text-white/60 mt-1">{result.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          {searchFocused && searchQuery && searchResults.length === 0 ? (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded p-6 text-center shadow-2xl z-50">
              <Search className="w-8 h-8 text-white/40 mx-auto mb-2" />
              <p className="text-sm text-white/60">Không tìm thấy kết quả</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#ffc107] via-[#ffb300] to-[#ff9500]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 border-b border-white/10">
        <ul className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white font-medium text-sm md:text-base hover:text-[#ffc107] transition-colors duration-300 flex items-center gap-1"
              >
                {link.label}
                <span className="text-xs">▼</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
