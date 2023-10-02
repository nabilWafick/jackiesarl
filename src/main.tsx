import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import SplashPage from "./pages/splash/SplashPage";
import TestPage from "./pages/TestPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SplashPage /> */}
      <TestPage />
    </BrowserRouter>
  </React.StrictMode>
);
