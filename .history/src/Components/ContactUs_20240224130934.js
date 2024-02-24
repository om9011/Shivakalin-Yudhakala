import React, { useState } from 'react';

const ContactUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      message: ''
    });
  };

  return (
    <section id='contact' className="max-w-lg mx-auto mt-10">
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
            placeholder="आपले नाव"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
          <label htmlFor="email" className="text-xl block mb-1">'ई'-मेल</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="आपला ईमेल"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div><div>
          <label htmlFor="email" className="text-xl block mb-1">मोबाईल नं. </label>
          <input type="text" readOnly value="+91"/>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="आपला ईमेल"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        </div>
        <div>
          <label htmlFor="message" className="text-xl block mb-1">संदेश</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="आपला संदेश"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">सबमिट करा</button>
      </form>
    </section>
  );
};

export default ContactUs;
