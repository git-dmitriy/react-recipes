import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritesContext';
import LazyLoad from 'react-lazyload';
import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkCheckFill,
} from 'react-icons/bs';

export const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;
  const { addToFavorites, removeFromFavorites, state } =
    useContext(FavoriteContext);

  return (
    <li className='relative w-5/6 z-0 bg-white rounded-3xl overflow-hidden border border-gray-200'>
      <Link
        to={`/meal/${idMeal}`}
        className='block rounded-lg overflow-hidden min-h-300'
      >
        <LazyLoad height={300} offset={100} once>
          <img className='w-full' src={strMealThumb} alt={strMeal} />
        </LazyLoad>
        <div className='text-center my-2 mx-3 grid place-content-center min-h-full'>
          <h4 className='text-2xl font-semibold'>
            {strMeal.length > 42 ? strMeal.slice(0, 43) + '...' : strMeal}
          </h4>
        </div>
      </Link>

      <div className='absolute top-4 right-4 p-3 bg-white bg-opacity-50 backdrop-opacity-50 backdrop-filter backdrop-blur-2xl rounded-2xl'>
        {!state.favorites.find((item) => item.idMeal === idMeal) ? (
          <button
            className='leading-none rounded font-medium bg-transparent text-2xl hover:text-red-500 transition duration-200  uppercase'
            onClick={() => {
              addToFavorites(props);
            }}
          >
            <BsFillBookmarkPlusFill className='fill-current' />
          </button>
        ) : (
          <button
            className='leading-none rounded font-medium bg-transparent text-2xl text-red-500 transition duration-200  uppercase'
            onClick={() => {
              removeFromFavorites(props);
            }}
          >
            <BsFillBookmarkCheckFill className='fill-current' />
          </button>
        )}
      </div>
    </li>
  );
};
