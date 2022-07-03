import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

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
    <div className='flex items-center sm:mx-6'>
      {!isHome ? (
        <button
          className='w-5 text-3xl hover:opacity-70 transition-opacity'
          onClick={onClickHandler}
        >
          <FaArrowLeft className='fill-current' />
        </button>
      ) : (
        <div className='w-5 text-transparent'>
          <FaArrowLeft className='fill-current text-transparent' />
        </div>
      )}
    </div>
  );
};
