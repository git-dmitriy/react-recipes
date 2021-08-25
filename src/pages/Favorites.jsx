import { useEffect, useContext } from 'react';
import { MealsList } from '../components/Meals/MealsList';
import { FavoriteContext } from '../context/favoritesContext';
import { Preloader } from '../components/Preloader/Preloader';

const Favorites = () => {
  const { state } = useContext(FavoriteContext);

  return (
    <>
      {!state.favorites.length ? (
        <Preloader />
      ) : (
        <MealsList meals={state.favorites} />
      )}
    </>
  );
};

export default Favorites;
