import { useState, useEffect } from 'react';

// Define breakpoints for small, medium, and large screens
const breakpoints = {
    small: '(max-width: 640px)',   // Small screens
    medium: '(min-width: 641px) and (max-width: 1024px)', // Medium screens
    large: '(min-width: 1025px)'  // Large screens
};

const useMediaQuery = () => {
    const [screenSize, setScreenSize] = useState('large'); // Default to 'large'

    useEffect(() => {
        // Create media query lists
        const smallQuery = window.matchMedia(breakpoints.small);
        const mediumQuery = window.matchMedia(breakpoints.medium);
        const largeQuery = window.matchMedia(breakpoints.large);

        // Define handler function to update screen size
        const handleChange = () => {
            if (smallQuery.matches) {
                setScreenSize('small');
            } else if (mediumQuery.matches) {
                setScreenSize('medium');
            } else if (largeQuery.matches) {
                setScreenSize('large');
            }
        };

        // Attach event listeners
        smallQuery.addListener(handleChange);
        mediumQuery.addListener(handleChange);
        largeQuery.addListener(handleChange);

        // Initial check
        handleChange();

        // Cleanup event listeners on unmount
        return () => {
            smallQuery.removeListener(handleChange);
            mediumQuery.removeListener(handleChange);
            largeQuery.removeListener(handleChange);
        };
    }, []);

    return screenSize;
};

export default useMediaQuery;