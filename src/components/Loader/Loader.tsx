import {AppContext} from '@context/AppContext';
import {useContext} from 'react';
import {motion} from 'motion/react';

export const Loader = () => {
    const circle = 'h-5 w-5 bg-yellow-400 rounded-full';

    const {state} = useContext(AppContext);
    const {isLoading} = state;

    return (
        <motion.div
            animate={{opacity: isLoading ? 1 : 0}}
            transition={{duration: 0.3}}
            role='alert'
            aria-busy={isLoading}
            className={`fixed inset-0 flex justify-center items-center my-20 ${isLoading ? 'z-10' : '-z-10'}`}
        >
            <div className='flex'>
                <div className={`${circle} mr-1 animate-bounce`}></div>
                <div className={`${circle} mr-1 animate-bounce200`}></div>
                <div className={`${circle} animate-bounce400`}></div>
            </div>
        </motion.div>
    );
};
