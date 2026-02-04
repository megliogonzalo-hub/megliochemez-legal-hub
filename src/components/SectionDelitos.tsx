const delitos = [
  {
    title: "Narcotráfico / Estupefacientes",
    items: [
      "Tenencia y transporte",
      "Comercialización",
      "Narcomenudeo",
      "Allanamientos y detenciones",
    ],
  },
  {
    title: "Estafas y Económicos",
    items: [
      "Estafas y defraudaciones",
      "Lavado de activos",
      "Evasión / delitos tributarios",
    ],
  },
  {
    title: "Contra la Propiedad",
    items: [
      "Robos y hurtos",
      "Agravados",
    ],
  },
  {
    title: "Ciberdelitos",
    items: [
      "Estafas online",
      "Suplantación de identidad",
      "Accesos indebidos",
    ],
  },
  {
    title: "Contra la Vida",
    items: [
      "Homicidios",
      "Tentativa",
      "Lesiones",
    ],
  },
];

const SectionDelitos = () => {
  return (
    <section id="delitos" className="section-dark section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Delitos que trabajamos</p>
          <h2 className="section-title">Especialización en delitos complejos</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {delitos.map((delito, index) => (
            <div key={index} className="service-card">
              <h3 className="font-serif text-xl font-medium mb-4">
                {delito.title}
              </h3>
              <ul className="space-y-2">
                {delito.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
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

export default SectionDelitos;
