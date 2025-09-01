import ReservationForm from "../components/reservation/ReservationForm";
import ExhibitionInfo from "../components/home/ExhibitionInfo";
import { useLocation } from "react-router-dom";

import "../assets/styles/exhibitionInfo.css";
import "../assets/styles/reservationPage.css";

export default function ReservationPage() {
    const location = useLocation();
    const exhibition = location.state || {};

    return (
        <div>
            <h2>전시 관람 예약</h2>
            <div className='reservation-page'>
                <section className='reservation-left'>
                    <ExhibitionInfo {...exhibition} />
                </section>

                <section className='reservation-right'>
                    <ReservationForm exhibitionTitle={exhibition.title} />
                </section>
            </div>
        </div>
    );
}
