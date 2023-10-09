import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SplashPage /> */}
      <Dashboard />
      {/* <DateTimePicker /> */}
      {/* <TextareaAvecHook /> */}
      {/* <TestPage /> */}
    </BrowserRouter>
  </React.StrictMode>
);
