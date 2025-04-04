import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";
import queryClientGlobal from "./lib/tanstack/tanstackQueryConfig.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClientGlobal}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
