import teamDesk from "@/assets/team-desk.jpg";
import naimChemez from "@/assets/naim-chemez.jpg";
import gonzaloMeglio from "@/assets/gonzalo-meglio.jpg";

const socios = [
  {
    nombre: "Dr. Gonzalo Meglio",
    foto: gonzaloMeglio,
    titulo: "Abogado graduado en la Universidad Nacional del Litoral",
    especializacion: "Magíster en Derecho Penal por la Universidad Autónoma de Madrid",
  },
  {
    nombre: "Dr. Naim Chemez",
    foto: naimChemez,
    titulo: "Abogado graduado en la Pontificia Universidad Católica Argentina",
    especializacion: "Especializando en Derecho Penal UCA Sede Rosario",
  },
];

const SectionEquipo = () => {
  return (
    <section className="section-dark section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">El estudio</p>
          <h2 className="section-title">
            Compromiso profesional y atención personalizada
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            En MEGLIO & CHEMEZ ABOGADOS brindamos asesoramiento legal con un enfoque 
            cercano y profesional. Cada caso recibe atención individualizada, 
            priorizando la comunicación directa con nuestros clientes.
          </p>
        </div>

        {/* Socios */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {socios.map((socio, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={socio.foto}
                  alt={socio.nombre}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-2">
                {socio.nombre}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {socio.titulo}
              </p>
              <p className="text-primary text-sm font-medium">
                {socio.especializacion}
              </p>
            </div>
          ))}
        </div>

        {/* Imagen del equipo */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
          <img
            src={teamDesk}
            alt="Equipo de MEGLIO & CHEMEZ ABOGADOS"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Texto adicional */}
        <div className="mt-12 max-w-2xl">
          <p className="text-muted-foreground leading-relaxed">
            Actuamos en toda la provincia de Entre Ríos, Santa Fe y ante la Justicia Federal, 
            con disponibilidad las 24 horas para situaciones urgentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionEquipo;
