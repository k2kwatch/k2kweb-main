import { useEffect, useState } from "react";
import { Search, X, Menu, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { conanMovies, hhMovies, tvSeries, doraemonMovie, HHTQMovies } from "@/data/movies";

interface SearchResult {
  type: string;
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { href: "/#conan-movie", label: "Conan Movie" },
    { href: "/#doraemon-movie", label: "Doraemon Movie" },
    { href: "/#tv-series", label: "📺 TV Series" },
    { href: "/#hhtq", label: "Hoạt Hình Trung Quốc" },
    { href: "/#hh-dk-tq", label: "Hoạt Hình Điêu Khắc" },
  ];

  const totalMovies =
    conanMovies.length + hhMovies.length + tvSeries.length + doraemonMovie.length + HHTQMovies.length;
  const formattedTotal = new Intl.NumberFormat("vi-VN").format(totalMovies);
  const placeholderText = `Tìm kiếm với ${formattedTotal} phim...`;

  const goSearch = (q: string) => {
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();
    const results: SearchResult[] = [];

    if (searchOpen && q === "") {
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

      doraemonMovie.slice(0, 6).forEach((movie) =>
        popular.push({
          type: "doraemon",
          title: movie.title,
          subtitle: `Movie ${movie.movie} (${movie.year})`,
          img: movie.img,
          link: `xem-phim/doraemon/doraemon-movie-${movie.movie}`,
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

      HHTQMovies.slice(0, 6).forEach((movie) =>
        popular.push({
          type: "hhtq",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        })
      );

      setSearchResults(popular.slice(0, 37));
      return;
    }

    if (q === "") {
      setSearchResults([]);
      return;
    }

    const tokens = q.split(/\s+/).filter(Boolean);

    conanMovies.forEach((movie) => {
      const hay = `${movie.title} conan movie ${movie.movie} ${movie.year}`.toLowerCase();
      if (tokens.every((t) => hay.includes(t))) {
        results.push({
          type: "conan",
          title: movie.title,
          subtitle: `Movie ${movie.movie} (${movie.year})`,
          img: movie.img,
          link: `xem-phim/conan/conan-movie-${movie.movie}`,
        });
      }
    });

    doraemonMovie.forEach((movie) => {
      const hay = `${movie.title} doraemon movie ${movie.movie} ${movie.year}`.toLowerCase();
      if (tokens.every((t) => hay.includes(t))) {
        results.push({
          type: "doraemon",
          title: movie.title,
          subtitle: `Movie ${movie.movie} (${movie.year})`,
          img: movie.img,
          link: `xem-phim/doraemon/doraemon-movie-${movie.movie}`,
        });
      }
    });

    hhMovies.forEach((movie) => {
      const hay = `${movie.title} ${movie.time} ${movie.link}`.toLowerCase();
      if (tokens.every((t) => hay.includes(t))) {
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
      if (tokens.every((t) => hay.includes(t))) {
        results.push({
          type: "tv",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        });
      }
    });

    HHTQMovies.forEach((movie) => {
      const hay = `${movie.title} ${movie.time} ${movie.link}`.toLowerCase();
      if (tokens.every((t) => hay.includes(t))) {
        results.push({
          type: "hhtq",
          title: movie.title,
          subtitle: movie.time,
          img: movie.img,
          link: movie.link,
        });
      }
    });

    setSearchResults(results.slice(0, 37));
  }, [searchQuery, searchOpen]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <nav className="sticky top-4 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-[#0a0a0a] text-white rounded-2xl px-4 md:px-6 py-3 shadow-md flex items-center gap-4">
          <a href="/" className="shrink-0 group flex items-center gap-3">
            <img
              src="https://i.postimg.cc/8PxTnNp6/k2kwatch.png"
              alt="K2KWatch"
              className="h-9 md:h-10 transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="hidden xl:flex items-center gap-1 overflow-x-auto no-scrollbar shrink min-w-0">
            {navLinks.slice(0, 3).map((link) => (
              <Button asChild variant="ghost" size="sm" key={link.href}>
                <a href={link.href} className="text-white/90 px-3 py-1 rounded-sm text-sm">
                  {link.label}
                </a>
              </Button>
            ))}
            
            {navLinks.length > 3 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white/90 px-3 py-1 text-sm">
                    <span>Khác</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0a0a0a] border-white/10">
                  {navLinks.slice(3).map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a href={link.href} className="text-white/90 cursor-pointer text-sm">
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <div className="flex-1 min-w-0 hidden md:flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 w-full max-w-[980px]">
              <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                <PopoverPrimitive.Anchor asChild>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      name="q"
                      placeholder={placeholderText}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchOpen(true)}
                      className="w-full px-4 py-2.5 bg-[#121212] border border-[#2b2b2b] text-white text-sm outline-none focus:border-[#ffc107] transition-all duration-200 placeholder:text-white/50 rounded"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          goSearch(searchQuery);
                          setSearchOpen(false);
                        }
                        if (e.key === "Escape") setSearchOpen(false);
                      }}
                    />
                    {searchQuery ? (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    ) : (
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                    )}
                  </div>
                </PopoverPrimitive.Anchor>

                {searchResults.length > 0 ? (
                  <PopoverContent
                    align="start"
                    sideOffset={8}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className="p-0 bg-[#1a1a1a] border-white/20 w-[min(980px,calc(100vw-2rem))]"
                  >
                    <div className="p-3 border-b border-white/10">
                      <p className="text-xs text-white/60">Tìm thấy {searchResults.length} kết quả</p>
                    </div>
                    <div className="max-h-[320px] overflow-y-auto">
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
                  </PopoverContent>
                ) : null}
              </Popover>

              <button
                type="button"
                onClick={() => goSearch(searchQuery)}
                className="px-4 py-2 bg-[#ffc107] text-black font-medium rounded hover:bg-[#ffb300] transition-colors duration-300 text-sm shrink-0"
              >
                Tìm
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle search"
              onClick={() => setMobileSearchOpen((s) => !s)}
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              <Menu className={`w-6 h-6 text-white transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`} />
            </button>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#ffc107] via-[#ffb300] to-[#ff9500] rounded-b-md mt-2" />

        {mobileSearchOpen ? (
          <div className="md:hidden mt-3 px-4 pb-3">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder={placeholderText}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-[#2b2b2b] text-white text-sm outline-none focus:border-[#ffc107] transition-all duration-200 placeholder:text-white/50 rounded"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      goSearch(searchQuery);
                      setSearchOpen(false);
                      setMobileSearchOpen(false);
                    }
                  }}
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => goSearch(searchQuery)}
                className="px-3 py-2 bg-[#ffc107] text-black font-medium rounded hover:bg-[#ffb300] transition-colors duration-300 text-sm"
              >
                Tìm
              </button>
            </form>
          </div>
        ) : null}

        {menuOpen ? (
          <div className="fixed inset-0 z-[200]">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#0b0b0b] p-4 overflow-y-auto animate-in slide-in-from-left-full duration-300">
              <div className="flex items-center justify-between mb-4">
                <a href="/" className="flex items-center gap-2">
                  <img src="https://i.postimg.cc/8PxTnNp6/k2kwatch.png" alt="logo" className="h-8" />
                </a>
                <button onClick={() => setMenuOpen(false)} className="p-2">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
