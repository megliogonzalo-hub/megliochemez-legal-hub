import { Phone, MessageCircle, Shield } from "lucide-react";
import socios from "@/assets/hero-socios.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-0 overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={socios}
        alt="Meglio & Chemez Abogados"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 45%" }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[hsl(220,14%,7%)]/70 md:bg-transparent md:[background:linear-gradient(to_right,hsl(220,14%,7%)/92%,hsl(220,14%,9%)/80%,hsl(220,14%,9%)/50%)]" />

      {/* Contenido */}
      <div className="container-main relative z-10">
        <div className="max-w-4xl">
          {/* Badge de confianza */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-foreground/50" />
              Matrícula Federal
            </div>
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-foreground/50" />
              Matrícula Provincial
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-5 text-white">
            ABOGADOS PENALISTAS
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-xl text-white/80 mb-4 max-w-2xl">
            Nos dedicamos a la defensa penal estratégica en delitos comunes y causas complejas en el fuero Provincial y Federal.
          </p>

          {/* Ubicación */}
          <p className="text-sm text-white/50 mb-10">
            Paraná, Entre Ríos · Matrícula Federal y Provincial
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
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