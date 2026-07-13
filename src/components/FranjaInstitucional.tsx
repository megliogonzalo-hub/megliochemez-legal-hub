const items = [
  "Entre Ríos",
  "Santa Fe",
  "Justicia Federal",
  "Atención 24 h",
];

const FranjaInstitucional = () => {
  return (
    <div className="section-dark border-y border-foreground/10">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 py-4 md:gap-x-6 md:py-5">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-5 md:gap-6">
              {i > 0 && (
                <span className="hidden text-foreground/25 md:inline" aria-hidden="true">
                  ·
                </span>
              )}
              <span className="text-xs md:text-sm tracking-[0.15em] uppercase text-foreground/55">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FranjaInstitucional;
