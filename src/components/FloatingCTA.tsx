import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="tel:+543435032674"
      className="fixed bottom-6 right-6 z-50
                 flex items-center gap-2 px-5 py-3
                 bg-petrol text-white font-medium text-sm
                 shadow-lg shadow-petrol/30
                 transition-all duration-300 ease-out
                 hover:bg-petrol-light hover:scale-105
                 md:hidden"
      aria-label="Llamar ahora"
    >
      <Phone className="w-4 h-4" />
      Llamá ahora
    </a>
  );
};

export default FloatingCTA;
