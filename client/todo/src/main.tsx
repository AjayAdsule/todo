import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import queryClientGlobal from "./lib/tanstack/tanstackQueryConfig.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClientGlobal}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
