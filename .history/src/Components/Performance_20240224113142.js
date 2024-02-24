import React from 'react';
import './Performance.css'; // Import CSS file for styling

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
  // Add more performance data as needed
];

const PerformanceSection = () => {
  return (
    <section className="performance-section py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Performance</h2>
        <div className="cards-container px-8">
          {performances.map(performance => (
            <div key={performance.id} className="card">
              <img src={performance.image} alt={`Performance ${performance.id}`} className="card-image" />
              <div className="card-details">
                <p className="card-date">Date: {performance.date}</p>
                <p className="card-venue">Venue: {performance.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceSection;
