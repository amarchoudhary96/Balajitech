import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import OverView from './component/OverView';
import Process from './component/Process';
import Progressbar from './component/Progressbar';
import Technologies from './component/Technologies';
import Packages from './component/Packages';
import Services from './component/Services';
import Contect from './component/Contect';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Company OverView" element={<OverView />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contect />} />
      
      
    </Routes>
    <Process/>
    <Progressbar/>
    <Technologies/>
    <Footer/>
    
    
   

  </BrowserRouter>
  );
}

export default App;
