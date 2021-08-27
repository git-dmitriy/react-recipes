const AboutCategory = ({ categoryInfo }) => {
  console.log(
    '🚀 ~ file: AboutCategory.jsx ~ line 4 ~ categoryInfo',
    categoryInfo
  );
  const { strCategoryThumb, strCategory, strCategoryDescription } =
    categoryInfo;

  return (
    <div className='hidden sm:block mx-auto xl:max-w-6xl max-w-4xl'>
      <div className='flex bg-yellow-100 rounded-lg p-8 m-2'>
        <div className='sm:w-2/4 w-2/5 bg-yellow-50 rounded-lg flex items-center justify-center'>
          <img className='w-full' src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className='sm:w-2/4 w-3/5 flex flex-col items-start ml-8 pl-8 border-l-2 border-yellow-300'>
          <h4 className='text-xl font-semibold'>{strCategory}</h4>
          <p className='text-md'>{strCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCategory;
