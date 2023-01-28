import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import "./css/index.css";
import { routes } from "./routes/index-route";

const container = document.getElementById("app");

let router = createBrowserRouter(routes);
const FullApp = () => (
  <React.StrictMode>
    <App>
      <RouterProvider router={router} fallbackElement={null} />
    </App>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
