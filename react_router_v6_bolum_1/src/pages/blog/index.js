import { Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <>
      {/* Blog sayfası başlığı */}
      <h3>Blog Sayfasi</h3>

      {/* Dinamik içerik için Outlet bileşeni */}
      <Outlet />
    </>
  );
}
