// Conversiones de Google Ads: clic en WhatsApp y clic en teléfono.
// Un solo listener en document capta cualquier enlace wa.me / tel: del sitio,
// así no hay que instrumentar cada botón.

const SEND_TO = {
  whatsapp: "AW-17649684115/vKngCLin6bodEJOdg-BB",
  telefono: "AW-17649684115/hE_7CLun6bodEJOdg-BB",
} as const;

type Gtag = (...args: unknown[]) => void;

export function initConversionTracking() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";

      let kind: keyof typeof SEND_TO | null = null;
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) kind = "whatsapp";
      else if (/^tel:/i.test(href)) kind = "telefono";
      if (!kind) return;

      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (typeof gtag === "function") {
        gtag("event", "conversion", { send_to: SEND_TO[kind] });
      }
    },
    { capture: true },
  );
}
