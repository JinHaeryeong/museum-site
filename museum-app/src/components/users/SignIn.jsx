import "../../assets/styles/Sign.css";
export default function SignIn() {
    return (
        <div className='signIn'>
            <div className='signIn-logo'>
                <img src='/images/logo.png' width='187px' height='47px' alt='로고' />
            </div>
            <div className='signIn-item'>
                <label htmlFor='id'>아이디</label>
                <input type='text' name='id' placeholder='아이디' />
            </div>
            <div className='signIn-item'>
                <label htmlFor='pwd'>비밀번호</label>
                <input type='password' name='pwd' placeholder='비밀번호' />
            </div>
            <div className='signIn-bottom'>
                <div>아이디찾기</div>
                <div>비밀번호 찾기</div>
            </div>
            <div>
                <button className='signIn-btn'>로그인</button>
            </div>
        </div>
    );
}
