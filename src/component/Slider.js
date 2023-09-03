import React from 'react';
import 'animate.css';
import videoBackground from './assets/slidergif.mp4';
import image from "./assets/sliderimg.jpeg"
// Update the path to your video file

const Slider = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] w-[400px] sm:w-[100%] overflow-hidden">
      <video autoPlay muted loop className="absolute h-full w-full object-cover z-[-1]">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='sm:w-[800px] w-[300px] h-[200px] p-4 sm:p-8 animate__animated animate__backInDown absolute top-[100px] flex'>
        <div >
        <h1 className='font-bold sm:text-[80px] text-[20px] text-orange-600'>24/7</h1>
        <h1 className='font-bold sm:text-[60px] text-[20px] text-blue-400'>Remote Access Support</h1>
        <h1 className='font-bold sm:text-[40px] text-[20px] text-red-600'>Highly Qualify Team support team available for valuable clients</h1>
        </div>
        {/* <img src="https://d22rxqj6e2v058.cloudfront.net/wp-content/uploads/2019/05/laser-web-maker1.gif" alt="" className='w-[500px] h-[400px]'/> */}
      </div>
    </div>
  );
};

export default Slider;
