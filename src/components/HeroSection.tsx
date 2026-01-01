const HeroSection = () => {
  return (
    <header className="relative max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="text-center md:text-left order-2 md:order-1 relative z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 text-primary font-mono text-[10px] md:text-xs tracking-widest mb-6 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 uppercase">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          made by k2kteam - kdz with love ❤️
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight uppercase tracking-tight">
          k2k<span className="text-gradient">watch</span>
        </h1>
        
        <p className="text-muted-foreground font-mono text-xs md:text-sm max-w-lg mx-auto md:mx-0 leading-relaxed">
          Nền tảng xem phim Anime và Hoạt Hình Trung Quốc đỉnh cao. 
          <br className="hidden md:block" />
          Mượt mà trên mọi thiết bị.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8">
          <a
            href="#mainbody"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            Khám phá ngay
          </a>
        </div>
      </div>

      <div className="relative group order-1 md:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
        <img
          src="//i.postimg.cc/8PxTnNp6/k2kwatch.png"
          alt="K2KWatch Logo"
          className="w-48 md:w-80 relative z-10 animate-float drop-shadow-2xl"
        />
      </div>
    </header>
  );
};

export default HeroSection;
