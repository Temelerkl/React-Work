/*
Fetch API

Fetch API, web tarayıcılarında HTTP istekleri yapmanıza olanak tanır. 
Bu, verileri sunucudan almak (GET) veya sunucuya veri göndermek (POST) gibi işlemler için kullanılır. 

Ne İşe Yarar = 
1- Sunucudan veri almak için kullanılır.
2-Sunucuya veri göndermek için kullanılır.
3-Modern ve esnek bir yapıya sahiptir, Promise tabanlıdır, bu nedenle asenkron işlemler için uygundur.

Nerede Kullanılır =
1- Web uygulamalarında dinamik veri çekme veya gönderme işlemlerinde.
2- API çağrıları yapmak için.
3- AJAX isteklerinin modern bir alternatifi olarak.
*/

//-----------------------------------------------------------------------------------------------------------------

/*Servisler

Servisler, uygulamanızda belirli işlevsellikleri merkezi bir yerde toplamanızı sağlar.
 React'ta, servisler genellikle veri erişimi ve işleme işlemleri için kullanılır.
 
Ne İşe Yarar = 
1- Kod tekrarını azaltmak.
2- Veri erişim ve işleme işlemlerini merkezi bir yerde toplamak.
3- Uygulama mantığını bileşenlerden ayırmak, böylece bileşenler daha basit ve okunabilir hale gelir.

Nerede Kullanılır =
1- API çağrılarını yönetmek için.
2- Uygulama genelinde kullanılan iş mantığını merkezi bir yerde toplamak için.
3- Veri depolama, oturum yönetimi gibi işlemler için.
 */

//Burda şöyle birşey yaptım GET işlemi için FetchUsers.js dosyasını kullandım.
//POST işlemi için ise CreateUser.js dosyasını kullandım ve ikisinide App.js dosyasına import ettim.
import React from "react";
import FetchUsers from "./FetchUsers";
import CreateUser from "./CreateUser";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <h2>Fetch Users</h2>
      <FetchUsers />
      <h2>Create User</h2>
      <CreateUser />
    </div>
  );
}

export default App;
