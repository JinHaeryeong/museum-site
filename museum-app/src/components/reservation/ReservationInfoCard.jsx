import React from 'react';
import '../../assets/styles/reservationInfoCard.css';

export default function ReservationInfoCard({ title, name, email, phone, date, time, guests }) {
    const reservationData = [
        { label: '전시명', value: title },
        { label: '예약자명', value: name },
        { label: '이메일', value: email },
        { label: '전화번호', value: phone },
        { label: '관람 날짜', value: date },
        { label: '관람 시간', value: time },
        { label: '인원 수', value: `${guests}명` },
    ];

    return (
        <div className="reservation-info-card">
            <h3 className="reservation-info-title">최종 예약정보 확인</h3>
            {reservationData.map((item, idx) => (
                <div className="reservation-info-item" key={idx}>
                    <span className="reservation-title">{item.label}:</span>
                    <span className="reservation-content">{item.value}</span>
                </div>
            ))}
        </div>
    );
}
