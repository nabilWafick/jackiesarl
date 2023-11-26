import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import DashTest from "./Test";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <DashTest /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
