import { BrowserRouter, Routes, Route } from 'react-router-dom';
3;
import './assets/styles/global.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ArrowBigDown, Camera } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Info from './pages/Info';
import Exhibitions from './pages/Exhibitions';
import About from './pages/About';
import SignUp from './components/users/SignUp';
import ReservationPage from './components/ReservationPage';

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
