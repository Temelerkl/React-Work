// React'ten useReducer ve useState hook'larını import ediyoruz
import { useReducer, useState } from "react";
// Header, AddTodo ve Todos bileşenlerini import ediyoruz
import Header from "./header.js";
import AddTodo from "./AddTodo.js";
import Todos from "./Todos.js";

// Reducer fonksiyonunu tanımlıyoruz, bu fonksiyon state ve action parametreleri alıyor
function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO": // Action type "SET_TODO" ise
      return {
        ...state, // Mevcut state'i koruyoruz
        todo: action.value, // Yeni todo değerini state'e ekliyoruz
      };
    case "ADD_TODO": // Action type "ADD_TODO" ise
      return {
        ...state, // Mevcut state'i koruyoruz
        todo: "", // todo alanını boşaltıyoruz
        todos: [...state.todos, action.todo], // Yeni todo'yu todos listesine ekliyoruz
      };
    default: // Tanımlanmamış bir action type gelirse mevcut state'i geri döndürüyoruz
      return state;
  }
}

// App bileşenini tanımlıyoruz
function App() {
  console.log("App rendered"); // Bileşenin yeniden render edildiğinde konsola mesaj yazdırıyoruz

  const [count, setCount] = useState(0); // count ve setCount state'ini tanımlıyoruz, başlangıç değeri 0

  const [state, dispatch] = useReducer(reducer, {
    todos: [], // Başlangıç todos listesi boş
    todo: "", // Başlangıç todo değeri boş
  });

  // submitHandle fonksiyonu, form submit edildiğinde çağrılır
  const submitHandle = (e) => {
    e.preventDefault(); // Formun varsayılan submit davranışını engelliyoruz
    dispatch({
      type: "ADD_TODO", // Action type "ADD_TODO"
      todo: state.todo, // Mevcut todo değerini action'a ekliyoruz
    });
  };

  // onChange fonksiyonu, input değeri değiştiğinde çağrılır
  const onChange = (e) => {
    dispatch({
      type: "SET_TODO", // Action type "SET_TODO"
      value: e.target.value, // Input değerini action'a ekliyoruz
    });
  };

  // Bileşen JSX döndürüyor
  return (
    <>
      <Header /> {/* Header bileşenini render ediyoruz */}
      <h3>{count}</h3> {/* count state'ini gösteriyoruz */}
      <button onClick={() => setCount((count) => count + 1)}>Artir</button>{" "}
      {/* Butona tıklandığında count'u arttırıyoruz */}
      <hr />
      <h1>Todo App</h1>
      <AddTodo
        onChange={onChange} // AddTodo bileşenine onChange prop'u veriyoruz
        submitHandle={submitHandle} // AddTodo bileşenine submitHandle prop'u veriyoruz
        todo={state.todo} // AddTodo bileşenine todo prop'u veriyoruz
      />
      <Todos todos={state.todos} />{" "}
      {/* Todos bileşenine todos listesini prop olarak veriyoruz */}
    </>
  );
}

export default App; // App bileşenini dışa aktarıyoruz
