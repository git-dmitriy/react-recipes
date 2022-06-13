export const Layout: React.FC = ({ children }) => {
  return (
    <div className='container px-3 sm:px-5 pt-32 pb-24 mx-auto flex flex-col'>
      <div className='w-full lg:w-6/6 2xl:w-5/6 mx-auto relative'>
        {children}
      </div>
    </div>
  );
};
