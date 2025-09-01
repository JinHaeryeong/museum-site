import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationPage from './pages/ReservationPage';
import MainPage from './pages/mainpage';
import AboutInfo from './components/AboutInfo';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/reserve" element={<ReservationPage />} />
                <Route path="/aboutInfo" element={<AboutInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
