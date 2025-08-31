import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservation from './pages/Reservation';
import MainPage from './pages/mainpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/reserve" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
