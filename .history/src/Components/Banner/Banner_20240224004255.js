import React, { useState, useEffect } from 'react';
import './Banner.css';

const banners = [
  {
    title: 'स्व-रूपवर्धिनी सह आपल्या आंतरिक प्रकाश विस्कवा',
    subtitle: 'स्वच्छंद आपल्या स्व-आविष्कार आणि पूर्णत्वात आपल्या यात्रेला सामर्थ्य देणे',
    buttonText: 'आता शोधा',
    backgroundColor: '#A0522D',
  },
  {
    title: 'स्व-रूपवर्धिनी सह आपल्या संभाव्य जागृत करा',
    subtitle: 'स्व-परिवर्तन आणि सामर्थ्याच्या एक सफरावर निकाला',
    buttonText: 'अधिक जाणून घ्या',
    backgroundColor: '#8B4513',
  },
  {
    title: "'स्व'-रूपवर्धिनी सह आपल्या सार्वत्रिक संभावना सामर्थ करा",
    subtitle: 'तुमच्यातील अनंत संभावना अनलॉक करा',
    buttonText: 'आपला सफर सुरू करा',
    backgroundColor: '#CD853F',
  },
  {
    title: 'मन, शरीर आणि आत्म्याची समन्वय',
    subtitle: 'स्व-रूपवर्धिनी सह संतुलन अनुभवा',
    buttonText: 'संतुलन शोधा',
    backgroundColor: '#8B7355',
  },
];

const Slider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner < banners.length - 1 ? prevBanner + 1 : 0));
  };

  const prevBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner > 0 ? prevBanner - 1 : banners.length - 1));
  };

  const renderCurrentBanner = () => {
    const { title, subtitle, buttonText, backgroundColor } = banners[currentBanner];
    return (
      <div className="banner" style={{ backgroundColor }}>
        <h1 >{title}</h1>
        <p>{subtitle}</p>
        <a href='https://www.swaroopwardhinee.org/'><button className='rounded-md' onClick={exploreNow}>{buttonText}</button></a>
      </div>
    );
  };

  const exploreNow = () => {
    alert("Redirecting to explore page!");

  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextBanner();
    }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="banner-slider-container">
      <div className="slider-content" style={{ transform: `translateX(${-currentBanner * 100}%)` }}>
        {banners.map((_, index) => (
          <div key={index} className="banner-container">
            {renderCurrentBanner()}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevBanner}>&#8249;</button>
      <button className="next-button" onClick={nextBanner}>&#8250;</button>
      <div className='flex justify-between items-center'>
        <img src="https://pngimg.com/d/sword_PNG5525.png" alt="sword" width={350} ></img>
        <h3 className='text-7xl text-primary '>शिवकालीन युद्धकला</h3>
        <img src="https://pngimg.com/d/sword_PNG5525.png" alt="sword" width={350} className='scale-x-[-1] relative --top-' ></img>
      </div>
    </div>
  );
};

export default Slider;
