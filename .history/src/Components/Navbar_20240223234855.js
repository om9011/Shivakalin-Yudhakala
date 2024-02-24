import React from 'react';
import sdss from '../Assets/SDSS.png';

const Navbar = () => {
  return (
    <nav>
      <div className="flex fixed items-center justify-between border border-gray-400 py-4 px-8 w-full z-10">
        <div className="flex gap-4 items-center">
          <img src={sdss} alt="Logo" width={40} height={40} />
          <span className="text-2xl text-blue-600 ">शिवकालीन युद्धकला</span>
        </div>
        <ul className="flex gap-10 text-xl">
          <li><a href="#gauntlet">इतिहास</a></li>
          <li><a href="#sword">'स्व'-रूपवर्धिनी</a></li>
          <li><a href="#archery">सादरीकरणे </a></li>
          <li><a href="#about">अभिप्राय</a></li>
          <li><a href="#contact">संपर्क</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
