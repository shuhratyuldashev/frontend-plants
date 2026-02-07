import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/index.tsx";
import { ThemeProvider } from "./providers/theme-providers.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="system">
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>,
);
