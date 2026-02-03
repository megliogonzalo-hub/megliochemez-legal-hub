import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen section-light">
      <div className="container-main py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-medium hover:text-light-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="font-serif text-4xl font-medium text-light-foreground mb-8">
          Aviso Legal
        </h1>

        <div className="prose prose-gray max-w-3xl space-y-6 text-gray-medium">
          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Identificación
            </h2>
            <p>
              Este sitio web es propiedad de MEGLIO & CHEMEZ ABOGADOS, con domicilio 
              profesional en Victoria 3, Paraná, Entre Ríos, República Argentina.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Objeto
            </h2>
            <p>
              El presente sitio web tiene como finalidad proporcionar información 
              sobre los servicios legales ofrecidos por el estudio. La información 
              publicada es de carácter general e informativo.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              No constituye asesoramiento legal
            </h2>
            <p>
              La información contenida en este sitio web no constituye asesoramiento 
              legal ni crea una relación abogado-cliente. Cada situación legal es 
              única y requiere evaluación profesional individualizada. Antes de tomar 
              cualquier decisión legal, consulte con un profesional.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio web (textos, imágenes, diseño gráfico, 
              logotipos) son propiedad de MEGLIO & CHEMEZ ABOGADOS o se utilizan con 
              la debida autorización. Queda prohibida su reproducción sin autorización 
              expresa.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Legislación aplicable
            </h2>
            <p>
              Este aviso legal se rige por la legislación de la República Argentina. 
              Para cualquier controversia derivada del uso del sitio web, las partes 
              se someten a los tribunales competentes de la ciudad de Paraná, 
              provincia de Entre Ríos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
