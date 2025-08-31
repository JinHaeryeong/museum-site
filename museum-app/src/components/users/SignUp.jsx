import { Form } from "react-router-dom";
import "../../assets/css/Sign.css";
import { useState } from "react";
export default function SignUp() {
    const [signUpInput, setSignUpInput] = useState({
        name: "",
        id: "",
        passwd: "",
        passwdCheck: "",
        tel: "",
        email: "",
    });
    return (
        <div className='signup'>
            <div className='signup-top'>
                <h1>회원가입</h1>
                <div>중앙 박물관의 회원이 되시면 전시를 쉽게 예약할 수 있습니다</div>
            </div>
            <form className='signup-form'>
                <div className='signup-form-item'>
                    <label htmlFor='name'>이름</label>
                    <input type='text' name='name' placeholder='이름을 입력해주세요' />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='id'>아이디</label>
                    <input type='text' name='id' placeholder='아이디를 입력해주세요' />
                    <button>중복 확인</button>
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='pwd'>비밀번호</label>
                    <input type='pwd' name='pwd' placeholder='비밀번호를 입력해주세요' />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='pwdCheck'>비밀번호 확인</label>
                    <input type='pwd' name='pwdCheck' placeholder='입력한 비밀번호를 다시 입력해주세요' />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='tel'>전화번호</label>
                    <input type='tel' name='tel' placeholder='전화번호를 입력해주세요' />
                </div>
                <div className='signup-form-item'>
                    <label htmlFor='email'>이메일</label>
                    <input type='email' name='email' placeholder='이메일을 입력해주세요' />
                </div>
                <button className='signup-form-submit-btn'>가입</button>
            </form>
        </div>
    );
}
