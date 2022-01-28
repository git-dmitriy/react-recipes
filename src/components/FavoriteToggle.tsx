import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkCheckFill,
} from 'react-icons/bs';

import { useState, useEffect, useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { MealItemTypes } from 'appTypes';

type P = {
  meal: MealItemTypes;
  isDark?: boolean;
};

export const FavoriteToggle: React.FC<P> = ({ meal, isDark = false }) => {
  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);
  const { state, addToFavorites, removeFromFavorites } = useContext(AppContext);

  useEffect(
    () =>
      setIsFavorite(
        !!state.favorites.find((item) => item.idMeal === meal.idMeal)
      ),
    [state.favorites]
  );

  const addToFavorite = () => {
    addToFavorites(meal);
  };

  const removeFromFavorite = () => {
    removeFromFavorites(meal);
  };

  return (
    <div className='mx-2 mt-2'>
      {isFavorite ? (
        <button
          className='text-2xl text-red-500 transition duration-200 uppercase'
          onClick={removeFromFavorite}
        >
          <BsFillBookmarkCheckFill className='fill-current' />
        </button>
      ) : (
        <button
          className={`text-2xl text-gray-900 ${
            isDark ? '' : 'dark:text-orange-200'
          } hover:text-red-500 transition duration-200 uppercase`}
          onClick={addToFavorite}
        >
          <BsFillBookmarkPlusFill className='fill-current' />
        </button>
      )}
    </div>
  );
};
