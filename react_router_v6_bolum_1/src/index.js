import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { AuthProvider } from "./context/AuthContext";

// ReactDOM.createRoot ile bir root oluşturulur
const root = ReactDOM.createRoot(document.getElementById("root"));

// Oluşturulan root içine BrowserRouter ve App bileşenleri render edilir
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
