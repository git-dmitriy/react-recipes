import React from 'react';
import {useAppStore} from '@/store/useAppStore';
import {MealsList} from '@components/MealsList';

export const FavoritesPage: React.FC = () => {
    const favorites = useAppStore((store) => store.favorites);

    if (favorites.length === 0) {
        return (
            <div className='h-full grid place-items-center'>
                <h2 className='mx-auto font-bold'>
                    You haven&apos;t added any recipes yet.
                </h2>
            </div>
        );
    }

    return (
        <MealsList meals={favorites}/>
    );
};
