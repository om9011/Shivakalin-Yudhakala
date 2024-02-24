import React, { useState } from 'react';
import './Performance.css'; 

const performances = [
  {
    id: 1,
    image: 'image1.jpg',
    date: 'January 1, 2024',
    venue: 'XYZ Auditorium'
  },
  {
    id: 2,
    image: 'image2.jpg',
    date: 'February 15, 2024',
    venue: 'ABC Hall'
  },
  {
    id: 3,
    image: 'image1.jpg',
    date: 'January 1, 2024',
    venue: 'XYZ Auditorium'
  },
  {
    id: 4,
    image: 'image2.jpg',
    date: 'February 15, 2024',
    venue: 'ABC Hall'
  },{
    id: 5,
    image: 'image1.jpg',
    date: 'January 1, 2024',
    venue: 'XYZ Auditorium'
  },
  {
    id: 6,
    image: 'image2.jpg',
    date: 'February 15, 2024',
    venue: 'ABC Hall'
  },
  // Add more performance data as needed
];

const PerformanceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? performances.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === performances.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section className="performance-section py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Performance</h2>
        <div className="cards-container">
          {performances.map((performance, index) => (
            <div key={performance.id} className={`card ${index === currentSlide ? 'active' : ''}`}>
              <img src={performance.image} alt={`Performance ${performance.id}`} className="card-image" />
              <div className="card-details">
                <p className="card-date">Date: {performance.date}</p>
                <p className="card-venue">Venue: {performance.venue}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={goToPreviousSlide} className="prev-button">&#10094;</button>
          <button onClick={goToNextSlide} className="next-button">&#10095;</button>
        </div>
      </div>
    </section>
);
}

export default PerformanceSection;
