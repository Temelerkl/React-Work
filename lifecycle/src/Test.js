//Bu useEffect hook'unu 4 şekilde kullanabiliyorum
//Birincisi Componentim ilk yüklendiğinde.
//Component bir sebepten ötürü update olduğunda ve component yeniden render olduğunda.
//Component destroy olduğuda.
//Birde bir durum daha var onu da şimdi görücez.
import { useEffect, useState } from "react";

export default function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);
  //useEffect nasıl kullanılır:İlk parametre callback fonksiyonu yani çalışıcak olan kodlarım bu fonksiyonun içerisinde yer alıyor.
  //Eğer ben ikinci parametreyi boş bırakırsam bu component her render olduğunda çalışıcak demektir.Yani update olduğunda.

  /*useEffect(() => {
    console.log("component render,update oldu!");
  });
  
  
  */
  //Bir başka kullanım ise:
  //Yine bir callback fonksiyonu alır ikinci parammetre olarak boş bir array alır.
  useEffect(() => {
    console.log("Component ilk yüklendiğinde çalişir.");
    return () => {
      console.log("COMPONENT DESTROYED");
    };
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <button onClick={() => setPostId((postId) => postId + 1)}>Arttir</button>
      <hr />
      test componenti
    </div>
  );
}
//12:10
