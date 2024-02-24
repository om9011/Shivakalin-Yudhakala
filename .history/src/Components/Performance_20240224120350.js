import React, { useState } from 'react';

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
      <div className="max-w-full rounded overflow-hidden shadow-lg">
        <img className="w-full" src={performances[currentPerformance].image} alt={`Performance ${currentPerformance + 1}`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Performance {performances[currentPerformance].id}</div>
          <p className="text-gray-700 text-base">
            Date: {performances[currentPerformance].date}<br />
            Location: {performances[currentPerformance].location}
          </p>
        </div>
        
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
          <button onClick={handlePreviousPerformance} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Previous
          </button>
          <button onClick={handleNextPerformance} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
    </div>
  );
};

export default PerformanceSection;
