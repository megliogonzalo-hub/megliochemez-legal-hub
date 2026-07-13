import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#estudio", label: "El estudio" },
    { href: "#areas", label: "Áreas" },
    { href: "#contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 section-dark border-b transition-all duration-300 ${
        scrolled ? "border-foreground/10 bg-[hsl(220,14%,9%)]/95 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="container-main">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Wordmark */}
          <a href="#inicio" className="wordmark text-base md:text-lg">
            MEGLIO & CHEMEZ
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs text-muted-foreground">24 hs</span>
            <a
              href="tel:+543435032674"
              className="btn-cta-primary text-sm px-5 py-2.5"
            >
              <Phone className="w-4 h-4" />
              Llamá ahora
            </a>
          </div>

          {/* Mobile: CTA visible + menú */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+543435032674"
              className="btn-cta-primary text-sm px-4 py-2"
              aria-label="Llamá ahora"
            >
              <Phone className="w-4 h-4" />
              Llamá
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden section-dark border-t border-foreground/10">
          <div className="container-main py-6">
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="text-xs text-muted-foreground">Atención 24 hs</span>
              <a
                href="tel:+543435032674"
                className="btn-cta-primary justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Llamá ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
