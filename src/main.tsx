import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import "./index.css";

const manifestUrl =
  "https://raw.githubusercontent.com/draysongz/vanguard/main/public/manifest.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);
