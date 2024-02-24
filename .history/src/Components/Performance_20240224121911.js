import React, { useState } from 'react';
import './Performance.css';

const performances = [
  {
    id: 1,
    date: '2024-02-24',
    location: 'New York',
    image: 'https://i.ytimg.com/vi/n5tcTFTUDH8/maxresdefault.jpg',
  },
  {
    id: 2,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: 'https://i.ytimg.com/vi/n5tcTFTUDH8/maxresdefault.jpg',
  },
  {
    id: 3,
    date: '2024-02-24',
    location: 'New York',
    image: 'https://i.ytimg.com/vi/n5tcTFTUDH8/maxresdefault.jpg',
  },
  {
    id: 4,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: 'https://i.ytimg.com/vi/n5tcTFTUDH8/maxresdefault.jpg',
  },
  {
    id: 5,
    date: '2024-02-24',
    location: 'New York',
    image: 'https://i.ytimg.com/vi/n5tcTFTUDH8/maxresdefault.jpg',
  },
  {
    id: 6,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: 'https://i.ytimg.com/vi/n5tcTFTUDH8/maxresdefault.jpg',
  },
  // Add more performances as needed
];

const PerformanceSection = () => {
  const [currentPerformance, setCurrentPerformance] = useState(0);

  const handleNextPerformance = () => {
    setCurrentPerformance((prev) => (prev === performances.length - 1 ? 0 : prev + 1));
  };

  const handlePreviousPerformance = () => {
    setCurrentPerformance((prev) => (prev === 0 ? performances.length - 1 : prev - 1));
  };

  return (
    <div className="performance-slider-container py-10 bg-background">
        <h2 className='text-5xl text-primary font-semibold'>सादरीकरणे</h2>
      <div className="performance-slider" style={{ transform: `translateX(-${currentPerformance * 100}%)` }}>
        {performances.map((performance, index) => (
          <div key={performance.id} className="performance-card border flex flex-col items-center justify-center">
            <img src={performance.image} alt={`Performance ${performance.id}`} className="w-max aspect-video " />
            <div className="performance-details">
              <div className="font-bold text-xl mb-2">Performance {performance.id}</div>
              <p className="text-gray-700 text-base">
                <span>Date:</span> {performance.date}<br />
                <span>Location:</span> {performance.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousPerformance}>&#10094;</button>
        <button onClick={handleNextPerformance}>&#10095;</button>
      </div>
    </div>
  );
};

export default PerformanceSection;
