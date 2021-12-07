export const Layout = ({ children }) => {
  return (
    <main className='text-gray-600'>
      <div className='container px-5 pt-2 pb-24 mx-auto flex flex-col'>
        <div className='w-full lg:w-6/6 2xl:w-4/6 mx-auto '>{children}</div>
      </div>
    </main>
  );
};
