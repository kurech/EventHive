import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "./UserContext";
import Home from "./components/Home";
import Auth from "./components/authorization/Auth";
import Registration from "./components/authorization/Registration";
import { UserProvider } from "./UserContext";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ProfileMain from "./components/profile/ProfileMain";

const AppContent: React.FC = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const token = Cookies.get("eventhive");

    if (token) {
      fetch("https://localhost:7225/api/User/VerifyToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusCode === 200) {
            setUser(data.value.user);
          }
        })
        .catch((error) => {});
    }
  }, [setUser]);

  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<Home />} />
        {/* Страница авторизации */}
        <Route path="/logon/authorization" element={<Auth />} />
        {/* Страница регистрации */}
        <Route path="/logon/registration" element={<Registration />} />
        {/* Страница профиля */}
        <Route path="/profile" element={<ProfileMain />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default App;
