import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initConversionTracking } from "./lib/conversions";

initConversionTracking();

createRoot(document.getElementById("root")!).render(<App />);
