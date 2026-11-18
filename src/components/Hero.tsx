import { Phone, MessageCircle, Shield } from "lucide-react";
import socios from "@/assets/hero-socios.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-[hsl(220,14%,7%)] pt-28 md:pt-36 lg:pt-32 lg:pb-20 lg:min-h-screen lg:flex lg:items-center overflow-hidden">
      <div className="container-main lg:grid lg:grid-cols-[5fr_7fr] lg:gap-12 xl:gap-16 lg:items-center">
      {/* Contenido */}
      <div className="relative z-10">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-5 text-white">
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
              href="https://wa.me/5493435032674"
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

      {/* Foto del equipo */}
      <div className="relative mt-12 -mx-6 sm:mx-0 lg:mt-0">
        <img
          src={socios}
          alt="Equipo de Fontanetto & Palomeque y Asociados en el estudio"
          fetchPriority="high"
          className="w-full h-auto"
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;