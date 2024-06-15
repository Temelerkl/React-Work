/*
POST işlemi, web tarayıcılarının bir sunucuya veri göndermesi için kullanılan bir HTTP yöntemidir. Örneğin, bir kayıt formu doldurup gönderdiğinizde, bu veriler sunucuya bir POST isteği ile gönderilir.
POST işlemi genellikle yeni veriler oluşturmak veya mevcut verileri güncellemek için kullanılır.

Kodun Ne İşe Yaradığı =

Form Oluşturma:

Kullanıcıdan isim ve e-posta adresi girmesini isteyen bir form oluşturur.
-------------------------------------------------------------------------------------

Form Verilerini İşleme:

Form gönderildiğinde, handleSubmit fonksiyonu çalışır ve form verilerini alır.
Bu veriler userData adlı bir nesneye toplanır.
-------------------------------------------------------------------------------------

POST İsteği Gönderme:

fetch fonksiyonu ile belirtilen URL'ye (https://jsonplaceholder.typicode.com/users) POST isteği gönderilir.
İstekle birlikte userData JSON formatında gönderilir.
-------------------------------------------------------------------------------------

Sunucudan Yanıt Alma:

Sunucudan dönen yanıt JSON formatında çözümlenir ve response state'ine atanır.
Eğer bir hata oluşursa, hata konsola yazdırılır.
-------------------------------------------------------------------------------------

Yanıtı Gösterme:

Sunucudan dönen yanıt, kullanıcıya ekranda gösterilir.
-------------------------------------------------------------------------------------
*/

import { useState } from "react";

// Bu bileşen yeni bir kullanıcı oluşturmak için bir form sağlar ve POST isteği ile verileri sunucuya gönderir
function CreateUser() {
  // İsim, email ve sunucu yanıtı için state değişkenleri tanımlanır
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);

  // Form gönderildiğinde çağrılan fonksiyon
  const handleSubmit = (event) => {
    event.preventDefault(); // Formun otomatik olarak yeniden yüklenmesini engeller

    // Gönderilecek kullanıcı verilerini içeren nesne
    const userData = {
      name: name,
      email: email,
    };

    // POST isteği ile kullanıcı verilerini sunucuya gönderir
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", // HTTP metodunu POST olarak ayarlar
      headers: {
        "Content-Type": "application/json", // İsteğin JSON formatında olduğunu belirtir
      },
      body: JSON.stringify(userData), // Gönderilecek veriyi JSON formatına dönüştürür
    })
      .then((response) => response.json()) // Yanıtı JSON formatında çözümler
      .then((data) => {
        setResponse(data); // Yanıt verisini state'e kaydeder
        console.log("Success:", data); // Başarı mesajını konsola yazar
      })
      .catch((error) => {
        console.error("Error:", error); // Hata durumunda konsola hata mesajı yazar
      });
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // İsim alanı değiştikçe state güncellenir
              required // Bu alanın zorunlu olduğunu belirtir
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Email alanı değiştikçe state güncellenir
              required // Bu alanın zorunlu olduğunu belirtir
            />
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
      {response && ( // Yanıt mevcutsa yanıtı ekranda gösterir
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          {/*Yanit verisini JSON formatinda gösterir*/}
        </div>
      )}
    </div>
  );
}

export default CreateUser; // Bileşeni dışa aktarır
