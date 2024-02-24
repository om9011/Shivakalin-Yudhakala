import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="fl">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <span>शिवकालीन युद्धकला</span>
        </div>
        <ul className="nav-links">
          <li><a href="#gauntlet">Gauntlet</a></li>
          <li><a href="#sword">Sword</a></li>
          <li><a href="#archery">Archery</a></li>
          {/* Add more items for other historical war skills */}
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
