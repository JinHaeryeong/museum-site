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
import { useEffect, useState } from "react";
import { useAuthStore } from "./stores/authStore";

function App() {
    const loginAuthUser = useAuthStore((s) => s.loginAuthUser);
    useEffect(() => {
        requestAuthUser();
    }, [loginAuthUser]);
    const requestAuthUser = async () => {
        try {
            const accessToken = sessionStorage.getItem("accessToken");
            if (accessToken) {
                const response = await axiosInstance.get(`/auth/user`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const authUser = await response.data;
                console.log(authUser);

                loginAuthUser(authUser); //인증사용자 정보 전역 state에 설정 후 로딩 상태 false
            }
        } catch (error) {
            console.error("accessToken", error);
            alert(error);
            sessionStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }
    };
    return (
        <div className='container'>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/info' element={<Info />} />
                    <Route path='/exhibitions' element={<Exhibitions />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/reserve' element={<ReservationPage />} />
                    <Route path='/ReservationCheck' element={<ReservationCheck />} />
                </Routes>
            </BrowserRouter>
            <hr />
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
