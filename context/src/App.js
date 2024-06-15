/*App.js dosyası, uygulamanın ana bileşeni olarak işlev görür. Burada SiteProvider bileşeni ile Home bileşeni sarmalanır.
SiteProvider bileşeni, React Context'i kullanarak uygulama genelinde paylaşılan verileri yönetir. */

import React from "react";
import SiteProvider from "./context/siteContext"; // SiteProvider bileşenini kullanmak için import ettik
import Home from "./Home"; // Home bileşenini import ettik
//13:04
function App() {
  return (
    <SiteProvider>
      {/* SiteProvider bileşenini kullanarak SiteContext'i uygulama geneline yayıyoruz */}
      <Home />
      {/* Ana bileşenimiz Home */}
    </SiteProvider>
  );
}

export default App;
