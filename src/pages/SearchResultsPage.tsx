import {searchQueryOptions} from '@/queryOptions';
import {useSearchQuery} from '@hooks/useSearchQuery';
import {MealsList} from '@components/MealsList';
import {NotFound} from '@components/NotFound';
import {QueryBoundary} from '@components/QueryBoundary';
import {useQuery} from '@tanstack/react-query';

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search') ?? '';
    const hasSearchQuery = searchQuery.trim().length > 0;

    const searchResultsQuery = useQuery({
        ...searchQueryOptions(searchQuery),
        enabled: hasSearchQuery,
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

    return (
        <QueryBoundary
            query={searchResultsQuery}
            errorFallback={<NotFound target={searchQuery}/>}
            emptyFallback={
                <div className="h-full grid place-items-center">
                    <h2 className="text-center">No results to display.</h2>
                </div>
            }
        >
            {(data) => <MealsList meals={data}/>}
        </QueryBoundary>
    );
};
