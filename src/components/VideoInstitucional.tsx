import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Maximize2 } from "lucide-react";

/**
 * Video vertical tipo reel para el bloque "El estudio".
 * - Arranca solo, silenciado y en loop.
 * - Carga liviana: la fuente del video recién se monta cuando el recuadro
 *   entra en viewport; mientras tanto se muestra la portada.
 * - Botón para activar/silenciar sonido y botón para verlo en pantalla completa.
 *
 * Archivos en /public:
 *   - estudio.mp4          (obligatorio, lo sube el cliente)
 *   - estudio-poster.svg   (portada placeholder por defecto; reemplazable)
 */
const VideoInstitucional = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);

  // Carga diferida: montar la fuente solo cuando el recuadro se ve.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) {
      // Al activar sonido, aseguramos reproducción.
      void v.play().catch(() => {});
    }
  };

  const goFullscreen = () => {
    const el = wrapRef.current;
    const v = videoRef.current;
    // iOS Safari sólo permite fullscreen sobre el <video>.
    if (v && (v as any).webkitEnterFullscreen) {
      (v as any).webkitEnterFullscreen();
      return;
    }
    if (el?.requestFullscreen) {
      void el.requestFullscreen();
    } else if (el && (el as any).webkitRequestFullscreen) {
      (el as any).webkitRequestFullscreen();
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-foreground/10 bg-[hsl(220,14%,7%)]"
    >
      {/* Relación 9:16 tipo reel */}
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/estudio-poster.svg"
          autoPlay
          muted
          loop
          playsInline
          preload={inView ? "auto" : "none"}
        >
          {inView && <source src="/estudio.mp4" type="video/mp4" />}
        </video>

        {/* Controles sobrios */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {muted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            onClick={goFullscreen}
            aria-label="Ver en pantalla completa"
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInstitucional;
