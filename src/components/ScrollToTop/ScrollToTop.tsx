import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line no-undef
const scrollOptions: ScrollToOptions = {
    top: 0,
    left: 0,
    behavior: 'smooth',
};

export const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        const scrollContainer = document.querySelector('.content');
        if (scrollContainer) {
            scrollContainer.scrollTo(scrollOptions);
        } else {
            window.scrollTo(scrollOptions);
        }
    }, [pathname]);

    return null;
};