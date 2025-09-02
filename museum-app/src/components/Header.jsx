import "../assets/styles/header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import SignIn from "./users/SignIn";
import { useAuthStore } from "../stores/authStore";
import { LogOut, User } from "lucide-react";
import { apiSignOut } from "../api/userApi";
const Links = [
  { href: "/info", text: "관람정보" },
  { href: "/exhibitions", text: "전시" },
  { href: "/about", text: "박물관소개" },
];
export default function Header() {
  const [isOpenMdoal, setIsModalOpen] = useState(false);
  const authUser = useAuthStore((s) => s.authUser);
  const signOut = useAuthStore((s) => s.signout);
  const navigate = useNavigate();
  const openSignInModal = () => {
    setIsModalOpen(true);
  };
  const closeSignInModal = () => {
    setIsModalOpen(false);
  };
  const handleSignOut = async () => {
    if (!authUser) return;
    try {
      // api 요청
      const response = await apiSignOut({ email: authUser.email });
      // alert(JSON.stringify(response));
      if (response.result === "success") {
        signOut();
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/");
      }
    } catch (error) {
      alert("로그아웃 처리 중 에러: " + error.message);
    }
  };

  const handleMypage = () => {
    navigate("/mypage");
  };

  return (
    <div className="header">
      <h1>
        <Link to="/">
          <img src="/images/logo.png" width="187px" height="47px" alt="로고" />
        </Link>
      </h1>
      <div className="header-right">
        <div className="nav">
          <ul className="nav-list">
            {Links.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.text}</Link>
                <span className="underline"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-user">
          {authUser && (
            <ul className="auth-user">
              <li className="user-icon" onClick={handleMypage}>
                <User size={30} />
              </li>
              <li onClick={handleSignOut}>
                <LogOut size={30} />
              </li>
            </ul>
          )}
          {!authUser && (
            <ul className="login-menu">
              <li onClick={openSignInModal}>로그인</li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {isOpenMdoal && (
        <Modal isOpen={isOpenMdoal} onClose={closeSignInModal} title="로그인">
          <SignIn onClose={closeSignInModal} />
        </Modal>
      )}
    </div>
  );
}
