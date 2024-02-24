import React, { useState } from 'react';

const ContactUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here (e.g., send data to server, etc.)
    console.log('Form submitted:', formData);
    // Reset form inputs after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <section id='contact' className="max-w-lg mx-auto mt-10">
      <>
      <h2 className="text-5xl text-primary font-bold mb-4">संपर्क करा</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-xl block mb-1">नाव</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="तुमचे नाव"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label htmlFor="email" className="text-xl block mb-1">ईमेल</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="तुमचा ईमेल"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="text-xl block mb-1">मोबाईल नंबर</label>
            <div className="w-full flex gap-2 items-center justify-start">
              <input
                type="text"
                id="countryCode"
                name="countryCode"
                value="+91"
                readOnly
                className="w-14 border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="तुमचा मोबाईल नंबर"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-xl block mb-1">संदेश</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="तुमचा संदेश"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">सबमिट करा</button>
      </form>
      </>
    </section>
  );
};

export default ContactUs;
