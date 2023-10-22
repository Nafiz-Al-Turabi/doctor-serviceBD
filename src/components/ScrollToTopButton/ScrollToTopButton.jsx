import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";
import './ScrollToTopButton.css'


function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="scroll-to-top-button z-40">
                <FaAngleDoubleUp className='text-xl ' />
            </button>
        )
    );
}

export default ScrollToTopButton;