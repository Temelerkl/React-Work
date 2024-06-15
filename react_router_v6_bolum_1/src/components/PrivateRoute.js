import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  //kullanıcı oturum açmışmı
  //eğer oturum açmışsa, yönlendirme işlemi yap!
  //eğer  oturum açmışsa children'ı return et

  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  return children;
}
