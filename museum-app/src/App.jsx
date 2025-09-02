import './assets/styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './components/users/SignUp';
import Exhibitions from './pages/Exhibitions';
import Info from './pages/Info';
import About from './pages/About';
import ReservationPage from './pages/ReservationPage';
import ReservationCheck from './pages/ReservationCheck';
import Mypage from './pages/Mypage';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/exhibitions" element={<Exhibitions />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/reserve" element={<ReservationPage />} />
                    <Route path="/reservationcheck" element={<ReservationCheck />} />
                    <Route path="/mypage" element={<Mypage />} />
                </Routes>
            </BrowserRouter>
            <hr />
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
