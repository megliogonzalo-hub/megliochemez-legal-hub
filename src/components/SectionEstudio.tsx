import fontanetto from "@/assets/fontanetto.jpg";
import naimChemez from "@/assets/naim-chemez.jpg";
import gonzaloMeglio from "@/assets/gonzalo-meglio.jpg";
import VideoInstitucional from "@/components/VideoInstitucional";
import Reveal from "@/components/Reveal";

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
    especializacion2: "Diplomando en Derecho Penal Económico · Universidad Austral",
  },
];

const SectionEstudio = () => {
  return (
    <section id="estudio" className="section-dark section-spacing scroll-mt-20">
      <div className="container-main">
        {/* Encabezado + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto institucional */}
          <Reveal className="space-y-6">
            <p className="section-eyebrow">
              <span className="section-number">01</span> El estudio
            </p>
            <h2 className="section-title">
              Defensa penal estratégica y técnica
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Formamos parte de un estudio especializado exclusivamente en derecho penal, con más de 12 años de experiencia y sólida formación académica y profesional.
              </p>
              <p>
                Trabajamos cada caso con el rigor y la dedicación que merece. Contamos con un equipo de profesionales que interviene en cada instancia, permitiendo un abordaje integral para respetar rigurosamente los derechos y garantías de nuestros clientes.
              </p>
              <p>
                Atendemos urgencias las 24 horas en toda la provincia de Entre Ríos y jurisdicciones federales.
              </p>
            </div>
          </Reveal>

          {/* Video vertical */}
          <Reveal delay={120}>
            <VideoInstitucional />
          </Reveal>
        </div>

        {/* Filete divisorio */}
        <div className="hairline my-16 md:my-24" />

        {/* Equipo */}
        <Reveal className="mb-14 max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-6">
            Compromiso profesional y atención personalizada
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            En MEGLIO &amp; CHEMEZ ABOGADOS brindamos asesoramiento legal con un enfoque
            cercano y profesional. Cada caso recibe atención individualizada,
            priorizando la comunicación directa con nuestros clientes.
          </p>
        </Reveal>

        {/* Socios */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {socios.map((socio, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={socio.foto}
                    alt={socio.nombre}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="font-serif text-2xl font-medium mb-2">
                  {socio.nombre}
                </h4>
                <p className="text-muted-foreground text-sm mb-1">
                  {socio.titulo}
                </p>
                <p className="text-foreground/75 text-sm font-medium">
                  {socio.especializacion}
                </p>
                {socio.especializacion2 && (
                  <p className="text-foreground/75 text-sm font-medium">
                    {socio.especializacion2}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Foto del estudio */}
        <Reveal>
          <div className="overflow-hidden group">
            <img
              src={fontanetto}
              alt="Estudio Fontanetto & Palomeque"
              className="w-full h-96 object-cover object-[80%_40%] md:object-[center_40%] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

        {/* Texto adicional */}
        <Reveal className="mt-8 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            Formamos parte del estudio de los Dres. Pedro Fontanetto y Germán Palomeque,
            quienes con sus más de 12 años de experiencia brindan su conocimiento
            en cada causa que atendemos.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionEstudio;
