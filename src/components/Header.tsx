import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#penal", label: "Penal" },
    { href: "#delitos", label: "Delitos" },
    { href: "#empresas", label: "Empresas" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 section-dark">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Wordmark */}
          <a href="#inicio" className="wordmark text-lg md:text-xl">
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
              className="btn-cta-primary text-sm px-6 py-3"
            >
              <Phone className="w-4 h-4" />
              Llamá ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden section-dark border-t border-border/20">
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
