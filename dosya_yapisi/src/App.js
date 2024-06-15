import logo from "./logo.svg";
//Bir resim import ettiğim zaman onu kullanmak için aşağıdaki gibi src (eşittir)(süslü parentez) içine resimi hangi isimle import ettiysem onu yazmam gerekiyor.
function App() {
  return (
    <div className="App">
      <img src="/logo192.png"></img>
      <img src={logo}></img>
    </div>
  );
}

export default App;
