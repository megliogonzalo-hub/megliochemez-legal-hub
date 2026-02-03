import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const SectionContacto = () => {
  return (
    <section id="contacto" className="section-light section-spacing">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <p className="section-label text-petrol">Contacto</p>
          <h2 className="section-title text-light-foreground mb-4">
            Hablemos de tu caso
          </h2>
          
          {/* Atención 24 hs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <Clock className="w-5 h-5 text-petrol" />
            <span className="text-lg font-medium text-light-foreground">
              Atención 24 hs
            </span>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+543435032674"
              className="btn-cta-dark"
            >
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
              <Phone className="w-5 h-5 text-petrol mx-auto mb-3" />
              <p className="text-sm text-gray-medium mb-1">Teléfono</p>
              <a
                href="tel:+543435032674"
                className="text-light-foreground hover:text-petrol transition-colors"
              >
                +54 343 503-2674
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <Mail className="w-5 h-5 text-petrol mx-auto mb-3" />
              <p className="text-sm text-gray-medium mb-1">Email</p>
              <a
                href="mailto:megliogonzalo@gmail.com"
                className="text-light-foreground hover:text-petrol transition-colors"
              >
                megliogonzalo@gmail.com
              </a>
            </div>

            {/* Dirección */}
            <div className="text-center">
              <MapPin className="w-5 h-5 text-petrol mx-auto mb-3" />
              <p className="text-sm text-gray-medium mb-1">Dirección</p>
              <a
                href="https://maps.app.goo.gl/GAXcwNpE2uwcEsKm9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-foreground hover:text-petrol transition-colors"
              >
                Victoria 3, Paraná
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContacto;
