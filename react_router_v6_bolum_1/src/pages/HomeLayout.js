import { NavLink, Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <nav>
        {/* Anasayfa NavLink bileşeni */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "aktif" : undefined)}
        >
          Anasayfa
        </NavLink>
        {/* İletişim NavLink bileşeni */}
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "orange" : "transparent",
          })}
        >
          İletişim
        </NavLink>
        {/* Blog NavLink bileşeni */}
        <NavLink
          to="/blog"
          style={({ isActive }) => ({
            fontSize: isActive ? "30px" : "15px",
          })}
        >
          Blog
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "orange" : "transparent",
          })}
        >
          Profil
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
