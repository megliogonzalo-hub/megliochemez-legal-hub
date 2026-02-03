import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacidad = () => {
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
          Política de Privacidad
        </h1>

        <div className="prose prose-gray max-w-3xl space-y-6 text-gray-medium">
          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Responsable del tratamiento
            </h2>
            <p>
              MEGLIO & CHEMEZ ABOGADOS, con domicilio en Victoria 3, Paraná, Entre Ríos, 
              es responsable del tratamiento de los datos personales recopilados a 
              través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Datos recopilados
            </h2>
            <p>
              Cuando usted se comunica con nosotros a través de los canales de contacto 
              provistos (teléfono, WhatsApp, email), podemos recopilar información de 
              contacto como nombre, número de teléfono y dirección de correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Finalidad del tratamiento
            </h2>
            <p>
              Los datos personales serán tratados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder a sus consultas</li>
              <li>Prestar los servicios legales solicitados</li>
              <li>Mantener la comunicación necesaria para el desarrollo de la relación profesional</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Confidencialidad
            </h2>
            <p>
              Toda información compartida con nuestro estudio está protegida por el 
              secreto profesional. No compartiremos sus datos personales con terceros 
              sin su consentimiento, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Derechos del titular
            </h2>
            <p>
              Conforme a la Ley 25.326 de Protección de Datos Personales, usted tiene 
              derecho a acceder, rectificar, actualizar y suprimir sus datos personales. 
              Para ejercer estos derechos, comuníquese con nosotros a través de los 
              canales de contacto indicados en el sitio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-light-foreground mb-3">
              Contacto
            </h2>
            <p>
              Para consultas sobre privacidad, puede contactarnos en:
              <br />
              Email: megliogonzalo@gmail.com
              <br />
              Teléfono: +54 343 503-2674
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
