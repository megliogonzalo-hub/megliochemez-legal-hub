import fontanetto from "@/assets/fontanetto.jpg";
import VideoInstitucional from "@/components/VideoInstitucional";
import Reveal from "@/components/Reveal";

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
                Formamos parte de un estudio especializado exclusivamente en derecho penal, con más de trece años de experiencia y sólida formación académica y profesional.
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

        {/* Fontanetto & Palomeque y Asociados */}
        <Reveal className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Formamos parte del estudio
          </p>
          <h3 className="font-serif text-2xl md:text-4xl font-medium leading-tight">
            FONTANETTO &amp; PALOMEQUE Y ASOCIADOS
          </h3>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden group">
            <img
              src={fontanetto}
              alt="Equipo de Fontanetto & Palomeque y Asociados"
              loading="lazy"
              className="w-full h-auto md:h-96 object-cover md:object-[center_40%] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

        <Reveal className="mt-10 grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Más de trece años de ejercicio en defensas y querellas penales, con actuación
              en los fueros provinciales y en la justicia federal.
            </p>
            <p>
              Un equipo que reúne experiencia en el Ministerio Público Fiscal, docencia
              universitaria en derecho penal y formación especializada, nacional e
              internacional, en cada una de las áreas del derecho penal.
            </p>
          </div>
          <div className="space-y-4 leading-relaxed">
            <p className="text-muted-foreground">
              Intervención en todas las etapas del proceso: investigación, juicio, recursos
              y ejecución.
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
              Cinco abogados en cada etapa del proceso. Prevención, asesoramiento y defensa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionEstudio;
