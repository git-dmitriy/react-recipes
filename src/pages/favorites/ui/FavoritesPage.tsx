import React, { useContext } from 'react';
import { AppContext } from '@app/context/AppContext.ts';
import { MealsList } from '@shared/ui/MealsList';
import { Layout } from '@shared/ui/Layout';

export const FavoritesPage: React.FC = () => {
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
