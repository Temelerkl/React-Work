import logo from "./logo.svg";
//JSX olmasaydı aşağıdaki yapıyı nasıl yazardık bi ona bakalım.

import { createElement } from "react"; //Şimdi eğer bir etiket oluşturmak isteseydik aşağıdaki main etiketi gibi create elementini kullanmamız gerekiyordu bir etiket oluşturmak için bu da react'den geliyor.
//JSX ÖZELLİKLERİ
//class -> className
//for -> htmlFor
//style="" -> style={}
//tabindex -> tabIndex
//onclick -> onClick
//JavaScript İfadelerinin Kullanımı

//createElement = Aslında amacı şu JSX olmasaydı etiketler hangi şekilde oluşturulur onu göstermeye yarıyor yani etiket oluşturmaya yarıyor.

function App() {
  //JSX OLMASAYDI ETİKETİ BU ŞEKİLDE OLUŞTURUCAKTIK
  //İlk parametresi oluşturucağımız etiketin adı(main), ikinci parametresi oluşturmak istediğimiz propertyler(id,className), üçüncü parametre ise içeriği varsa onu yazıyoruz(Temel Erkilic).

  //BURDADA H1 ETİKETİ OLUŞTURUYORUM
  const h1 = createElement("h1", null, "TemelErklc");
  //---------------------------------------------------------
  const todos = ["todo1", "todo2", "todo3"];
  //BURADA UL ETİKETİNİ OLUŞTURUYORUM
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  //---------------------------------------------------------

  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1,
    "Temel Erkilic",
    ul
  );
  //--------------------------------------------------------
  //BU ALTTAKKİ KISIM JSX KULLANARAK YAZILAN KISIM ÜSTTEKİ İSE JSX OLMASAYDI ŞU ŞEKİLDE YAZILIRDI DENİLEN BİR KOD SATIRI.
  //Normal şartlarda jsx kullanmıyor olsaydık react'e bu kodları rahat rahat yazamazdık.
  //Şimdi bu  return'ün üstünde başka bir return olduğu için öncelikli olarak onu çaliştiriyor o yüzden bu return ekranda gözükmüyor.Yukarıdaki return'ü sildiğimde bu return içindeki kodlar çalışır durumda olur.

  return (
    <main id="main" className="test">
      <h1>prototurk.com</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </main>
  );
}

export default App;
