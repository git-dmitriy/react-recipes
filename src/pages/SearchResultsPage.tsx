import {getMealByName} from '@/api-utils.ts';
import {useSearchQuery} from '@hooks/useSearchQuery';
import {MealsList} from '@components/MealsList';
import {NotFound} from '@components/NotFound';
import {useQuery} from "@tanstack/react-query";
import {Loader} from "@components/Loader";

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search') ?? '';
    const hasSearchQuery = searchQuery.trim().length > 0;

    const {status, data} = useQuery({
        queryKey: ['search', searchQuery],
        enabled: hasSearchQuery,
        queryFn: async () => {
            const data = await getMealByName(searchQuery);

            if (!data.meals || data.meals.length === 0) {
                throw new Error('No meals found');
            }

            return data.meals;
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

    return (
        <>
            <MealsList meals={data}/>
        </>
    );
};
