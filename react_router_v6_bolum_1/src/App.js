import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/404";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    //Normalde <a href=""></a> kullanılırken bu kullanım sayfalar arası geçişde sayfayı yenilemek zorunda kalıyor.
    //<Link to=""></Link> 'i kullandım bu sayfayı yenilemeden sayfalar arası geçiş yapmamı sağlıyor.
    //Ama Link'in de şöyle bir sorunu var Active class'ı falan ekliyemiyoruz o yüzden Link yerinede.
    //NavLink'i kullanıyorum bunu kullandığımda classlarımı kullanabiliyorum.

    // Navbar bileşeni
    <>
      {/* Routes ve Route bileşenleri */}
      <Routes>
        {/* Ana sayfa Route bileşeni */}
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          {/* İletişim Route bileşeni */}
          <Route path="contact" element={<Contact />} />
          {/* BlogLayout bileşeni içindeki Route bileşenleri */}
          <Route path="blog" element={<BlogLayout />}>
            {/* Blog ana sayfası Route bileşeni */}
            <Route index element={<Blog />} />
            {/* Kategoriler Route bileşeni */}
            <Route path="categories" element={<Categories />} />
            {/* Post Route bileşeni */}
            <Route path="post/:id/:url" element={<Post />} />
            {/* Blog 404 bileşeni */}
            <Route path="*" element={<Blog404 />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        {/* Ana 404 bileşeni */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
