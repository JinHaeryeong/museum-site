import axios from "axios";
import "../../assets/styles/sign.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    const [signUpInput, setSignUpInput] = useState({
        name: "",
        email: "",
        pwd: "",
        pwdCheck: "",
        tel: "",
    });
    let emailRef = useRef(null);
    let nameRef = useRef(null);
    let passwdRef = useRef(null);
    let passwdCheckRef = useRef(null);
    let telRef = useRef(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
    };

    const check = () => {
        const { name, email, pwd, pwdCheck, tel } = signUpInput;
        // 유효성 체크. 입력 포커스 주기
        if (!name.trim()) {
            alert("이름을 입력하세요");
            nameRef.current?.focus();
            return false;
        }
        if (!email.trim()) {
            //정규식 이용해서 이메일 형식 맞는지 체크
            alert("이메일 입력하세요");
            emailRef.current?.focus();
            return false;
        }
        if (!pwd.trim()) {
            //정규식 이용해서 이메일 형식 맞는지 체크
            alert("비밀번호 입력하세요");
            passwdRef.current?.focus();
            return false;
        }
        if (!pwdCheck.trim()) {
            //정규식 이용해서  비밀번호 맞는지 체크
            alert("비밀번호 확인을 입력하세요");
            passwdCheckRef.current?.focus();
            return false;
        }
        if (!tel.trim()) {
            //정규식 이용해서 이메일 형식 맞는지 체크
            alert("전화번호를 입력하세요");
            telRef.current?.focus();
            return false;
        }
        if (tel.length > 11) {
            signUpInput.tel = tel.slice(0, 11);
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const b = check();
        try {
            const url = `http://localhost:7777/api/users`;
            const response = await axios.post(url, signUpInput, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert(JSON.stringify(response));
            if (response.status === 200) {
                alert("회원가입을 완료하였습니다.");
                navigate("/");
            }
        } catch (error) {
            alert("서버 오류: " + error.message);
        }
    };

    return (
        <div className='signup'>
            <div className='signup-top'>
                <h1>회원가입</h1>
                <img src='/images/logo.png' alt='로고' />
                <div>중앙 박물관의 회원이 되시면 전시를 쉽게 예약할 수 있습니다</div>
            </div>
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className='signup-form-item'>
                    <label htmlFor='name'>이름</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='이름을 입력해주세요'
                        ref={nameRef}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='email'>이메일</label>
                    <input
                        type='email'
                        name='email'
                        id='tel'
                        placeholder='이메일을 입력해주세요'
                        ref={emailRef}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='pwd'>비밀번호</label>
                    <input
                        type='password'
                        name='pwd'
                        id='pwd'
                        placeholder='비밀번호를 입력해주세요'
                        ref={passwdRef}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='pwdCheck'>비밀번호 확인</label>
                    <input
                        type='password'
                        name='pwdCheck'
                        id='pwdCheck'
                        placeholder='입력한 비밀번호를 다시 입력해주세요'
                        ref={passwdCheckRef}
                        onChange={handleChange}
                    />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='tel'>전화번호</label>
                    <input
                        type='number'
                        name='tel'
                        id='tel'
                        placeholder='전화번호를 - 없이 입력해주세요'
                        ref={telRef}
                        onChange={handleChange}
                    />
                </div>

                <button className='signup-form-submit-btn'>가입하기</button>
            </form>
        </div>
    );
}
