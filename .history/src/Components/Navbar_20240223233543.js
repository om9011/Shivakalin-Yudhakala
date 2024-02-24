import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex">
          <img src="logo.png" alt="Logo" />
          <span className="text-2xl text-blue-600
          ">शिवकालीन युद्धकला</span>
        </div>
        <ul className="flex">
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
