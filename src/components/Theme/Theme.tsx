import {useEffect, useContext, useRef} from 'react';
import {AppContext} from '@context/AppContext';

export const Theme = () => {
    const {state} = useContext(AppContext);
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            document.body.classList.add(
                'bg-yellow-200',
                'selection:bg-yellow-400',
                'selection:text-gray-800',
                'dark:bg-gray-800',
                'dark:selection:bg-red-400',
                'dark:selection:text-gray-900'
            );
            firstRender.current = false;
        }
        if (state.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [state]);

    return null;
};
