import { useContext } from 'react';
import { FavoriteContext } from 'context/favoritesContext';
import { MealsList } from 'components/meals/MealsList';
import { Layout } from 'components/layout/Layout';

export const Favorites = () => {
  const { state } = useContext(FavoriteContext);

  if (state.favorites.length === 0) {
    return (
      <Layout>
        <div className='flex justify-center'>
          <h2 className='mx-auto font-bold'>
            You haven't added any recipes yet.
          </h2>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <MealsList meals={state.favorites} />
    </Layout>
  );
};
