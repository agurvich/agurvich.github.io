// Carousel.jsx
import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div
            className={`
                relative
                flex-1 overflow-hidden
                h-full w-full
                inset-0
                flex
                `}
        >
            {images.map((image, index) => {
                const transform = `translateX(${(index - currentIndex) * 100}%)`;
                return <div
                    key={index}
                    className={`
                        absolute
                        w-full
                        max-h-full
                        left-0
                        top-0
                        flex flex-col
                        transition-transform
                        duration-500
                    `}
                    style={{ transform }}
                >
                    <div
                        className="relative w-full 
                        max-h-full
                        overflow-hidden
 justify-center flex flex-1 flex-col"
                    >
                        <img src={`${image.src}`}/>
                        <div className="absolute bottom-0 bg-black bg-opacity-50 text-white py-2 w-full">
                            {image.caption}
                        </div>
                    </div>
                </div>
            })}
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full" onClick={handlePrev}>&#10094;</button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default Carousel;