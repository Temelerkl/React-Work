import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App"; App.js dosyasındaki useState kullanarak yaptığım todo listi kullanmak istediğimde bunu yorum satırından çıkarıp alt satırdaki import'u yorum satırına almam gerekiyor.
import App from "./useReducer"; // Yeni App bileşenini useReducer.js dosyasından import ediyoruz

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
