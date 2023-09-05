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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="mb-4">
    <label htmlFor="name" className="text-purple-600 font-semibold text-lg block mb-2">
      Your Groovy Name 🌟:
    </label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 bg-purple-50"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="mobile" className="text-blue-600 font-semibold text-lg block mb-2">
      Contact Number 📱:
    </label>
    <input
      type="tel"
      id="mobile"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 bg-blue-50"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="text-green-600 font-semibold text-lg block mb-2">
      Your Cool Email 📧:
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:border-green-700 bg-green-50"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="whatsapp" className="text-pink-600 font-semibold text-lg block mb-2">
      WhatsApp Number 📲:
    </label>
    <input
      type="tel"
      id="whatsapp"
      name="whatsapp"
      value={formData.whatsapp}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:outline-none focus:border-pink-700 bg-pink-50"
    />
  </div>
  <div className="mb-4 col-span-2">
    <label htmlFor="message" className="text-yellow-600 font-semibold text-lg block mb-2">
      Share Your Vibes 🌈:
    </label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-yellow-500 rounded-lg focus:outline-none focus:border-yellow-700 bg-yellow-50"
      required
    />
  </div>
  <div className="mb-4 col-span-2">
    <button
      type="submit"
      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg py-3 rounded-lg transition duration-300"
    >
      Let's Get Funky 🕺
    </button>
  </div>
</form>

        </div>
      </div>
    </div>
  );
}

export default PopupForm;
