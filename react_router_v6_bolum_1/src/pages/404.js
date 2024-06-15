import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      {/* Sayfa bulunamadı başlığı */}
      <h1>Sayfa Bulunamadi</h1>
      {/* Ana sayfaya dönme bağlantısı */}
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}
