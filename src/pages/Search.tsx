import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { conanMovies, hhMovies, tvSeries, doraemonMovie, HHTQMovies } from "@/data/movies";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const q = useQuery().get("q") || "";
  const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);

  const results = useMemo(() => {
    if (!q) return [];
    const out: any[] = [];

    const pushIf = (movie: any, type: string, link: string, subtitle: string) => {
      const hay = `${movie.title} ${movie.time ?? ""} ${movie.year ?? ""} ${link}`.toLowerCase();
      const matched = tokens.every((t) => hay.includes(t));
      if (matched) out.push({ title: movie.title, subtitle, img: movie.img, link });
    };

    conanMovies.forEach((m) => pushIf(m, "conan", `xem-phim/conan/conan-movie-${m.movie}`, `Movie ${m.movie} (${m.year})`));
    hhMovies.forEach((m) => pushIf(m, "hh", m.link, m.time));
    tvSeries.forEach((m) => pushIf(m, "tv", m.link, m.time));
    doraemonMovie.forEach((m) => pushIf(m, "doraemon", `xem-phim/doraemon/doraemon-movie-${m.movie}`, `Movie ${m.movie} (${m.year})`));
    HHTQMovies.forEach((m) => pushIf(m, "hhtq", m.link, m.time));

    return out.slice(0, 200);
  }, [q]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-white text-2xl font-semibold mb-4">Kết quả tìm kiếm cho "{q}"</h1>
      {q === "" ? (
        <p className="text-white/60">Nhập từ khóa để tìm phim.</p>
      ) : results.length === 0 ? (
        <p className="text-white/60">Không tìm thấy kết quả.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {results.map((r, i) => (
            <a key={i} href={r.link} className="block bg-[#0b0b0b] rounded overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <p className="text-sm text-white truncate">{r.title}</p>
                <p className="text-xs text-white/60">{r.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
