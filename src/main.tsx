import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
//import App from "./App";
import Dashboard from "./pages/dashboard";
import FormulaireValidation from "./hooks/form_validations";
import MyForm from "./hooks/form_data_inputs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Dashboard />
      {/* <MyForm /> */}
      {/* <FormulaireValidation /> */}
      {/* <Test /> */}
    </BrowserRouter>
  </React.StrictMode>
);
