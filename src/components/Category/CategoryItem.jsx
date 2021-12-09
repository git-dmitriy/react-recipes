import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

export const CategoryItem = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  return (
    <li className='rounded-3xl border border-gray-200 overflow-hidden bg-white sm:mx-0 min-h-170p'>
      <Link to={`/category/${strCategory}`} className='h-full flex'>
        <div className='w-2/5 sm:w-2/4 bg-white relative'>
          <LazyLoad
            height={108}
            offset={100}
            once
            className='h-full bg-gray-200'
          >
            <img
              className='h-full object-cover'
              width='320'
              height='200'
              src={strCategoryThumb}
              alt={strCategory}
            />
          </LazyLoad>
        </div>
        <div className='w-3/5 sm:w-2/4 flex flex-col items-start mx-4 my-4'>
          <h4 className='text-xl font-semibold mb-5 sm:mb-0'>{strCategory}</h4>
          <p className='text-sm sm:text-md'>
            {strCategoryDescription.length > 50
              ? strCategoryDescription.slice(0, 120) + '...'
              : strCategoryDescription}
          </p>
        </div>
      </Link>
    </li>
  );
};
