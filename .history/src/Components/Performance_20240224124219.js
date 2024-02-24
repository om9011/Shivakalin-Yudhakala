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
        image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        <div className="performance-slider-container py-10 bg-background flex flex-col items-center justify-start pb-20">
            <h2 className='text-5xl text-primary font-semibold'>सादरीकरणे</h2>
            <div className="performance-slider " style={{ transform: `translateX(-${currentPerformance * 26}%)` }}>
                {performances.map((performance, index) => (
                    <div key={performance.id} className="bg-white performance-card border flex flex-col items-center justify-start m-2 p-0">
                        <img src={performance.image} alt={`Performance ${performance.id}`} width={500} className="aspect-video" />
                        <div className="performance-details ">
                            <div className="font-bold text-2xl my-2">Performance {performance.id}</div>
                            <p className="text-gray-700">
                                <span>Date:</span> {performance.date}<br />
                                <span>Location:</span> {performance.location}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="navigation-buttons ">
                    <button onClick={handlePreviousPerformance}><i class='bx bxs-left-arrow'></i></button>
                    <button onClick={handleNextPerformance}><i class='bx bxs-right-arrow'></i></button>
                </div>
            </div>

        </div>
    );
};

export default PerformanceSection;
