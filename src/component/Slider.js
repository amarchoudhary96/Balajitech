import React from 'react';
import 'animate.css';
import image from "./assets/slider.jpg"; // Import your background image

const Slider = () => {
  const sliderStyle = {
    // backgroundImage: `url("https://images.pexels.com/photos/82256/pexels-photo-82256.jpeg?cs=srgb&dl=pexels-tbee-82256.jpg&fm=jpg")`, // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='w-full h-full pt-[65px]'>
      <div className="relative h-[400px] sm:h-[500px] w-full sm:w-[100%]" style={sliderStyle}>
        <div className='sm:flex '>
        <div className=' sm:w-[800px] w-[300px] h-[200px] p-4 sm:p-8 animate__animated animate__backInDown  top-[100px] flex '>
          <div>
            <h1 className='font-bold sm:text-[80px] text-[20px] text-orange-600'>24/7</h1>
            <h1 className='font-bold sm:text-[60px] text-[20px] text-blue-400'>Remote Access Support</h1>
            <h1 className='font-bold sm:text-[40px] text-[20px] text-red-600'>Highly Qualify Team support team available for valuable clients</h1>
          </div>
         
        </div>
        <div >
            <img src="https://img.freepik.com/premium-vector/programmer-character-work-laptop-developing-programming-languages-websites-software-online-studying-distant-education-coding-computing-occupation-cartoon-people-vector-illustration_87771-11363.jpg" alt="" />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Slider;
