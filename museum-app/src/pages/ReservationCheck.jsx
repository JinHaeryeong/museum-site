import React from 'react';
import { useLocation } from 'react-router-dom';
import ReservationInfoCard from '../components/reservation/ReservationInfoCard';

export default function ReservationCheck() {
    const location = useLocation();
    const data = location.state || {};

    return (
        <div>
            <h2>전시 관람 최종예약 전 예약정보확인</h2>
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
