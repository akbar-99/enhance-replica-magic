import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Use requestAnimationFrame to ensure scroll happens after the route transition starts
        const timeoutId = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
