import {useParams} from 'react-router-dom';
import {getFilteredCategory} from '@/api-utils';
import {categoriesQueryOptions} from '@/queryOptions';
import {MealsList} from '@components/MealsList';
import {AboutCategory} from '@components/AboutCategory';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

export const SingleCategoryPage: React.FC = () => {
    const {name} = useParams();

    const categoriesQuery = useQuery(categoriesQueryOptions);
    const category = categoriesQuery.data?.find((item) => item.strCategory === name);

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

    if (categoriesQuery.status === 'pending') {
        return <Loader/>;
    }

    if (categoriesQuery.status === 'error') {
        return (
            <div className="h-full grid place-items-center">
                <h2 className="text-2xl text-center">Something went wrong</h2>
            </div>
        );
    }

    if (!category) {
        return (
            <div className="h-full grid place-items-center">
                <h2 className="text-2xl text-center">Category not found</h2>
            </div>
        );
    }

    const meals = mealsQuery.data ?? [];

    return (
        <>
            <AboutCategory categoryInfo={category}/>
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
