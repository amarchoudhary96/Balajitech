import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import OverView from './component/OverView';
import Packages from './component/Packages';
import Services from './component/Services';
import Contact from './component/Contect'; // Updated import path
import PopupForm from './component/PopUpForm'; // Import the PopupForm component

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company-overview" element={<OverView />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* {showPopup && <PopupForm onClose={closePopup} />} */}
    </BrowserRouter>
  );
}

export default App;
