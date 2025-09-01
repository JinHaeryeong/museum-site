<<<<<<< HEAD
import ReservationForm from '../components/ReservationForm';
import ExhibitionInfo from '../components/ExhibitionInfo';
import '../assets/styles/exhibitionInfo.css';
import '../assets/styles/reservationPage.css';

export default function ReservationPage() {
    return (
        <div>
            <h2>전시 관람 예약</h2>
            <div className="reservation-page">
                <section className="reservation-left">
                    <ExhibitionInfo />
                </section>

                <section className="reservation-right">
                    <ReservationForm />
                </section>
            </div>
        </div>
    );
}
=======
import ReservationForm from '../components/ReservationForm';
import ExhibitionInfo from '../components/ExhibitionInfo';
import '../assets/styles/exhibitionInfo.css';
import '../assets/styles/reservationPage.css';

export default function ReservationPage() {
    return (
        <div>
            <h2>전시 관람 예약</h2>
            <div className="reservation-page">
                <section className="reservation-left">
                    <ExhibitionInfo />
                </section>

                <section className="reservation-right">
                    <ReservationForm />
                </section>
            </div>
        </div>
    );
}
>>>>>>> 2ec2677f8d753734095402b1c69658c46ee0d555
