import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import {motion} from "motion/react"

export const GoBack: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }, [location]);

    const onClickHandler = () => {
        if (window.history.length === 1) {
            navigate('/');
        } else {
            navigate(-1);
        }
    };

    return (
        <div
            className='w-5 flex items-center sm:mx-6'
        >
            {!isHome ?
                <motion.button
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: .3}}
                    className='cursor-pointer w-5 text-3xl hover:opacity-70 transition-opacity'
                    onClick={onClickHandler}
                >
                    <FaArrowLeft className='fill-current'/>
                </motion.button>
                : null}
        </div>
    );
};
