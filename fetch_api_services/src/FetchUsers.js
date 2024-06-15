import { useEffect, useState } from "react";

// Bu bileşen sunucudan kullanıcı verilerini almak ve ekranda listelemek için kullanılır
function FetchUsers() {
  // Kullanıcı verilerini tutmak için state değişkeni tanımlanır
  const [users, setUsers] = useState(false);

  // Bileşen yüklendiğinde bir defa çalışacak şekilde useEffect kullanılır
  useEffect(() => {
    // GET isteği ile sunucudan kullanıcı verilerini alır
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          // İsteğin başarılı olup olmadığını kontrol eder
          return res.json(); // Yanıtı JSON formatında çözümler
        }
      })
      .then((data) => setUsers(data)) // Alınan veriyi state'e kaydeder
      .catch((err) => console.log(err)); // Hata durumunda konsola hata mesajı yazar
  }, []); // Boş bağımlılık dizisi ile useEffect sadece bir kez çalışır

  return (
    <ul>
      {users &&
        users.map(
          (
            user // Kullanıcı verisi mevcutsa liste oluşturur
          ) => (
            <li key={user.id}>{user.name}</li> // Her kullanıcıyı liste öğesi olarak gösterir
          )
        )}
    </ul>
  );
}

export default FetchUsers; // Bileşeni dışa aktarır
