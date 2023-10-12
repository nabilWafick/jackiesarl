import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import FormulaireEnvoiFichier from "./hooks/file_uploading";
import FormulaireComplet from "./hooks/data_uploading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SplashPage /> */}
      <Dashboard />
      {/* <FormulaireEnvoiFichier /> */}
      {/* <FormulaireComplet /> */}
      {/* <DateTimePicker /> */}
      {/* <TextareaAvecHook /> */}
      {/* <TestPage /> */}
    </BrowserRouter>
  </React.StrictMode>
);
