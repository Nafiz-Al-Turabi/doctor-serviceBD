import React, { useState, useEffect } from 'react';
import './Banner.css';

const bannerData = [
    {
        title: 'Hassle-Free Lab Tests With Home Sample Collection Service',
        description: 'We know it can be difficult to do lab tests, especially during busy schedules, harsh weather and heavy traffic, which is why we offer lab tests at home',
        buttonLabel: 'Get Started',
        backgroundImage: 'url(https://i.ibb.co/d4w2q7b/big-house-2138499-1280.jpg)',
    },
    {
        title: 'Healthcare, Anytime Anywhere',
        description: 'Join Praava, a healthcare system that puts you first',
        buttonLabel: 'Get Started',
        backgroundImage: 'url(https://i.ibb.co/Lh9Znyf/taj-mahal-866692-1280.jpg)',
    },
    {
        title: 'Affordable Health Checks & Packages Designed Just For You',
        description: 'JPraava has designed health checks and packages according to the needs of their patients, according to age and gender, minimizing high costs',
        buttonLabel: 'Get Started',
        backgroundImage: 'url(https://i.ibb.co/Lh9Znyf/taj-mahal-866692-1280.jpg)',
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hovered) {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerData.length);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [hovered]);

    return (
        <div className="banner-container md:mt-20 lg:mt-20" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {bannerData.map((slide, index) => (
                <div
                    key={index}
                    className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{
                        backgroundImage: slide.backgroundImage,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl my-4">
                                {slide.description}
                            </p>
                            <button className="primary-bg hover:bg-[#e74e84] duration-300 text-white font-bold py-2 px-4 rounded">
                                {slide.buttonLabel}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
