import { useRef, useState } from 'react';
import { apiSignIn } from '../../api/userApi';
import '../../assets/styles/sign.css';
import { useAuthStore } from '../../stores/authStore';
export default function SignIn({ onClose }) {
    const [signInUser, setSignInUser] = useState({ email: '', passwd: '' });
    const signInAuthUser = useAuthStore((s) => s.signInAuthUser);
    const emailRef = useRef(null);
    const passwdRef = useRef(null);
    // useEffect(() => {
    //     if (show) idRef.current?.focus();
    // }, [show]);

    const handleChange = (e) => {
        setSignInUser({ ...signInUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, passwd } = signInUser;
        if (!email.trim()) {
            alert('아이디를 입력하세요');
            emailRef.current?.focus();
            return;
        }
        if (!passwd.trim()) {
            alert('비밀번호를 입력하세요');
            passwdRef.current?.focus();
            return;
        }

        requestSignIn();
    };
    const requestSignIn = async () => {
        try {
            const response = await apiSignIn(signInUser);
            // alert(JSON.stringify(response)); //{result:'success', message = 'aaa님 환영합니다.', data:{...}}
            const { result, message, data } = response;
            console.log('로그인 응답:', data);
            if (result === 'success') {
                // 인증받은 사용자일 경우 서버가 보내온 accessToken과 refreshToken을 sessionStorage, localStorage에 저장
                const { accessToken, refreshToken, id, name, email, tel } = data;
                sessionStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                // 회원정보(payload), 토큰...=> data를 store에 전달. 인증받은 사용자 => 전역 state로 관리하자
                signInAuthUser({ id, name, email, tel, accessToken, refreshToken });
                sessionStorage.setItem('authUser', JSON.stringify({ id, name, email, tel, accessToken, refreshToken }));
            } else {
                alert(message);
            }
            resetForm();
            onClose();
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message ?? error.message);
            resetForm();
        }
    };

    const resetForm = () => {
        setSignInUser({ email: '', passwd: '' });
        emailRef.current?.focus();
    };

    return (
        <div className="signIn">
            <div className="signIn-logo">
                <img src="/images/logo.png" width="187px" height="47px" alt="로고" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="signIn-item">
                    <label htmlFor="email">아이디</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="아이디"
                        ref={emailRef}
                        value={signInUser.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="signIn-item">
                    <label htmlFor="passwd">비밀번호</label>
                    <input
                        type="password"
                        name="passwd"
                        id="passwd"
                        placeholder="비밀번호"
                        ref={passwdRef}
                        value={signInUser.passwd}
                        onChange={handleChange}
                    />
                </div>
                <div className="signIn-bottom">
                    <div>아이디찾기</div>
                    <div>비밀번호 찾기</div>
                </div>
                <div>
                    <button className="signIn-btn">로그인</button>
                </div>
            </form>
        </div>
    );
}
