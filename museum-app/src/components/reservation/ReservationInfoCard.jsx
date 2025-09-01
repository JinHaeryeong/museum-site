import React from 'react';
import '../../assets/styles/reservationInfoCard.css';
export default function ReservationInfoCard({ title, name, email, phone, date, time, guests }) {
    return (
        <div className="reservation-info-card">
            <h3 className="reservation-info-title">최종 예약정보 확인</h3>
            <div className="reservation-info-item">
                <span className="reservation-title">전시명:</span>
                <span className="reservation-content">{title}</span>
            </div>
            <div className="reservation-info-item">
                <span className="reservation-title">예약자명:</span>
                <span className="reservation-content">{name}</span>
            </div>
            <div className="reservation-info-item">
                <span className="reservation-title">이메일:</span>
                <span className="reservation-content">{email}</span>
            </div>
            <div className="reservation-info-item">
                <span className="reservation-title">전화번호:</span>
                <span className="reservation-content">{phone}</span>
            </div>
            <div className="reservation-info-item">
                <span className="reservation-title">관람 날짜:</span>
                <span className="reservation-content">{date}</span>
            </div>
            <div className="reservation-info-item">
                <span className="reservation-title">관람 시간:</span>
                <span className="reservation-content">{time}</span>
            </div>
            <div className="reservation-info-item">
                <span className="reservation-title">인원 수:</span>
                <span className="reservation-content">{guests}명</span>
            </div>
        </div>
    );
}
