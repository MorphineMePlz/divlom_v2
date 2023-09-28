import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/common.scss";
import "./styles/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
