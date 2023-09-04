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
        <div className="bg-white p-4 sm:px-8 sm:py-3 rounded-md shadow-lg w-[250px] sm:w-[400px]   h-[450px] sm:h-[500px]  relative">
          <RxCross2 className='absolute top-2 right-2 text-[24px] cursor-pointer' onClick={onClose} />
          <form onSubmit={handleSubmit} className="gap-1">
            <div className="sm:mb-2">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full  py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="sm:mb-2">
              <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="sm:mb-2">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="sm:mb-2">
              <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-1">
                WhatsApp Number:
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="sm:mb-2">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;
