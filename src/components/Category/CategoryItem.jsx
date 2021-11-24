import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

export default function CategoryItem({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <li className='flex bg-yellow-200 rounded-lg p-4 m-2'>
      <Link to={`/category/${strCategory}`} className='flex'>
        <div className='sm:w-2/4 w-2/5 bg-yellow-50 rounded-lg flex items-center justify-center'>
          <LazyLoad height={108} offset={100} once>
            <img className='w-full' src={strCategoryThumb} alt={strCategory} />
          </LazyLoad>
        </div>
        <div className='sm:w-2/4 w-3/5 flex flex-col items-start ml-4'>
          <h4 className='text-xl font-semibold'>{strCategory}</h4>
          <p className='text-sm sm:text-md'>
            {strCategoryDescription.length > 50
              ? strCategoryDescription.slice(0, 100) + '...'
              : strCategoryDescription}
          </p>
        </div>
      </Link>
    </li>
  );
}
