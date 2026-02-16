import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App imageUrls={["/symbols/XAU.svg", "/symbols/XAU.svg"]} />
  </StrictMode>,
);
