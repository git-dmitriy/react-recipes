import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { MealsList } from 'components/meals/MealsList';
import { Layout } from 'components/layout/Layout';

export const Favorites: React.FC = () => {
  const { state } = useContext(AppContext);

  if (state.favorites.length === 0) {
    return (
      <Layout>
        <div className='flex justify-center'>
          <h2 className='mx-auto font-bold'>
            You haven&apos;t added any recipes yet.
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
