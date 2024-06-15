// TodoItem bileşenini import ediyoruz
import TodoItem from "./TodoItem";

// Todos bileşenini tanımlıyoruz, props olarak todos alıyor
function Todos({ todos }) {
  console.log("TODOS rendered"); // Bileşenin yeniden render edildiğinde konsola mesaj yazdırıyoruz

  // JSX döndürüyoruz
  return (
    <ul>
      {todos.map(
        (
          todo,
          index // todos dizisini map fonksiyonu ile dönüyoruz
        ) => (
          <TodoItem todo={todo} key={index} /> // Her bir todo için TodoItem bileşenini render ediyoruz, key olarak index kullanıyoruz
        )
      )}
    </ul>
  );
}

export default Todos; // Todos bileşenini dışa aktarıyoruz
