import React, { useState } from 'react';

const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex sm:flex-row flex-col  items-center justify-evenly   mb-5 px-7 sm:px-0  sm:pt-0 pt-[80px]   ">
      <div className="mb-8 w-[250px] sm:w-[30%] pt-12">
        <img src="https://img.freepik.com/free-vector/customer-service-call-center-character-flat-cartoon-business-people-illustration-vector-design_40876-2817.jpg?w=2000" alt="" />
      </div>
      <div className="text-center sm:mt-20 mt-0">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-600">Connect With Us</h1>
          <p className="text-gray-600 ">
            Our team would be happy to assist you. For any query! Please fill the form or mail us
          </p>
        </div>
        <div>
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
};

export default Contect;
