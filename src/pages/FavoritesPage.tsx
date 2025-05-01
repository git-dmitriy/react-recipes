import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { MealsList } from '@components/MealsList';

export const FavoritesPage: React.FC = () => {
    const { state } = useContext(AppContext);

    if (state.favorites.length === 0) {
        return (
            <div className='h-full grid place-items-center'>
                <h2 className='mx-auto font-bold'>
                    You haven&apos;t added any recipes yet.
                </h2>
            </div>
        );
    }

    return (
        <MealsList meals={state.favorites}/>
    );
};
