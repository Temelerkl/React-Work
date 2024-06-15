import "./tailwind.css";
import Tailwind from "./tailwind";
import Button from "./Components/Button";
import Tab from "./Components/Tab";

//Component: Genelde tek bir amaca hizmet eden küçük yapılar.UI componentlerine ele alıcak olursam buton için checkbox için vb.
function App() {
  return (
    <div className="App">
      <div style={{ padding: 20 }}>
        <Tab activeTab={1}>
          <Tab.panel title="Profil ">1. tab</Tab.panel>
          <Tab.panel title="Hakkinda ">2. tab</Tab.panel>
          <Tab.panel title="Ayarlar">3. tab</Tab.panel>
        </Tab>
      </div>

      <Tailwind />
      <div style={{ padding: 20 }}>
        <Button text="Buton Örneği" />
        <Button text="Buton Örneği" variant="success" />
        <Button text="Buton Örneği" variant="danger" />
        <Button text="Buton Örneği" variant="warning" />
      </div>
    </div>
  );
}
export default App;
