import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Area {
  title: string;
  items: string[];
}

/* Todas las áreas y delitos unificados en un solo índice.
   Textos preservados exactamente de las secciones originales
   (Derecho Penal, Delitos y Empresas). */
const areas: Area[] = [
  {
    title: "Defensas y Querellas Penales",
    items: [
      "Asistencia a detenidos",
      "Denuncias y ampliaciones",
      "Defensas en IPP",
      "Juicio Oral",
    ],
  },
  {
    title: "Medidas y Libertad",
    items: ["Medidas cautelares", "Libertad / excarcelaciones", "Audiencias"],
  },
  {
    title: "Recursos e Impugnaciones",
    items: ["Apelaciones", "Casación", "Nulidades / revisiones"],
  },
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
    items: ["Robos y hurtos", "Agravados"],
  },
  {
    title: "Ciberdelitos",
    items: ["Estafas online", "Suplantación de identidad", "Accesos indebidos"],
  },
  {
    title: "Contra la Vida",
    items: ["Homicidios", "Tentativa", "Lesiones"],
  },
  {
    title: "Empresas",
    items: [
      "Cumplimiento normativo / Compliance",
      "Gestión y detección de riesgos",
      "Protocolos internos",
      "Canal de denuncias",
      "Litigación y representación de empresas en causas penales",
    ],
  },
];

const SectionAreas = () => {
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpen((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="areas" className="section-dark section-spacing scroll-mt-20">
      <div className="container-main">
        <Reveal className="mb-12 md:mb-16 max-w-2xl">
          <p className="section-eyebrow">
            <span className="section-number">02</span> Áreas de práctica
          </p>
          <h2 className="section-title">Áreas de práctica y delitos</h2>
        </Reveal>

        <div className="border-t border-foreground/10">
          {areas.map((area, index) => {
            const isOpen = open.includes(index);
            const number = String(index + 1).padStart(2, "0");
            const panelId = `area-panel-${index}`;
            const btnId = `area-btn-${index}`;

            return (
              <Reveal key={area.title}>
                <div className="border-b border-foreground/10">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      className="group flex w-full items-center gap-4 md:gap-6 py-5 md:py-6 text-left transition-colors"
                    >
                      <span className="section-number text-sm md:text-base w-8 shrink-0">
                        {number}
                      </span>
                      <span className="flex-1 font-serif text-xl md:text-2xl font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                        {area.title}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-foreground/50 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-foreground" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="flex flex-wrap gap-x-8 gap-y-2 pb-6 pl-12 md:pl-14 pr-4">
                        {area.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span
                              className="mt-[0.7em] h-px w-4 shrink-0 bg-primary/60"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionAreas;
