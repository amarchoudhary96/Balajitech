import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const items = [
    { id: 1, title: 'TReal Estate & Property' },
    { id: 2, title: 'Events & Tickets' },
    { id: 3, title: 'On-Demand' },
    { id: 4, title: 'Travel & Hospitality' },
    { id: 5, title: 'Social Networking' },
    { id: 6, title: 'Transport' },
    { id: 7, title: 'Banking, Finance & Insurance' },
    { id: 8, title: 'Healthcare' },
    { id: 9, title: 'Ecommerce, Retail & B2' },
    { id: 10, title: 'Food & Restaurant' },
    // ... other items
  ];

  const [selectedId, setSelectedId] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleScroll = () => {
    const serviceSection = document.getElementById('service-section');
    if (serviceSection) {
      const rect = serviceSection.getBoundingClientRect();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 shadow-2xl w-[400px] sm:w-full pm:mt-0 pt-[100px]">
      <h1 className='sm:text-[40px] text-[25px] sm:w-[70%] w-[90%] font-bold flex justify-center'>Serving In Several Industries</h1>
      <p className='sm:text-[20px] text-[15px] w-[80%] font-semibold'>For your website to succeed, you required a team of creative designers, website developers . We are serving in several industries like Real Estate, Events Management, Travel & Hospitality, Social Networking, Education, Transport, Finance, Healthcare, E-Commerce, Food & Restaurant, etc.</p>
      <div id="service-section" className="max-w-screen-lg mx-auto p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map(item => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className={`cursor-pointer sm:w-[250px] sm:h-[200px] w-[150px] h-[150px] p-6 bg-blue-400 shadow-2xl rounded-md hover:bg-gray-200  transition duration-300 ${animate ? 'animate__animated animate__flipInX' : ''}`}
            >
              <motion.h5 className="text-sm md:text-lg font-semibold">{item.subtitle}</motion.h5>
              <motion.h2 className="text-lg md:text-xl font-bold mt-2">{item.title}</motion.h2>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className="max-w-screen-lg flex flex-col justify-center items-center mx-auto p-6 mt-6 mb-4 bg-blue-50 shadow-md rounded-md h-[150px]  w-[150px] sm:w-[400px] sm:h-[200px]">
            
            <motion.h2 className="text-lg md:text-xl font-bold mt-2">
              {items.find(item => item.id === selectedId).title}
            </motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="bg-blue-500 flex justify-center items-center text-white px-4 py-2 rounded-md mt-4 mb-8 hover:bg-blue-600 transition duration-300"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
