import {getMealByName} from '@/api-utils';
import {useSearchQuery} from '@hooks/useSearchQuery';
import {MealsList} from '@components/MealsList';
import {NotFound} from '@components/NotFound';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search') ?? '';
    const hasSearchQuery = searchQuery.trim().length > 0;

    const {status, data} = useQuery({
        queryKey: ['search', searchQuery],
        enabled: hasSearchQuery,
        queryFn: async () => {
            const response = await getMealByName(searchQuery);
            if (!response?.meals || !Array.isArray(response.meals) || response.meals.length === 0) {
                throw new Error('No meals found');
            }
            return response.meals;
        },
    });

    if (!hasSearchQuery) {
        return (
            <div className="h-full grid place-items-center">
                <h2 className="mx-auto font-bold text-center">
                    Enter the name of a recipe or ingredient in the search box to find the dishes you need.
                </h2>
            </div>
        );
    }

    if (status === 'pending') {
        return <Loader/>;
    }

    if (status === 'error') {
        return (
            <NotFound target={searchQuery}/>
        );
    }

    if (!data) {
        return (
            <div className="h-full grid place-items-center">
                <h2 className="text-center">No results to display.</h2>
            </div>
        );
    }

    return <MealsList meals={data}/>;
};
