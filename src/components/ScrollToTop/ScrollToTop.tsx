import {useEffect} from 'react';
import {useLocation} from 'react-router';

export const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// ! useful idea
// get current scroll position and store it, then scroll to 0,0, on go back return previous position

// useEffect(() => () => { // <-- Now we return the useEffect teardown effect, which will be fired only after the path/search change for the first time
//     try {
//         // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
//         window.scroll({
//             top: 0,
//             left: 0,
//             behavior: 'smooth',
//         });
//     } catch (error) {
//         // just a fallback for older browsers
//         window.scrollTo(0, 0);
//     }
// }, [pathname, search]);