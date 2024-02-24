import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between border border-gray-400 py-4">
        <div className="flex gap-3">
          <img src="logo.png" alt="Logo" />
          <span className="text-2xl text-blue-600 ">शिवकालीन युद्धकला</span>
        </div>
        <ul className="flex gap-8">
          <li><a href="#gauntlet">Gauntlet</a></li>
          <li><a href="#sword">itihas</a></li>
          <li><a href="#archery">Archery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
