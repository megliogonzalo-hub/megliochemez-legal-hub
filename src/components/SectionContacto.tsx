import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const SectionContacto = () => {
  return (
    <section id="contacto" className="section-light section-spacing scroll-mt-20">
      <div className="container-main">
        <Reveal className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <p className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase text-[hsl(216,13%,16%)]/55 mb-5">
            <span className="section-number">03</span> Contacto
          </p>
          <h2 className="section-title text-light-foreground mb-4">
            Hablemos de tu caso
          </h2>

          {/* Atención 24 hs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <Clock className="w-5 h-5 text-[hsl(216,13%,16%)]" />
            <span className="text-lg font-medium text-light-foreground">
              Atención 24 hs
            </span>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:+543435032674" className="btn-cta-dark">
              <Phone className="w-5 h-5" />
              Llamá ahora
            </a>
            <a
              href="https://wa.me/543435032674"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary text-light-foreground border-light-foreground/30 hover:bg-light-foreground/5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Info de contacto */}
          <div className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-[hsl(220,10%,85%)]">
            {/* Teléfono */}
            <div className="text-center">
              <Phone className="w-5 h-5 text-[hsl(216,13%,16%)] mx-auto mb-3" />
              <p className="text-sm text-gray-medium mb-3">Teléfono</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-medium mb-0.5">Dr. Gonzalo Meglio</p>
                  <a
                    href="tel:+543435032674"
                    className="text-light-foreground transition-opacity hover:opacity-70"
                  >
                    +54 343 503-2674
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-medium mb-0.5">Dr. Naim Chemez</p>
                  <a
                    href="tel:+543434506420"
                    className="text-light-foreground transition-opacity hover:opacity-70"
                  >
                    +54 343 450-6420
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="text-center">
              <Mail className="w-5 h-5 text-[hsl(216,13%,16%)] mx-auto mb-3" />
              <p className="text-sm text-gray-medium mb-3">Email</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-medium mb-0.5">Dr. Gonzalo Meglio</p>
                  <a
                    href="mailto:megliogonzalo@gmail.com"
                    className="text-sm text-light-foreground transition-opacity hover:opacity-70 break-words"
                  >
                    megliogonzalo@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-medium mb-0.5">Dr. Naim Chemez</p>
                  <a
                    href="mailto:naimchemez17@gmail.com"
                    className="text-sm text-light-foreground transition-opacity hover:opacity-70 break-words"
                  >
                    naimchemez17@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div className="text-center">
              <MapPin className="w-5 h-5 text-[hsl(216,13%,16%)] mx-auto mb-3" />
              <p className="text-sm text-gray-medium mb-1">Dirección</p>
              <a
                href="https://maps.app.goo.gl/GAXcwNpE2uwcEsKm9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-foreground transition-opacity hover:opacity-70"
              >
                Victoria 3, Paraná
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionContacto;
