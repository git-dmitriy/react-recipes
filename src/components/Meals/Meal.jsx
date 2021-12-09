import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from 'context/favoritesContext';
import { AddToFavorite } from 'components/AddToFavorites';
import LazyLoad from 'react-lazyload';

export const Meal = (props) => {
  const { idMeal, strMeal, strMealThumb } = props;
  const { addToFavorites, removeFromFavorites, state } =
    useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    setIsFavorite(!!state.favorites.find((item) => item.idMeal === idMeal));
  }, [state, idMeal]);

  return (
    <li className='relative w-full z-0 bg-white rounded-3xl overflow-hidden border border-gray-200'>
      <Link
        to={`/meal/${idMeal}`}
        className='block rounded-lg overflow-hidden min-h-300'
      >
        <LazyLoad height={300} offset={100} once>
          <img className='w-full' src={strMealThumb} alt={strMeal} />
        </LazyLoad>
        <div className='text-center my-2 mx-3 min-h-full'>
          <h4 className='text-2xl font-semibold'>
            {strMeal.length > 42 ? strMeal.slice(0, 43) + '...' : strMeal}
          </h4>
        </div>
      </Link>

      <div className='absolute top-4 right-4 p-1 bg-white bg-opacity-50 backdrop-opacity-50 backdrop-filter backdrop-blur-2xl rounded-2xl'>
        <AddToFavorite
          isFavorite={isFavorite}
          addToFavorites={() => addToFavorites(props)}
          removeFromFavorites={() => removeFromFavorites(props)}
        />
      </div>
    </li>
  );
};
