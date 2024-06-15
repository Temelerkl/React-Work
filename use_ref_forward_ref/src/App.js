import { useRef } from "react"; //Bu satırda, React'ten useRef hook'unu içe aktarıyor.useRef hook'u bir değişken oluşturarak component içindeki bir DOM öğesine erişmemizi sağlar.

//useRef = Refi kullanmak anlamına gelir.
function App() {
  const inputRef = useRef(); //Bu satırda useRef hook'u kullanılarak inputRef adında bir değişken oluşturuluyor.Bu değişken input elementine referans sağlıycak.
  //Bu alttaki focusInput fonksiyonu inputRef tarafından tutulan DOM öğesine odaklanmayı sağlar.Yani, input alanına odaklanmayı sağlayan bir işlev.
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1> useRef() - forwardRef()</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
    //<input type="text" ref={inputRef} /> = Bu satır bir input text oluşturur ve "ref" özelliği aracılığıyla "inputRef" değişkenini bu input alanına bağlar. Böylece "inputRef.current" ifadesi bu input alanını temsil eder.
    //<button onClick={focusInput}>Focusla</button> = Bu satır bir düğme oluşturur ve bu düğmeye tıklandığında "focusInput" fonksiyonunu çağırır. Bu fonksiyon sayesinde input alanına odaklanır.
  );
}

export default App;
