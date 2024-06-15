//useState = Bir state oluşturup onu kullanmamızı sağlıyor.State ise reaktif bir değişken.Herhangi bir fonksiyonda kullanılan heryer yeniden hesaplanıyor.

import { useState } from "react";

function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActive(index)}
            className={active == index ? "bg-green-100" : "bg-gray-100"}
            key={index}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </div>
  );
}

Tab.panel = function ({ children, title }) {
  return (
    <div>
      {children}
      {title}
    </div>
  );
};

export default Tab;
