import Lazyload from 'react-lazyload';
import { CategoryItemTypes } from 'appTypes';

type P = {
  categoryInfo: CategoryItemTypes;
};

export const AboutCategory: React.FC<P> = ({ categoryInfo }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    categoryInfo;

  return (
    <div className=' mx-auto xl:max-w-6xl max-w-4xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-8 m-2 mb-4'>
        <div className=' flex items-start justify-center'>
          <Lazyload
            once
            offset={100}
            classNamePrefix='w-80 bg-gray-200 rounded-3xl overflow-hidden '
          >
            <img
              className='w-full object-cover'
              src={strCategoryThumb}
              alt={strCategory}
            />
          </Lazyload>
        </div>
        <div className=' flex flex-col justify-around items-start border-gray-400'>
          <h4 className='text-xl font-semibold'>{strCategory}</h4>
          <p className='text-md'>{strCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
};
