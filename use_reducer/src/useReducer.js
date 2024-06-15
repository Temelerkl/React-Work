import { useReducer } from "react";
// useReducer hook'unu React'ten import ediyoruz. useReducer, karmaşık durum yönetimi için kullanılan bir React hook'udur.

function reducer(state, action) {
  // Bu, reducer fonksiyonu. State ve action parametreleri alır.
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    // "SET_TODO" action'ı geldiğinde, mevcut durumu alır ve todo alanını action.value ile günceller.
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };
    // "ADD_TODO" action'ı geldiğinde, todo listesini günceller, yeni todo'yu ekler ve todo alanını sıfırlar.
    default:
      return state;
    // Eğer action.type tanımlanmamışsa, mevcut durumu geri döner.
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });
  // useReducer hook'unu kullanarak state ve dispatch fonksiyonlarını alıyoruz. Başlangıç durumu olarak boş bir todos dizisi ve boş bir todo stringi belirtiyoruz.

  const submitHandle = (e) => {
    e.preventDefault();
    // Formun varsayılan gönderme davranışını engelleriz. Böylece sayfa yeniden yüklenmez.
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
    // "ADD_TODO" action'ını dispatch ederiz. Bu, mevcut todo'yu todos dizisine ekler ve input'u sıfırlar.
  };

  const onChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
    // "SET_TODO" action'ını dispatch ederiz. Bu, input'taki değeri günceller.
  };

  return (
    <>
      <h1>useReducer Todo App</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={state.todo}
          onChange={onChange}
          // Input alanı değiştiğinde onChange fonksiyonu çalışır. Bu fonksiyon input'un değerini günceller.
        />
        <button
          type="submit"
          disabled={!state.todo}
          // Eğer input boşsa buton disable edilir. Bu, kullanıcıya bir şey yazması gerektiğini belirtir.
        >
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map(
          // todos dizisindeki her bir öğeyi dolaşırız ve her biri için bir <li> öğesi oluştururuz.
          (todo, index) => (
            <li key={index}>{todo}</li>
          )
        )}
      </ul>
    </>
  );
}

export default App;
// App bileşenini dışa aktarıyoruz ki diğer dosyalarda kullanılabilsin.
