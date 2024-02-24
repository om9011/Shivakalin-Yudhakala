import React from 'react';
import sdss from '../Assets/SDSS.png';

const Navbar = () => {
  return (
    <nav>
      <div className="flex fixed items-center justify-between border border-gray-400 py-4 px-8 w-full z-10 bg-white">
        <div className="flex gap-4 items-center">
          <img src={sdss} alt="Logo" width={40} height={40} />
          <span className="text-2xl text-blue-600 ">शिवकालीन युद्धकला</span>
        </div>
        <ul className="flex gap-3 text-xl">
          <li><a className='rounded-md border-0 px-4 text- hover:border-b-4 hover:border-b-blue-500' href="#gauntlet">इतिहास</a></li>
          <li><a className='rounded-md border-0 px-4 text- hover:border-b-4 hover:border-b-blue-500' href="#sword">'स्व'-रूपवर्धिनी</a></li>
          <li><a className='rounded-md border-0 px-4 text- hover:border-b-4 hover:border-b-blue-500' href="#archery">सादरीकरणे </a></li>
          <li><a className='rounded-md border-0 px-4 text- hover:border-b-4 hover:border-b-blue-500' href="#about">अभिप्राय</a></li>
          <li><a className='rounded-md border-0 px-4 text- hover:border-b-4 hover:border-b-blue-500' href="#contact">संपर्क</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
