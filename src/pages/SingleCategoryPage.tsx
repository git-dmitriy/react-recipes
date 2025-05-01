import {useParams} from 'react-router-dom';
import {getFilteredCategory, getAllCategories} from '@/api-utils.ts';
import {MealsList} from '@components/MealsList';
import {AboutCategory} from '@components/AboutCategory';
import {CategoryItemTypes} from '@/appTypes';
import {useQuery} from "@tanstack/react-query";
import {Loader} from "@components/Loader";

export const SingleCategoryPage: React.FC = () => {
    const {name} = useParams();

    const categoryQuery = useQuery({
        queryKey: ['singleCategory', name], queryFn: async () => {
            const data = await getAllCategories();
            const category = data.categories.filter(
                (item: CategoryItemTypes) => item.strCategory === name
            );

            return category[0];
        }
    })

    const mealsQuery = useQuery({
        queryKey: ['meals', name], queryFn: async () => {
            const data = await getFilteredCategory(name as string);
            return data.meals;
        }
    })

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

    return (
        <>
            {!!categoryQuery.data && <AboutCategory categoryInfo={categoryQuery.data}/>}
            {mealsQuery.status === 'success' ? <MealsList meals={mealsQuery.data}/> : null}
        </>
    );
};
