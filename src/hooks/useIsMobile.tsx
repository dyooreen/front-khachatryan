import { useState, useEffect } from 'react';

export default function useIsMobile() {

    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const width = window.innerWidth
        return {
            width,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimensions?.width <= 768 ? true : false

}
