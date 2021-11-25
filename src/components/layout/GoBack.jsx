import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const GoBack = () => {
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

  return (
    <div className='flex items-center sm:mx-6'>
      {!isHome ? (
        <button className='w-5 text-3xl' onClick={() => navigate(-1)}>
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

export default GoBack;
