import React from 'react';
import sdss from '../Assets/SDSS.png';

const Navbar = () => {
  return (
    <header>
    <nav>
      <div className="flex fixed items-center justify-between border border-b-gray-400 py-4 px-8 w-full z-10 bg-white">
        <div className="flex gap-4 items-center">
          <img src={sdss} alt="Logo" width={40} height={40} />
          <span className="text-2xl text-primary font-semibold pt-2">शिवकालीन युद्धकला</span>
        </div>
        <ul className="flex gap-3 text-xl">
          <li><a className='rounded-sm duration-400 border-0 px-4 hover:border-b-4 hover:border-b-primary' href="#gauntlet">इतिहास</a></li>
          <li><a className='rounded-sm duration-400 border-0 px-4 hover:border-b-4 hover:border-b-primary' href="#sword">'स्व'-रूपवर्धिनी</a></li>
          <li><a className='rounded-sm duration-400 border-0 px-4 hover:border-b-4 hover:border-b-primary' href="performance-slider-container">सादरीकरणे </a></li>
          <li><a className='rounded-sm duration-400 border-0 px-4 hover:border-b-4 hover:border-b-primary' href="#about">अभिप्राय</a></li>
          <li><a className='rounded-sm duration-400 border-0 px-4 hover:border-b-4 hover:border-b-primary' href="#contact">संपर्क</a></li>
        </ul>
      </div>
    </nav>

    </header>
  );
}

export default Navbar;
