import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

function PopupForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      whatsapp: '',
      message: '',
    });
  };

  return (
    <div className='relative'>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-[50px] ">
      <div className="bg-white px-4 mx-8 sm:px-8 sm:py-3 rounded-md shadow-lg w-full z-[999 sm:max-w-md h-auto sm:h-[500px] relative">
  <RxCross2 className='absolute top-2 right-2 text-[24px] cursor-pointer' onClick={onClose} />
  <form onSubmit={handleSubmit} className="flex flex-col  sm:gap-2 sm:py-1 py-4 px-12] z-[999]">
    <div className="mb-4 sm:flex sm:flex-col">
      <label htmlFor="name" className="text-purple-600 font-semibold text-lg block mb-2">
        Your Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border text-purple-600 rounded-lg focus:outline-none focus:border-purple-600 bg-purple-50"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="mobile" className="text-purple-600 font-semibold text-lg block mb-2">
        Contact Number:
      </label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full px-4 py-2 border text-purple-600 rounded-lg focus:outline-none focus:border-purple-600 bg-purple-50"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="text-purple-600 font-semibold text-lg block mb-2">
        Your Cool Email 📧:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border text-purple-600 rounded-lg focus:outline-none focus:border-purple-600 bg-purple-50"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="whatsapp" className="text-purple-600 font-semibold text-lg block mb-2">
        WhatsApp Number :
      </label>
      <input
        type="tel"
        id="whatsapp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        className="w-full px-4 py-2 border text-purple-600 rounded-lg focus:outline-none focus:border-purple-600 bg-purple-50"
      />
    </div>
    
    <div className="mb-4 col-span-2">
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg py-3 rounded-lg transition duration-300"
      >
        Let's Get In Touch 🕺
      </button>
    </div>
  </form>
</div>

      </div>
    </div>
  );
}

export default PopupForm;
