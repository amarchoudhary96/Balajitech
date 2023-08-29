import React, { useEffect, useRef, useState } from 'react';

const Progressbar = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setAnimate(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-slate-300 py-10 flex flex-col justify-center items-center">
      <div className={`text-center mb-6 ${animate ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2 className="text-3xl font-semibold">Our Achivement</h2>
        <p className="text-gray-600">Counter to count up to a target number</p>
      </div>

      <div className={`flex flex-col sm:flex-row justify-center items-center gap-5  ${animate ? 'animate__animated animate__fadeInUp' : ''}`}>
        <div className="flex flex-col gap-5 justify-center items-center counter p-4 rounded">
          <i className="fa fa-code fa-2x text-blue-500"></i>
          <h2 className="timer count-title count-number text-2xl font-semibold text-[35px]" data-to="100" data-speed="1500">443</h2>
          <p className="count-text text-sm text-gray-600 font-bold text-[30px]">Our Customers</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center counter p-4 rounded">
          <i className="fa fa-coffee fa-2x text-blue-500"></i>
          <h2 className="timer count-title count-number text-2xl font-semibold text-[35px]" data-to="1700" data-speed="1500">439</h2>
          <p className="count-text text-sm text-gray-600 font-bold text-[30px]">Happy Clients</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center counter p-4 rounded ">
          <i className="fa fa-lightbulb-o fa-2x text-blue-500"></i>
          <h2 className="timer count-title count-number text-2xl font-semibold text-[35px]" data-to="11900" data-speed="1500">443</h2>
          <p className="count-text text-sm text-gray-600 font-bold text-[30px]">Projects Completed</p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center counter p-4 rounded ">
          <i className="fa fa-bug fa-2x text-blue-500"></i>
          <h2 className="timer count-title count-number text-2xl font-semibold text-[35px]" data-to="157" data-speed="1500">262</h2>
          <p className="count-text text-sm text-gray-600 font-bold text-[30px]">Coffee with Clients</p>
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
