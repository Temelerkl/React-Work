import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      {/* Blog sayfa bulunamadı başlığı */}
      <h1>Blog Sayfa Bulunamadi</h1>
      {/* Blog ana sayfasına dönme bağlantısı */}
      <Link to="/blog">Bloga Sayfaya Dön</Link>
    </div>
  );
}
