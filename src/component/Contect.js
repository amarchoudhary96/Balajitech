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
    <div className="flex flex-col items-center justify-center mb-5  sm:pt-0 pt-[50px]  ">
      <div className="mb-8 w-[390px] sm:w-full">
        <img src="https://previews.123rf.com/images/nsit0108/nsit01081906/nsit0108190600415/124985905-contact-us-concept-banner-cartoon-illustration-of-contact-us-vector-concept-banner-for-web-design.jpg" alt="" />
      </div>
      <div className="text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Connect With Us</h1>
          <p className="text-gray-600 ">
            Our team would be happy to assist you. For any query! Please fill the form or mail us
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto gap-4 sm:w-[1300px] w-[80%]">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
};

export default Contect;
