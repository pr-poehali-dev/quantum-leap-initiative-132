export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl tracking-tight text-foreground">
            Россия XX века
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#philosophy" className="hover:text-foreground transition-colors duration-300">
              О проекте
            </a>
            <a href="#features" className="hover:text-foreground transition-colors duration-300">
              Темы
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors duration-300">
              Материалы
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">
              Контакт
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">2026 · Учебный проект для колледжа</p>
        </div>

        {/* Large decorative element */}
        <div className="mt-20 text-center">
          <span className="font-serif text-[10rem] md:text-[14rem] leading-none text-border/50 select-none">1900</span>
        </div>
      </div>
    </footer>
  );
}
