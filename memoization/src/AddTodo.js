// React'ten memo fonksiyonunu import ediyoruz
import { memo } from "react";

// AddTodo bileşenini tanımlıyoruz, props olarak submitHandle, onChange ve todo alıyor
function AddTodo({ submitHandle, onChange, todo }) {
  console.log("ADDTODO rendered"); // Bileşenin yeniden render edildiğinde konsola mesaj yazdırıyoruz

  // JSX döndürüyoruz
  return (
    <form onSubmit={submitHandle}>
      {" "}
      {/* Form submit edildiğinde submitHandle fonksiyonu çağrılır */}
      <input type="text" value={todo} onChange={onChange} />{" "}
      {/* Input alanı, değeri todo state'ine bağlı ve değiştiğinde onChange fonksiyonu çağrılır */}
      <button type="submit" disabled={!todo}>
        {" "}
        {/* Buton, todo değeri boş olduğunda disabled olur */}
        Ekle
      </button>
    </form>
  );
}

// AddTodo bileşenini memo ile sarmalayıp dışa aktarıyoruz, bu sayede props değişmediğinde bileşen yeniden render edilmez
export default memo(AddTodo);
