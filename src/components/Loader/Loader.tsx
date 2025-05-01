import {motion} from 'motion/react';

export const Loader = () => {
    const circle = 'h-5 w-5 bg-yellow-400 rounded-full';

    return (
        <motion.div
            transition={{duration: 0.3}}
            role='alert'
            aria-busy='true'
            className={`fixed inset-0 flex justify-center items-center my-20`}
        >
            <div className='flex'>
                <div className={`${circle} mr-1 animate-bounce`}></div>
                <div className={`${circle} mr-1 animate-bounce200`}></div>
                <div className={`${circle} animate-bounce400`}></div>
            </div>
        </motion.div>
    );
};
