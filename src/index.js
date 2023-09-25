import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./headerFooter/Header";
import Footer from "./headerFooter/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <header className="App-header">
      <Header />
    </header>
    <main className="App-main">
      <App />
    </main>
    <footer className="App-footer">
      <Footer />
    </footer>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
