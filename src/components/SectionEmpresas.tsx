import { Building2, ClipboardList, Users } from "lucide-react";

const serviciosEmpresas = [
  {
    icon: Building2,
    title: "Empresas",
    items: [
      "Asesoramiento legal preventivo",
      "Cumplimiento normativo",
      "Reestructuración legal",
      "Contratos",
    ],
  },
  {
    icon: ClipboardList,
    title: "Protocolos y Gestión",
    items: [
      "Conducta / confidencialidad / conflictos",
      "Gestión de incidentes internos",
      "Organización documental (auditorías/inspecciones)",
    ],
  },
  {
    icon: Users,
    title: "Sociedades y Laboral",
    items: [
      "Sociedades (constitución / reformas / actas)",
      "Acuerdos y conciliaciones laborales",
    ],
  },
];

const SectionEmpresas = () => {
  return (
    <section id="empresas" className="section-light section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label text-petrol">Para empresas</p>
          <h2 className="section-title text-light-foreground">
            Asesoramiento legal corporativo
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {serviciosEmpresas.map((servicio, index) => (
            <div key={index} className="service-card-light">
              <servicio.icon className="w-8 h-8 text-petrol mb-6" />
              <h3 className="font-serif text-xl font-medium text-light-foreground mb-4">
                {servicio.title}
              </h3>
              <ul className="space-y-2">
                {servicio.items.map((item, i) => (
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

export default SectionEmpresas;
