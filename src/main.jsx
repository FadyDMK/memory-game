import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Footer.css";
import "./styles/index.css";
import Footer from "./components/Footer.jsx";
import { App } from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <Footer />
  </React.StrictMode>
);
