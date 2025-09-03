// ReservationInfoCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/reservationInfoCard.css';
import { apiCreateReservation } from '../../api/reservationApi';
import { useAuthStore } from '../../stores/authStore';

const EXH_MAP = {
    '마나 모아나-신성한 바다의 예술, 오세아니아': 1,
    '국보순회전, 모두가 함께하는 180일의 여정': 2,
    '두 발로 세계를 제패하다': 3,
    '각角진 백자 이야기': 4,
};

export default function ReservationInfoCard({ title, name, email, phone, date, time, guests }) {
    const navigate = useNavigate();
    const [saving, setSaving] = useState(false);
    const authUser = useAuthStore((s) => s.authUser);

    const onConfirm = async () => {
        try {
            if (!title || !date || !time || !guests) {
                alert('필수 정보가 누락되었습니다.');
                return;
            }
            setSaving(true);

            const exhibition_id = EXH_MAP[title];
            if (!exhibition_id) {
                alert('전시 식별에 실패했습니다.');
                return;
            }

            const visit_datetime = `${date} ${time}:00`;

            const payload = {
                user_id: authUser?.id,
                exhibition_id,
                person_count: Number(guests),
                visit_datetime,
                status: '예약완료',
            };

            const res = await apiCreateReservation(payload);
            if (res?.result === 'success') {
                alert('예약이 완료되었습니다.');
                navigate('/mypage');
            } else {
                alert(res?.message || '예약에 실패했습니다.');
            }
        } catch (e) {
            console.error(e);
            alert('예약 중 오류가 발생했습니다.');
        } finally {
            setSaving(false);
        }
    };

    const items = [
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
            <h2 className="reservation-info-title">최종 예약하기</h2>

            <div className="reservation-info-grid">
                {items.map((item, i) => (
                    <div className="reservation-info-row" key={i}>
                        <span className="reservation-info-label">{item.label}</span>
                        <span className="reservation-info-value">{item.value}</span>
                    </div>
                ))}
            </div>

            <div className="reservation-info-actions" style={{ gap: 8 }}>
                <button className="info-button" onClick={() => navigate('/exhibitions')} disabled={saving}>
                    돌아가기
                </button>
                <button className="info-button" onClick={onConfirm} disabled={saving}>
                    {saving ? '저장 중...' : '최종 예약하기'}
                </button>
            </div>
        </div>
    );
}
