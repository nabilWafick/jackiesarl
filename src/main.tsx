import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Dashboard from "./pages/dashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
