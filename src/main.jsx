import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./index.css";
import { routes } from "./routes/Routes.jsx";
// all routes

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={routes} /> 
    </QueryClientProvider>
  </StrictMode>
);
