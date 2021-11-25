import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritesContext';
import LazyLoad from 'react-lazyload';
import BookmarkIcon from '../icons/BoobmarkIcon';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';

export function Meal(props) {
  const { idMeal, strMeal, strMealThumb } = props;
  const { addToFavorites, removeFromFavorites, state } =
    useContext(FavoriteContext);

  return (
    <>
      <li className='flex flex-col justify-between bg-yellow-200 rounded-lg p-4 m-2'>
        <Link
          to={`/meal/${idMeal}`}
          className='bg-yellow-100 rounded-lg overflow-hidden flex block min-h-300'
        >
          <LazyLoad height={300} offset={100} once>
            <img className='w-full' src={strMealThumb} alt={strMeal} />
          </LazyLoad>
        </Link>
        <div className='flex flex-col items-start mt-4'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-semibold w-11/12'>{strMeal}</h4>
            {!state.favorites.find((item) => item.idMeal === idMeal) ? (
              <button
                className='w-1/12 leading-none rounded font-medium bg-transparent text-2xl hover:text-yellow-400 transition duration-200 text-xs uppercase'
                onClick={() => {
                  addToFavorites(props);
                }}
              >
                <BsBookmark className='fill-current' />
              </button>
            ) : (
              <button
                className='w-1/12 leading-none rounded font-medium bg-transparent text-2xl text-yellow-400 transition duration-200 text-xs uppercase'
                onClick={() => {
                  removeFromFavorites(props);
                }}
              >
                <BsFillBookmarkFill className='fill-current' />
              </button>
            )}
          </div>
          <Link
            to={`/meal/${idMeal}`}
            className='w-full text-center py-5 leading-none rounded font-medium mt-3 bg-yellow-400 hover:bg-yellow-300 transition duration-200 text-md uppercase'
          >
            Watch the recipe
          </Link>
        </div>
      </li>
    </>
  );
}
