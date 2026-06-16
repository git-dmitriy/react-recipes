import {useParams} from 'react-router-dom';
import {countryMealsQueryOptions} from '@/queryOptions';
import {MealsList} from '@components/MealsList';
import {QueryBoundary} from '@components/QueryBoundary';
import {useQuery} from '@tanstack/react-query';

export const SearchByCountryPage: React.FC = () => {
    const {region} = useParams();
    const hasRegion = Boolean(region?.trim());

    const countryQuery = useQuery({
        ...countryMealsQueryOptions(region as string),
        enabled: hasRegion,
    });

    if (!hasRegion) {
        return (
            <div className="h-full grid place-items-center">
                <h2 className="text-2xl text-center">Country is not specified.</h2>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-4xl mx-auto text-center text-2xl mb-5">
                {region} cuisine:
            </div>
            <QueryBoundary
                query={countryQuery}
                errorFallback={
                    <div className="h-100 grid place-items-center">
                        <h2 className="text-2xl text-center">
                            Failed to load recipes for {region} cuisine
                        </h2>
                    </div>
                }
            >
                {(meals) =>
                    meals.length > 0 ? (
                        <MealsList meals={meals}/>
                    ) : (
                        <div className="h-full grid place-items-center">
                            <h2 className="text-2xl text-center">
                                There are no recipes for {region} cuisine
                            </h2>
                        </div>
                    )
                }
            </QueryBoundary>
        </>
    );
};
