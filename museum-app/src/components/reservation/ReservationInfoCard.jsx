// srcimport React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/reservationInfoCard.css";

function formatPhoneNumber(phone) {
  if (!phone) return "";
  if (phone.length === 11) {
    return `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`;
  }
  return phone;
}

export default function ReservationInfoCard({
  title,
  name,
  email,
  phone,
  date,
  time,
  guests,
}) {
  const navigate = useNavigate();

  const formattedPhone = formatPhoneNumber(phone);

  const items = [
    { label: "전시명 : ", value: title },
    { label: "예약자명 : ", value: name },
    { label: "이메일 : ", value: email },
    { label: "전화번호", value: formattedPhone },
    { label: "관람 날짜 : ", value: date },
    { label: "관람 시간 : ", value: time },
    { label: "인원 수 : ", value: `${guests}명` },
  ];

  return (
    <div className="reservation-info-card">
      <h2 className="reservation-info-title">최종 예약정보 확인</h2>

      <div className="reservation-info-grid">
        {items.map((item, i) => (
          <div className="reservation-info-row" key={i}>
            <span className="reservation-info-label">{item.label}</span>
            <span className="reservation-info-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="reservation-info-actions">
        <button className="info-button" onClick={() => navigate("/")}>
          예약내역확인
        </button>
      </div>
    </div>
  );
}
