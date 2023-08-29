import React from 'react';
import 'animate.css';


const Slider = () => {
  return (
    <div className=" relative h-[400px] sm:h-[500px] w-[400px] sm:w-[100%]  ">
      <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
      <div className='sm:w-[800px] w-[300px] h-[200px] p-4 sm:p-8 animate__animated animate__backInDown absolute top-[100px]'>
        <h1 className='font-bold sm:text-[80px] text-[20px] text-orange-600'>24/7</h1>
        <h1 className='font-bold sm:text-[60px] text-[20px] text-blue-400'>Remote Access Support</h1>
        <h1 className='font-bold sm:text-[40px] text-[20px] text-red-500'>Highly Qualify Team support team available for valuable clients </h1>
      </div>
      </div>
    </div>
  );
};

export default Slider;
