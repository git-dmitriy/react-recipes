import {useParams} from 'react-router-dom';
import {categoriesQueryOptions, mealsByCategoryQueryOptions} from '@/queryOptions';
import {MealsList} from '@components/MealsList';
import {AboutCategory} from '@components/AboutCategory';
import {QueryBoundary} from '@components/QueryBoundary';
import {Loader} from '@components/Loader';
import {useQuery} from '@tanstack/react-query';
import type {CategoryItemTypes} from '@/appTypes';

export const SingleCategoryPage: React.FC = () => {
    const {name} = useParams();

    const categoriesQuery = useQuery(categoriesQueryOptions);

    return (
        <QueryBoundary
            query={categoriesQuery}
            errorFallback={
                <div className="h-full grid place-items-center">
                    <h2 className="text-2xl text-center">Something went wrong</h2>
                </div>
            }
        >
            {(categories) => {
                const category = categories.find((item) => item.strCategory === name);

                if (!category) {
                    return (
                        <div className="h-full grid place-items-center">
                            <h2 className="text-2xl text-center">Category not found</h2>
                        </div>
                    );
                }

                return (
                    <CategoryMeals category={category} name={name as string}/>
                );
            }}
        </QueryBoundary>
    );
};

type CategoryMealsProps = {
    category: CategoryItemTypes;
    name: string;
};

function CategoryMeals({category, name}: CategoryMealsProps) {
    const mealsQuery = useQuery(mealsByCategoryQueryOptions(name));

    return (
        <>
            <AboutCategory categoryInfo={category}/>
            <QueryBoundary query={mealsQuery} loading={<Loader/>}>
                {(meals) =>
                    meals.length > 0 ? (
                        <MealsList meals={meals}/>
                    ) : (
                        <div className="h-full grid place-items-center">
                            <h2 className="text-2xl text-center">No meals in this category.</h2>
                        </div>
                    )
                }
            </QueryBoundary>
        </>
    );
}
