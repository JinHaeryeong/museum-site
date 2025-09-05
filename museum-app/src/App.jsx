import "./assets/styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./components/users/SignUp";
import Exhibitions from "./pages/Exhibitions";
import Info from "./pages/Info";
import About from "./pages/About";
import ReservationPage from "./pages/ReservationPage";
import ReservationCheck from "./pages/ReservationCheck";
import Mypage from "./pages/Mypage";
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";
import axiosAuthInstance from "./api/axiosAuthInstance";
import Location from "./pages/Location";
import { useKakaoLoader } from "react-kakao-maps-sdk";

function App() {
  const signInAuthUser = useAuthStore((s) => s.signInAuthUser);
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_API_KEY,
    libraries: ["services", "clusterer", "drawing"],
  });

  useEffect(() => {
    requestAuthUser();
  }, [signInAuthUser]);

  const requestAuthUser = async () => {
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        const response = await axiosAuthInstance.get(`/auth/user`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const authUser = await response.data;
        signInAuthUser(authUser); //인증사용자 정보 전역 state에 설정 후 로딩 상태 false
      }
    } catch (error) {
      sessionStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reserve" element={<ReservationPage />} />
          <Route path="/reservationCheck" element={<ReservationCheck />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
