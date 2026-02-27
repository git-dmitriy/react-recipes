import {useParams} from 'react-router';
import {getFilteredCategoryByCountry} from '@/api-utils';
import {MealsList} from '@components/MealsList';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

export const SearchByCountryPage: React.FC = () => {
    const {region} = useParams();
    const hasRegion = Boolean(region?.trim());

    const {status, data} = useQuery({
        queryKey: ['country', region],
        enabled: hasRegion,
        queryFn: async () => {
            const response = await getFilteredCategoryByCountry(region as string);
            if (!response?.meals || !Array.isArray(response.meals)) {
                return [];
            }
            return response.meals;
        },
    });

    if (!hasRegion) {
        return (
            <div className="h-full grid place-items-center">
                <h2 className="text-2xl text-center">Country is not specified.</h2>
            </div>
        );
    }

    if (status === 'pending') {
        return <Loader/>;
    }

    if (status === 'error') {
        return (
            <div className="h-100 grid place-items-center">
                <h2 className="text-2xl text-center">
                    Failed to load recipes for {region} cuisine
                </h2>
            </div>
        );
    }

    const meals = data ?? [];

    return (
        <>
            <div className="max-w-4xl mx-auto text-center text-2xl mb-5">
                {region} cuisine:
            </div>
            {meals.length > 0 ? (
                <MealsList meals={meals}/>
            ) : (
                <div className="h-full grid place-items-center">
                    <h2 className="text-2xl text-center">
                        There are no recipes for {region} cuisine
                    </h2>
                </div>
            )}
        </>
    );
};
