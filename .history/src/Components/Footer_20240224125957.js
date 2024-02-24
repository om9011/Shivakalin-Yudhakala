import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Your Company</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-sm hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">About Us</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">Services</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
