import { useState, useRef } from 'react';
import '../assets/styles/reservationForm.css';

export default function ReservationForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone1: '010',
        phone2: '',
        phone3: '',
        date: '',
        time: '10:00',
        guests: 1,
    });

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const today = new Date().toISOString().split('T')[0]; // 이전 날짜 선택 방지

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            alert('예약자 이름을 입력해주세요.');
            nameRef.current?.focus();
            return;
        }

        if (!form.email) {
            alert('이메일을 입력해주세요');
            emailRef.current?.focus();
            return;
        }

        const phoneNumber = form.phone1 + form.phone2 + form.phone3;
        if (phoneNumber.length !== 11 || !/^\d+$/.test(phoneNumber)) {
            alert('전화번호는 숫자 11자리여야 합니다.');
            phoneRef.current?.focus();
            return;
        }

        if (!form.date) {
            alert('관람 날짜를 선택해주세요.');
            return;
        }

        alert(`예약이 완료되었습니다.
      예약자 이름 : ${form.name}
      이메일: ${form.email}
      전화번호: ${phoneNumber}
      날짜: ${form.date}
      시간: ${form.time}
      인원 수: ${form.guests} 명
    `);

        setForm({
            name: '',
            email: '',
            phone1: '010',
            phone2: '',
            phone3: '',
            date: '',
            time: '10:00',
            guests: 1,
        });
    };

    const handleReset = () => {
        setForm({
            name: '',
            email: '',
            phone1: '010',
            phone2: '',
            phone3: '',
            date: '',
            time: '10:00',
            guests: '1',
        });
    };

    return (
        <div className="reservation-wrapper">
            <h2 className="reservation-title">예약자 정보 입력</h2>

            <form onSubmit={handleSubmit} onReset={handleReset}>
                <h3 className="reservation-section-title">예약자 정보</h3>

                <div className="form-group required">
                    <label htmlFor="name">이름</label>
                    <input type="text" id="name" name="name" value={form.name} ref={nameRef} onChange={handleChange} />
                </div>

                <div className="form-group required">
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        ref={emailRef}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group phone required">
                    <label htmlFor="phone1">휴대폰번호</label>
                    <input type="text" name="phone1" value={form.phone1} onChange={handleChange} ref={phoneRef} />
                    <input type="text" name="phone2" value={form.phone2} onChange={handleChange} />
                    <input type="text" name="phone3" value={form.phone3} onChange={handleChange} />
                </div>

                <h3 className="reservation-section-title">관람 정보</h3>

                <div className="form-group required">
                    <label htmlFor="date">관람 날짜</label>
                    <input type="date" id="date" name="date" value={form.date} onChange={handleChange} min={today} />
                </div>

                <div className="form-group required">
                    <label htmlFor="time">관람 시간</label>
                    <select id="time" name="time" value={form.time} onChange={handleChange}>
                        <option value="10:00">10:00</option>
                        <option value="12:00">12:00</option>
                        <option value="14:00">14:00</option>
                        <option value="16:00">16:00</option>
                    </select>
                </div>

                <div className="form-group required">
                    <label htmlFor="guests">관람 인원</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        min="1"
                    />
                </div>

                <div className="button-group">
                    <button type="reset" className="submit-button">
                        취소
                    </button>
                    <button type="submit" className="submit-button">
                        예약하기
                    </button>
                </div>
            </form>
        </div>
    );
}
