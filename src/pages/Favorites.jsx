import { useContext } from 'react';
import { FavoriteContext } from '../context/favoritesContext';
import { MealsList } from '../components/Meals/MealsList';

export const Favorites = () => {
  const { state } = useContext(FavoriteContext);

  if (state.favorites.length === 0) {
    return (
      <div className='flex justify-center'>
        <h2 className='mx-auto font-bold'>
          You haven't added any recipes yet.
        </h2>
      </div>
    );
  }
  return (
    <>
      <MealsList meals={state.favorites} />
    </>
  );
};
