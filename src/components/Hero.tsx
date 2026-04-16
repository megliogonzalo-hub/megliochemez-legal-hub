import { Phone, MessageCircle, Shield } from "lucide-react";
import socios from "@/assets/socios-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={socios}
        alt="Meglio & Chemez Abogados"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,14%,7%)]/92 via-[hsl(220,14%,9%)]/80 to-[hsl(220,14%,9%)]/50" />

      {/* Contenido */}
      <div className="container-main relative z-10">
        <div className="max-w-4xl">
          {/* Badge de confianza */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-primary" />
              Matrícula Federal
            </div>
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-primary" />
              Matrícula Provincial
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6 text-white">
            Abogados Penalistas
          </h1>

          {/* Ubicación */}
          <p className="text-sm text-white/50 mb-10">
            Paraná, Entre Ríos · Matrícula Federal y Provincial
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+543435032674"
              className="btn-cta-primary"
            >
              <Phone className="w-5 h-5" />
              Llamá ahora
            </a>
            <a
              href="https://wa.me/543435032674"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
