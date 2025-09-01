import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ArrowBigDown, Camera } from 'lucide-react';

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
