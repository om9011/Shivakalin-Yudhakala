import React, { useState } from 'react';
import performance1 from './images/performance1.jpg';
import performance2 from './images/performance2.jpg';

const performances = [
  {
    id: 1,
    date: '2024-02-24',
    location: 'New York',
    image: performance1,
  },
  {
    id: 2,
    date: '2024-02-25',
    location: 'Los Angeles',
    image: performance2,
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
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md">
        <img src={performances[currentPerformance].image} alt={`Performance ${currentPerformance + 1}`} />
        <div className="flex justify-between mt-4">
          <button onClick={handlePreviousPerformance} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Previous
          </button>
          <button onClick={handleNextPerformance} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
        <div className="mt-4">
          <p>Date: {performances[currentPerformance].date}</p>
          <p>Location: {performances[currentPerformance].location}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
