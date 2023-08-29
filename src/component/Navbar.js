import React, { useState } from 'react';
import 'animate.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import Slider from './Slider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div  >
      <div className={`fixed z-[999] bg-white w-full h-full sm:hidden transition-transform duration-300 ${sidebar ? 'translate-x-0' : '-translate-x-full'} `}>
        <div className="flex flex-col gap-4 px-8 text-[20px] font-medium py-5 mt-5 relative">
          <img
            src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/08/cropped-cropped-cropped-logo1-300x501-1-1.png"
            className="w-[250px]"
            alt=""
          />
                  <Link to={"/home"} onClick={()=>{setSidebar(false)}}><h1>Home</h1></Link>

         <Link to="/Company OverView" onClick={()=>{setSidebar(false)}}> <h1 >Company OverView</h1></Link>
         <Link to={"/services"} onClick={()=>{setSidebar(false)}}> <h1>services</h1></Link>
          <Link to={"/packages"} onClick={()=>{setSidebar(false)}}><h1>packages</h1></Link>
          <h1>Join Us</h1>
          <Link to={"contact"} onClick={()=>{setSidebar(false)}}><h1>Contact us</h1></Link>
          <button className="w-[250px] h-[40px] text-white rounded-r-3xl rounded-l-3xl bg-gradient-to-r from-blue-300 to-blue-900 flex items-center justify-center">
            Get A Free Quote
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://img.lovepik.com/element/45008/4960.png_860.png"
              className="w-[30px]"
              alt=""
            />
            <h1>+91 7891689566</h1>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://img.lovepik.com/element/45008/4960.png_860.png"
              className="w-[30px]"
              alt=""
            />
            <h1>+91 8696702772</h1>
          </div>
          <RxCross2
            className="absolute top-0 left-[340px] text-[45px] mt-4"
            onClick={handleSidebarToggle}
          />
        </div>
      </div>
      
      
      <div className={`fixed z-[999] flex flex-col gap-5 px-[10px] sm:px-[80px] py-0 sm:py-10 shadow-2xl h-[70px] sm:h-[200px] bg-white w-full sm:flex-col sm:relative sm:justify-start ${!sidebar ? 'translate-x-0' : '-translate-x-full'} cursor-pointer`} >
        <div className="flex justify-start w-[270px] sm:w-[400px] mt-2 sm:mt-0">
          <img
            src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/08/cropped-cropped-cropped-logo1-300x501-1-1.png"
            alt=""
          />
          <div className="text-[50px] ml-[50px] sm:hidden text-blue-500 animate__animated animate__pulse">
            <AiOutlineMenu onClick={handleSidebarToggle} />
          </div>
        </div>

        <div className="hidden sm:flex gap-8 text-xm font-medium justify-end">
        <Link to={"/home"} onClick={()=>{setSidebar(false)}}><h1>Home</h1></Link>

        <Link to={"/Company OverView"} onClick={()=>{setSidebar(false)}}> <h1 >Company OverView</h1></Link>
         <Link to={"/services"} onClick={()=>{setSidebar(false)}}> <h1>services</h1></Link>
          <Link to={"/packages"} onClick={()=>{setSidebar(false)}}><h1>packages</h1></Link>
          <h1>Join Us</h1>
          <Link to={"contact"} onClick={()=>{setSidebar(false)}}><h1>Contact us</h1></Link>
          <button className="w-[250px] h-[40px] text-white rounded-r-3xl rounded-l-3xl bg-gradient-to-r from-blue-300 to-blue-900 flex items-center justify-center">
            Get A Free Quote
          </button>
        </div>
      </div>
      <Slider className="relative"/>
      <img src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/06/user-friendly-support1.png" alt="" className="w-[250px] sm:h-[400px] sm:w-[600px] absolute sm:left-[700px] sm:top-[300px] top-[240px] left-[150px] " />
     
    </div>
  );
};

export default Navbar;
