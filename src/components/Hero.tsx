import { Phone, MessageCircle, Shield } from "lucide-react";
import officeMeeting from "@/assets/office-meeting.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${officeMeeting})` }}
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[hsl(220,14%,9%)]/85" />
      
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
            Defensa penal y asesoramiento legal para empresas
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4">
            Atención 24 hs. Actuación en Entre Ríos, Santa Fe y Justicia Federal.
          </p>

          {/* Ubicación */}
          <p className="text-sm text-white/50 mb-10">
            Paraná, Entre Ríos
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
