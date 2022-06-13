import { IoCloudOfflineSharp } from 'react-icons/io5';

export const LostConnection = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-2xl'>
        <div>
          <IoCloudOfflineSharp className='text-6xl' />{' '}
        </div>
        <p>
          <strong>The Internet connection is lost</strong>
        </p>
      </div>
    </>
  );
};
