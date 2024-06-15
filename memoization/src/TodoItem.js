// TodoItem bileşenini tanımlıyoruz, props olarak todo alıyor
function TodoItem({ todo }) {
  console.log("TODOITEM rendered"); // Bileşenin yeniden render edildiğinde konsola mesaj yazdırıyoruz

  // JSX döndürüyoruz, li elemanı içinde todo değerini gösteriyoruz
  return <li>{todo}</li>;
}

export default TodoItem; // TodoItem bileşenini dışa aktarıyoruz
