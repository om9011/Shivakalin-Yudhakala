import React, { useState } from 'react';
import './Performance.css';

const performances = [
  {
    id: 1,
    date: '2024-02-24',
    location: 'New York',
    image: 'performance1.jpg',
  },
  {
    id: 2,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: 'performance2.jpg',
  },
  {
    id: 3,
    date: '2024-02-24',
    location: 'New York',
    image: 'performance1.jpg',
  },
  {
    id: 4,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: 'performance2.jpg',
  },
  {
    id: 5,
    date: '2024-02-24',
    location: 'New York',
    image: 'performance1.jpg',
  },
  {
    id: 6,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: 'performance2.jpg',
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
    <div className="performance-slider-container">
        <h2
      <div className="performance-slider" style={{ transform: `translateX(-${currentPerformance * 100}%)` }}>
        {performances.map((performance, index) => (
          <div key={performance.id} className="performance-card">
            <img src={performance.image} alt={`Performance ${performance.id}`} />
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
