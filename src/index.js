import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
