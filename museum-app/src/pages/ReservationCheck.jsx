import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReservationInfoCard from '../components/reservation/ReservationInfoCard';

export default function ReservationCheck() {
    const location = useLocation();
    const data = location.state || {};

    return (
        <div>
            <h2>최종 예약정보 확인</h2>
            <ReservationInfoCard
                title={data.title}
                name={data.name}
                email={data.email}
                phone={data.phone}
                date={data.date}
                time={data.time}
                guests={data.guests}
            />
        </div>
    );
}
