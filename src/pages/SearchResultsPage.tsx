import {getMealByName, getMealsByIngredient} from '@/api-utils';
import {useSearchQuery} from '@hooks/useSearchQuery';
import {MealsList} from '@components/MealsList';
import {NotFound} from '@components/NotFound';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';
import type {MealItemTypes} from '@/appTypes';

function mergeMealsByName(mealsByName: MealItemTypes[], mealsByIngredient: MealItemTypes[]): MealItemTypes[] {
    const byId = new Map<string, MealItemTypes>();
    for (const m of mealsByName) byId.set(m.idMeal, m);
    for (const m of mealsByIngredient) if (!byId.has(m.idMeal)) byId.set(m.idMeal, m);
    return Array.from(byId.values());
}

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search') ?? '';
    const hasSearchQuery = searchQuery.trim().length > 0;

    const {status, data} = useQuery({
        queryKey: ['search', searchQuery],
        enabled: hasSearchQuery,
        queryFn: async () => {
            const [byNameRes, byIngredientRes] = await Promise.all([
                getMealByName(searchQuery),
                getMealsByIngredient(searchQuery),
            ]);
            const mealsByName = Array.isArray(byNameRes?.meals) ? byNameRes.meals : [];
            const mealsByIngredient = Array.isArray(byIngredientRes?.meals) ? byIngredientRes.meals : [];
            const merged = mergeMealsByName(mealsByName, mealsByIngredient);
            if (merged.length === 0) {
                throw new Error('No meals found');
            }
            return merged;
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
