import {useParams} from 'react-router-dom';
import {getFilteredCategory, getAllCategories} from '@/api-utils';
import {MealsList} from '@components/MealsList';
import {AboutCategory} from '@components/AboutCategory';
import {CategoryItemTypes} from '@/appTypes';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

export const SingleCategoryPage: React.FC = () => {
    const {name} = useParams();

    const categoryQuery = useQuery({
        queryKey: ['singleCategory', name],
        queryFn: async () => {
            const response = await getAllCategories();
            if (!response?.categories || !Array.isArray(response.categories)) {
                throw new Error('Invalid categories response');
            }
            const category = response.categories.find(
                (item: CategoryItemTypes) => item.strCategory === name
            );
            if (!category) {
                throw new Error('Category not found');
            }
            return category;
        },
    });

    const mealsQuery = useQuery({
        queryKey: ['meals', name],
        queryFn: async () => {
            const response = await getFilteredCategory(name as string);
            if (!response?.meals || !Array.isArray(response.meals)) {
                return [];
            }
            return response.meals;
        },
    });

    if (categoryQuery.status === 'pending') {
        return <Loader/>
    }

    if (categoryQuery.status === 'error') {
        return (
            <div className="h-full grid place-items-center">
                <h2 className='text-2xl text-center'>Something went wrong</h2>
            </div>
        )
    }

    const meals = mealsQuery.data ?? [];

    return (
        <>
            {categoryQuery.data && <AboutCategory categoryInfo={categoryQuery.data}/>}
            {mealsQuery.status === 'pending' && <Loader/>}
            {mealsQuery.status === 'success' && (
                meals.length > 0 ? (
                    <MealsList meals={meals}/>
                ) : (
                    <div className="h-full grid place-items-center">
                        <h2 className="text-2xl text-center">No meals in this category.</h2>
                    </div>
                )
            )}
        </>
    );
};
