//Lifecycle(Yaşam Döngüsü):İnsanlığın yaşam hikayesi gibi örneklendirebiliriz.Doğar,gelişir ve ölür.
//Doğmak bir react compenentinin ilk defa yüklenmesi.
//İnsan hayatında büyümek ve gelişmek compenentimde birşeyler güncellenir.
//İnsan hayatında ölmek compenetimde artık onu kullanmıyorsam destroy olmak.

import Test from "./Test";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>
      {show && <Test />}
    </>
  );
}

export default App;
