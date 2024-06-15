/*Footer.js dosyası, sayfanın alt kısmında yer alan footer bileşenidir. Burada yine SwitchLanguage ve SwitchTheme bileşenleri kullanılır. */

import React from "react";
import SwitchLanguage from "./SwitchLanguage"; // SwitchLanguage bileşenini import ettik
import SwitchTheme from "./SwitchTheme"; // SwitchTheme bileşenini import ettik

export default function Footer() {
  return (
    <footer>
      FOOTER
      <br />
      <SwitchTheme /> {/* Tema değiştirme bileşenini kullanıyoruz */}
      <SwitchLanguage /> {/* Dil değiştirme bileşenini kullanıyoruz */}
    </footer>
  );
}
