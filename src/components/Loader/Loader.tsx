import { AppContext } from 'context/AppContext';
import { useContext } from 'react';

export const Loader = () => {
  const circle = 'h-5 w-5 bg-yellow-400 rounded-full';

  const { state } = useContext(AppContext);
  const { isLoading } = state;

  return (
    <div
      role='alert'
      aria-busy={isLoading ? true : false}
      className={`fixed inset-0 flex justify-center items-center my-20 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='flex'>
        <div className={`${circle} mr-1 animate-bounce`}></div>
        <div className={`${circle} mr-1 animate-bounce200`}></div>
        <div className={`${circle} animate-bounce400`}></div>
      </div>
    </div>
  );
};
