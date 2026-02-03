import teamDesk from "@/assets/team-desk.jpg";

const SectionEquipo = () => {
  return (
    <section className="section-dark section-spacing">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={teamDesk}
                alt="Equipo de MEGLIO & CHEMEZ ABOGADOS"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <p className="section-label">El estudio</p>
            <h2 className="section-title">
              Compromiso profesional y atención personalizada
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              En MEGLIO & CHEMEZ ABOGADOS brindamos asesoramiento legal con un enfoque 
              cercano y profesional. Cada caso recibe atención individualizada, 
              priorizando la comunicación directa con nuestros clientes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Actuamos en toda la provincia de Entre Ríos, Santa Fe y ante la justicia federal, 
              con disponibilidad las 24 horas para situaciones urgentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEquipo;
