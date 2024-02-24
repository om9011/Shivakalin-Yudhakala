import React from 'react';

const HistorySection = () => {
  return (
    <section id="history" className="py-16 bg-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">History of War Skills</h2>
        <p className="text-lg text-center mb-8">
          Explore the rich history of various war skills that have shaped civilizations throughout the ages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Insert historical war skill cards or content here */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Swordsmanship</h3>
            <p className="text-gray-700">
              Swordsmanship has been practiced for centuries, evolving from ancient combat techniques to formalized martial arts disciplines.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Archery</h3>
            <p className="text-gray-700">
              Archery, dating back to prehistoric times, has been utilized for hunting, warfare, and sport across various cultures worldwide.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Hand-to-Hand Combat</h3>
            <p className="text-gray-700">
              Hand-to-hand combat techniques have been employed by soldiers and warriors throughout history for close-quarters combat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
