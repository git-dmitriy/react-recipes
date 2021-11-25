export const Preloader = () => {
  let circle = 'h-5 w-5 bg-yellow-400 rounded-full';

  return (
    <div className='fixed inset-0 h-screen flex justify-center items-center my-8'>
      <div className='flex'>
        <div className={`${circle} mr-1 animate-bounce`}></div>
        <div className={`${circle} mr-1 animate-bounce200`}></div>
        <div className={`${circle} animate-bounce400`}></div>
      </div>
    </div>
  );
};
