import { Phone, MessageCircle, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="section-dark min-h-screen flex items-center pt-24">
      <div className="container-main">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6">
            Defensa penal y asesoramiento legal para empresas
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
            Atención 24 hs. Actuación en Entre Ríos, Santa Fe y Justicia Federal.
          </p>

          {/* Ubicación */}
          <p className="text-sm text-muted-foreground mb-10">
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
