import { Scale, Unlock, FileText } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Defensas y Querellas Penales",
    items: [
      "Asistencia a detenidos",
      "Denuncias y ampliaciones",
      "Defensas en IPP",
      "Juicio Oral",
    ],
  },
  {
    icon: Unlock,
    title: "Medidas y Libertad",
    items: [
      "Medidas cautelares",
      "Libertad / excarcelaciones",
      "Audiencias",
    ],
  },
  {
    icon: FileText,
    title: "Recursos e Impugnaciones",
    items: [
      "Apelaciones",
      "Casación",
      "Nulidades / revisiones",
    ],
  },
];

const SectionPenal = () => {
  return (
    <section id="penal" className="section-light section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label text-petrol">Área destacada</p>
          <h2 className="section-title text-light-foreground">Derecho Penal</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card-light">
              <service.icon className="w-8 h-8 text-petrol mb-6" />
              <h3 className="font-serif text-xl font-medium text-light-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-medium text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPenal;
