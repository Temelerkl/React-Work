/*SwitchTheme.js dosyası, tema değiştirme bileşenidir. SiteContext kullanılarak mevcut tema gösterilir ve tema değiştirme butonu eklenir.
Butona tıklandığında setTheme fonksiyonu çağrılır ve tema değiştirilir. */

import React, { useContext } from "react";
import { Context } from "./context/siteContext"; // SiteContext'ten Context'i import ettik

export default function SwitchTheme() {
  const { theme, setTheme } = useContext(Context); // SiteContext içindeki theme ve setTheme değerlerini kullanıyoruz

  return (
    <>
      Mevcut tema = {theme} <br /> {/* Mevcut temanın gösterildiği kısım */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Temayi Değiştir {/* Tema değiştirme butonu */}
      </button>
    </>
  );
}
