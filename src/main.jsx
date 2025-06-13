import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routes } from "./components/routes.jsx";
import { RouterProvider } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
