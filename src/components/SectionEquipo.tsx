import naimChemez from "@/assets/naim-chemez.jpg";
import gonzaloMeglio from "@/assets/gonzalo-meglio.jpg";
import Reveal from "@/components/Reveal";

const socios = [
  {
    nombre: "Gonzalo Meglio",
    cargo: "Socio",
    foto: gonzaloMeglio,
    bio: [
      "Abogado por la Universidad Nacional del Litoral. Magíster en Derecho Penal por la Universidad Autónoma de Madrid, España, con trabajo final de máster sobre: “El fútbol como vehículo de lavado: diagnóstico penal y propuesta de cumplimiento”. Programas de Inteligencia Artificial en el Proceso Penal y de Derecho y Startups, Universidad Austral.",
      "Integra el equipo del estudio desde 2019, con intervención en defensas y querellas penales ante los tribunales de Entre Ríos, Santa Fe y la justicia federal. Experiencia en despachos penales de la ciudad de Madrid, España. Asesora a empresas en prevención de riesgos y compliance.",
    ],
  },
  {
    nombre: "Naim Chemez",
    cargo: "Socio",
    foto: naimChemez,
    bio: [
      "Abogado por la Pontificia Universidad Católica Argentina (UCA). Concluyó el cursado de la Especialización en Derecho Penal en la misma casa de estudios y actualmente se encuentra en la etapa de elaboración de su tesis. Diplomado en Derecho Penal Económico por la Universidad Austral.",
      "Ejercicio liberal de la profesión en materia penal, con actuación ante los tribunales de la provincia de Entre Ríos y la justicia federal.",
      "Docente adscripto en la cátedra de Derecho Penal – Parte General de la Pontificia Universidad Católica Argentina, sede Paraná.",
    ],
  },
];

const SectionEquipo = () => {
  return (
    <section id="equipo" className="section-dark section-spacing scroll-mt-20">
      <div className="container-main">
        <Reveal className="mb-14 max-w-2xl space-y-6">
          <p className="section-eyebrow">
            <span className="section-number">02</span> Equipo
          </p>
          <h2 className="section-title">
            Compromiso profesional y atención personalizada
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            En MEGLIO &amp; CHEMEZ ABOGADOS brindamos asesoramiento legal con un enfoque
            cercano y profesional. Cada caso recibe atención individualizada,
            priorizando la comunicación directa con nuestros clientes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-16">
          {socios.map((socio, index) => (
            <Reveal key={socio.nombre} delay={index * 100}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={socio.foto}
                    alt={`Dr. ${socio.nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-medium">
                  {socio.nombre}
                </h3>
                <p className="section-eyebrow mt-2 mb-5">{socio.cargo}</p>
                <div className="space-y-3 text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                  {socio.bio.map((parrafo, i) => (
                    <p key={i}>{parrafo}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEquipo;
