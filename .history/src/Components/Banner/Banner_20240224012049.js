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
        <h1 className="text-lg md:text-xl lg:text-2xl">{title}</h1>
        <p className="text-base md:text-lg lg:text-xl">{subtitle}</p>
        <a href='https://www.swaroopwardhinee.org/'><button className='rounded-md bg-blue-500 text-white px-4 py-2 mt-4 md:mt-6 lg:mt-8' onClick={exploreNow}>{buttonText}</button></a>
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
      <div className="slider-content flex flex-wrap" style={{ transform: `translateX(${-currentBanner * 100}%)` }}>
        {banners.map((_, index) => (
          <div key={index} className="banner-container flex-shrink-0 w-full md:w-full lg:w-full">
            {renderCurrentBanner()}
          </div>
        ))}
      </div>
      <button className="prev-button absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 lg:left-6 text-2xl md:text-3xl lg:text-4xl" onClick={prevBanner}>&#8249;</button>
      <button className="next-button absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 lg:right-6 text-2xl md:text-3xl lg:text-4xl" onClick={nextBanner}>&#8250;</button>
      <div className='flex justify-between items-center'>
        <img src="https://pngimg.com/d/sword_PNG5525.png" alt="sword" width={150} className='relative -top-4'></img>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary '>शिवकालीन युद्धकला</h3>
        <img src="https://pngimg.com/d/sword_PNG5525.png" alt="sword" width={150} className='scale-x-[-1] relative -top-4'></img>
      </div>
    </div>
  );
};

export default Slider;
