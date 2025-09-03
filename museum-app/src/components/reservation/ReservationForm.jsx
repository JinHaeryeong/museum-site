import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";
import "../../assets/styles/reservationForm.css";

export default function ReservationForm({ exhibition }) {
    const navigate = useNavigate();
    const authUser = useAuthStore((s) => s.authUser);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        guests: 1,
        date: "",
        time: "10:00",
    });

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    // 오늘과 내일 구하기
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];

    useEffect(() => {
        if (authUser) {
            setForm((prev) => ({
                ...prev,
                name: authUser.name || "",
                email: authUser.email || "",
                phone: authUser.tel || "",
            }));
        }
    }, [authUser]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            alert("예약자 이름을 입력해주세요.");
            nameRef.current?.focus();
            return;
        }
        if (!form.email) {
            alert("이메일을 입력해주세요");
            emailRef.current?.focus();
            return;
        }
        if (form.phone.length !== 11) {
            alert("전화번호는 11자리여야 합니다. (예: 01012345678)");
            phoneRef.current?.focus();
            return;
        }
        if (!form.date) {
            alert("관람할 날짜를 선택해주세요.");
            return;
        }

        // ReservationCheck로 넘길 데이터
        navigate("/reservationCheck", {
            state: {
                user_id: authUser?.id,
                exhibition_id: exhibition?.id,
                visit_datetime: `${form.date} ${form.time}:00`,

                title: exhibition?.title,
                name: form.name,
                email: form.email,
                phone: form.phone,
                date: form.date,
                time: form.time,
                guests: form.guests,
            },
        });

        // 폼 초기화
        setForm((prev) => ({
            ...prev,
            date: "",
            time: "10:00",
            guests: 1,
        }));
    };

    return (
        <form className='reservation-wrapper' onSubmit={handleSubmit}>
            <h3 className='reservation-title'>예약 정보 입력</h3>

            <div className='form-group'>
                <label>전시명</label>
                <input type='text' value={exhibition?.title || ""} readOnly />
            </div>

            <div className='form-group'>
                <label>이름</label>
                <input type='text' ref={nameRef} value={form.name} readOnly />
            </div>

            <div className='form-group'>
                <label>이메일</label>
                <input type='email' ref={emailRef} value={form.email} readOnly />
            </div>

            <div className='form-group'>
                <label>전화번호</label>
                <input type='text' ref={phoneRef} value={form.phone} readOnly />
            </div>

            <div className='form-group required'>
                <label htmlFor='date'>관람 날짜</label>
                <input
                    type='date'
                    id='date'
                    name='date'
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={minDate}
                />
            </div>

            <div className='form-group'>
                <label>시간</label>
                <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                    <option value=''>시간 선택</option>
                    <option value='10:00'>10:00</option>
                    <option value='12:00'>12:00</option>
                    <option value='14:00'>14:00</option>
                    <option value='16:00'>16:00</option>
                    <option value='18:00'>18:00</option>
                </select>
            </div>

            <div className='form-group'>
                <label>인원</label>
                <input
                    type='number'
                    min='1'
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                />
            </div>

            <div className='button-group'>
                <button type='submit' className='submit-button'>
                    예약하기
                </button>
            </div>
        </form>
    );
}
