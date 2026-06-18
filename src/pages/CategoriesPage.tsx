import {categoriesQueryOptions} from '@/queryOptions';
import {CategoryList} from '@components/CategoryList';
import {QueryBoundary} from '@components/QueryBoundary';
import {useQuery} from '@tanstack/react-query';

export const CategoriesPage: React.FC = () => {
    const query = useQuery(categoriesQueryOptions);

    return (
        <QueryBoundary
            query={query}
            errorFallback={(error) => (
                <div className="h-full grid place-items-center">
                    <span className="text-center">Something went wrong: {error.message}</span>
                </div>
            )}
        >
            {(data) =>
                data.length === 0 ? (
                    <div className="h-full grid place-items-center">
                        <span className="text-center">No categories available.</span>
                    </div>
                ) : (
                    <CategoryList catalog={data}/>
                )
            }
        </QueryBoundary>
    );
};
