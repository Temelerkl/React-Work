import { forwardRef, useRef } from "react"; // React kütüphanesinden useRef ve forwardRef fonksiyonlarını içeri aktarır. useRef hook'u bir değişken oluşturarak component içindeki bir DOM öğesine erişmemizi sağlar. forwardRef ise ref'i kullanabilmemizi sağlar.

function Input(props, ref) {
  return <input ref={ref} type="text" {...props} />; // Input bileşeni, aldığı props'ları input elementine aktarır ve ref'i doğrudan input elementine iletir.
}

Input = forwardRef(Input); // Input bileşenini forwardRef ile sarmalarız, böylece ref'i iletebilir hale gelir.

function App() {
  const inputRef = useRef(); // useRef hook'u kullanarak bir ref oluştururuz. Bu ref, input elementine erişmemizi sağlar.
  const focusInput = () => {
    inputRef.current.focus(); // focusInput fonksiyonu, inputRef.current ile input elementine erişir ve odaklanır.
  };

  return (
    <>
      <h1> useRef() - forwardRef()</h1>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
  //<h1> useRef() - forwardRef()</h1> ================ Başlık ekranında useRef() - forwardRef() yazdırılır.
  //<Input ref={inputRef} /> ====================== Input bileşeni, oluşturduğumuz ref'i alır ve input elementine bağlanır.
  //<button onClick={focusInput}>Focusla</button> ======= Buton, tıklanıldığında focusInput fonksiyonunu çalıştırır ve input elementine odaklanır.
}

export default App; // App bileşenini dışa aktarır.
