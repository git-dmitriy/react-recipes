import { Link } from 'react-router-dom';
import { FavoriteToggle } from 'components/FavoriteToggle';
import LazyLoad from 'react-lazyload';
import { MealItemTypes } from 'appTypes';

export const Meal: React.FC<MealItemTypes> = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;

  return (
    <li className='relative w-full z-0 bg-white dark:bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-900 dark:text-gray-900'>
      <Link
        to={`/meal/${idMeal}`}
        className='block rounded-lg overflow-hidden min-h-300 hover:opacity-90 transition-opacity'
      >
        <LazyLoad height={350} offset={600} once>
          <img className='w-full' src={strMealThumb} alt={strMeal} />
        </LazyLoad>
        <div className='text-center my-2 mx-3 min-h-full'>
          <h4 className='text-2xl font-semibold'>
            {strMeal.length > 42 ? strMeal.slice(0, 43) + '...' : strMeal}
          </h4>
        </div>
      </Link>

      <div className='absolute top-4 right-4 p-1 bg-white bg-opacity-50 backdrop-opacity-50 backdrop-filter backdrop-blur-2xl rounded-2xl'>
        <FavoriteToggle isDark={true} meal={props} />
      </div>
    </li>
  );
};
