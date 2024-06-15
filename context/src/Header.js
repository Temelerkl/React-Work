/*Header.js dosyası, sayfanın üst kısmında yer alan başlık bileşenidir. Burada SwitchTheme ve SwitchLanguage bileşenleri kullanılır.
Tema değiştirme ve dil değiştirme işlemleri için butonlar içerir. */

import React from "react";
import SwitchTheme from "./SwitchTheme"; // SwitchTheme bileşenini import ettik
import SwitchLanguage from "./SwitchLanguage"; // SwitchLanguage bileşenini import ettik

export default function Header() {
  return (
    <header>
      HEADER
      <br />
      <SwitchTheme /> {/* Tema değiştirme bileşenini kullanıyoruz */}
      <br />
      <br />
      <SwitchLanguage /> {/* Dil değiştirme bileşenini kullanıyoruz */}
    </header>
  );
}
