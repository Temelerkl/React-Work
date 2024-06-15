/*SwitchLanguage.js dosyası, dil değiştirme bileşenidir. SiteContext kullanılarak mevcut dil gösterilir ve dil değiştirme butonu eklenir.
Butona tıklandığında setLanguage fonksiyonu çağrılır ve dil değiştirilir. */

import React, { useContext } from "react";
import { Context } from "./context/siteContext"; // SiteContext'ten Context'i import ettik

export default function SwitchLanguage() {
  const { language, setLanguage } = useContext(Context); // SiteContext içindeki language ve setLanguage değerlerini kullanıyoruz

  return (
    <>
      Mevcut dil = {language} <br /> {/* Mevcut dilin gösterildiği kısım */}
      <button onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
        Dili Değiştir {/* Dil değiştirme butonu */}
      </button>
      <br />
      <br />
    </>
  );
}
