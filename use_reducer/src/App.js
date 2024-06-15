//Önce useState ile bir to-do örneği yapıcam sonra bunu useReducer ile tekrar başka bir sayfada nasıl kulanırım ona bakıcam.

import { useState } from "react"; //useState kullanabilmek için öncelikle import ediyorum.

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    //Bu event alıyor
    e.preventDefault(); //Ve e.preventDefault diyerek varsayılan durduruyorum ki form normal olarak biryere istek atmaya çalışıyor ya da kendi içerisinde yeniliyor.
    setTodos([...todos, todo]); //Burdaki kodun işlevi yazılan todo'ların tamamı ve ve sonradan eklenen todo'ların hepsi ekrana yazdırılıcak.
    setTodo(""); //Bu kod satırı ise todo'yu inputa yazıp enterladıktan sonra inputu sıfırlamaya sildirmeye yarıyor.
  };

  return (
    <>
      <h1>useState Todo App</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)} //onChange içindeki kod ise şu işe yarıyor: Kullanıcı input değerini sildiğinde ya da güncellediğinde ekrana bu değişikliğin yansımasını sağlar.
          //onChange = Input değiştiğinde olucak gelişmeleri gerçekleştirir.
        ></input>
        <button
          type="submit"
          disabled={!todo} //Bu kod satırında eğer yapılıcaklar listesinde birşey yazmıyorsa kullanılamaz halline getirmeye yarıyor yani input içerisine birşey yazılmadıysa kullanılamaz.
        >
          Ekle
        </button>
      </form>
      <ul>
        {todos.map(
          //todos.map şu işe yarıyor: todos dizisindeki her bir öğeyi dolaşmak için kullanılan JavaScript map fonksiyonudur.
          (todo, index) => (
            <li key={index}>{todo}</li>
          )
        )}
      </ul>
    </>
  );
}

export default App;
