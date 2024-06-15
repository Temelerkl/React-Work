/*siteContext.js dosyası, React Context'i oluşturan ve paylaşılan verileri yöneten bileşendir.
Context adlı bir Context oluşturur ve içinde theme, setTheme, language, setLanguage gibi değerleri barındırır.
SiteProvider bileşeni, bu Context'i kullanarak uygulama genelinde paylaşılan verilere erişim sağlar ve güncelleme imkanı verir. */

import React, { createContext, useState } from "react";

// SiteContext oluşturuyoruz ve varsayılan değerlerimizi belirliyoruz
export const Context = createContext({
  theme: "light",
  setTheme: () => {},
  language: "tr",
  setLanguage: () => {},
});

// SiteProvider bileşenimizi oluşturuyoruz
const SiteProvider = ({ children }) => {
  // Tema ve dil durumlarını useState hook'u ile tanımlıyoruz
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("tr");

  // Context değerlerini bir objede topluyoruz
  const data = {
    theme,
    setTheme,
    language,
    setLanguage,
  };

  // Context.Provider ile Context'i uygulama geneline yayıyoruz
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default SiteProvider; // SiteProvider bileşenini dışa aktarıyoruz
