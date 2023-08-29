import React from 'react';

const Process = () => {
  return (
        <div>
    <div className='flex flex-col justify-center items-center gap-5 sm:w-full w-[400px] bg-gray-100 py-6 px-2'>
      <h1 className='sm:font-bold sm:text-[40px] font-bold text-[25px]'>Website Development Process</h1>
      <p className='font-semibold sm:text-[15px] text-[15px] sm:w-[1000px] w-[350px]'>We have a highly professional team, which works systematically. Our expert team follows the steps to ensure delivering an error-free website</p>

      {/* Desktop and Mobile Image */}
      <img
        src="https://wpminds.com/wp-content/uploads/2022/02/Website-development-process-flowchart.png"
        alt=""
        className="w-[60%] bg-red-400 max-w-screen-xl mx-auto animate-pulse"
      />
    </div>
    <img src="" alt="" />
    </div>
  );
};

export default Process;
