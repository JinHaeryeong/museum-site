import '../assets/styles/Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import SignIn from './users/SignIn';
const Links = [
    { href: '/info', text: '관람정보' },
    { href: '/exhibitions', text: '전시' },
    { href: '/about', text: '박물관소개' },
];
export default function Header() {
    const [isOpenMdoal, setIsModalOpen] = useState(false);
    const openSignInModal = () => {
        setIsModalOpen(true);
    };
    const closeSignInModal = () => {
        setIsModalOpen(false);
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
                <div>
                    <ul className="login-menu">
                        <li onClick={openSignInModal}>로그인</li>
                        <li>
                            <Link to="/signup">회원가입</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {isOpenMdoal && (
                <Modal isOpen={isOpenMdoal} onClose={closeSignInModal} title="로그인">
                    <SignIn />
                </Modal>
            )}
        </div>
    );
}
