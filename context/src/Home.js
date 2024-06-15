/*Home.js dosyası, ana sayfa bileşenini temsil eder. Burada Header ve Footer bileşenleri kullanılır.
Ana sayfa içeriğini (App) gösterir ve Header ve Footer bileşenlerini çağırır. */

import React from "react";
import Header from "./Header"; // Header bileşenini import ettik
import Footer from "./Footer"; // Footer bileşenini import ettik

export default function Home() {
  return (
    <>
      <Header /> {/* Header bileşenini kullanıyoruz */}
      App {/* İçerik */}
      <Footer /> {/* Footer bileşenini kullanıyoruz */}
    </>
  );
}
