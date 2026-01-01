import { useState, useEffect, useRef } from "react";
import { Search, X, Film, Tv } from "lucide-react";
import { conanMovies, hhMovies, tvSeries } from "@/data/movies";

interface SearchResult {
  type: "conan" | "hh" | "tv";
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
    { href: "#conan-movie", label: "🔍 Conan Movie" },
    { href: "#tv-series", label: "📺 TV Series" },
    { href: "#hh-dk-tq", label: "🏮 Hoạt Hình Trung Quốc" },
  ];

  const totalMovies = conanMovies.length + hhMovies.length + tvSeries.length;
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

    setSearchResults(results.slice(0, 28));
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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#22314a] via-[#4b2b67] to-[#0aa3b5] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between gap-4 md:gap-6">

        <a href="/" className="shrink-0 group">
          <img
            src="https://i.postimg.cc/8PxTnNp6/k2kwatch.png"
            alt="K2KWatch"
            className="h-8 md:h-12 transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <div className="flex-1 flex justify-center" ref={searchRef}>
          <div className="w-full max-w-[760px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 z-10 text-white/70" />

            <input
              type="text"
              placeholder={placeholderText}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              className="w-full rounded-full pl-11 pr-11 py-2.5 bg-[#0f2130] border border-white/10 text-white text-sm outline-none focus:ring-2 focus:ring-white/10 transition-all duration-200 placeholder:text-white/60 placeholder:opacity-90"
            />

            {searchQuery ? (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}

            <div
              className={
                "absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none " +
                (searchFocused ? "opacity-100" : "opacity-0")
              }
              style={{ boxShadow: "0 0 30px rgba(255,255,255,0.04)" }}
            />

            {searchFocused && searchResults.length > 0 ? (
              <div className="absolute top-full left-0 right-0 mt-3 bg-[#071221] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
                <div className="p-2 border-b border-white/6">
                  <p className="text-xs text-white/60 px-2">Tìm thấy {searchResults.length} kết quả</p>
                </div>
                <div className="max-h-[420px] overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <a
                      key={`${result.type}-${index}`}
                      href={result.link}
                      className="flex items-center gap-3 p-3 hover:bg-blue/4 transition-colors group"
                    >
                      <div className="relative w-12 h-16 rounded-lg overflow-hidden shrink-0">
                        <img src={result.img} alt={result.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{result.title}</p>
                        <p className="text-xs text-white/60 mt-0.5">{result.subtitle}</p>
                      </div>
                      <div className="shrink-0">{result.type === "conan" ? <Film className="w-4 h-4 text-white/80" /> : <Tv className="w-4 h-4 text-white/60" />}</div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {searchFocused && searchQuery && searchResults.length === 0 ? (
              <div className="absolute top-full left-0 right-0 mt-3 bg-[#071221] border border-white/10 rounded-xl p-6 text-center shadow-2xl z-50">
                <Search className="w-8 h-8 text-white/60 mx-auto mb-2" />
                <p className="text-sm text-white/60">Không tìm thấy kết quả cho "{searchQuery}"</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ul className="flex items-center gap-6 md:gap-8 text-xs md:text-sm py-3 overflow-x-auto no-scrollbar whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
