import {getMealByName} from '@/api-utils.ts';
import {useSearchQuery} from '@hooks/useSearchQuery';
import {MealsList} from '@components/MealsList';
import {NotFound} from '@components/NotFound';
import {useQuery} from "@tanstack/react-query";
import {Loader} from "@components/Loader";

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search');

    const {status, data} = useQuery({
        queryKey: ['search'],
        queryFn: async () => {
            const data = await getMealByName(searchQuery as string);

            if (data.meals.length === 0) {
                throw new Error('')
            }

            return data.meals;
        },
    })

    if (status === 'pending') {
        return <Loader/>;
    }

    if (status === 'error') {
        return (
            <NotFound target={searchQuery || ''}/>
        );
    }

    return (
        <>
            {<MealsList meals={data}/>}
        </>
    );
};
