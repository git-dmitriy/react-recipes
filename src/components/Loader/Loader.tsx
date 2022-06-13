import { AppContext } from 'context/AppContext';
import { useContext } from 'react';

export const Loader: React.FC = () => {
  let circle = 'h-5 w-5 bg-yellow-400 rounded-full';

  const { state } = useContext(AppContext);
  const { isLoading } = state;

  return (
    <div
      className='fixed inset-0 h-screen flex justify-center items-center my-8'
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      <div className='flex'>
        <div className={`${circle} mr-1 animate-bounce`}></div>
        <div className={`${circle} mr-1 animate-bounce200`}></div>
        <div className={`${circle} animate-bounce400`}></div>
      </div>
    </div>
  );
};
