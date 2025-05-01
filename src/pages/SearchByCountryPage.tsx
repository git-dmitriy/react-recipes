import {useParams} from 'react-router';
import {getFilteredCategoryByCountry} from '@/api-utils.ts';
import {MealsList} from '@components/MealsList';
import {useQuery} from "@tanstack/react-query";
import {Loader} from "@components/Loader";

export const SearchByCountryPage: React.FC = () => {
    const {region} = useParams();

    const {status, data} = useQuery({
        queryKey: ['search'],
        queryFn: async () => {
            const data = await getFilteredCategoryByCountry(region as string);

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
            <div className='h-100 grid place-items-center'>
                <h2 className='text-2xl text-center'>
                    There are no recipes for {region} cuisine
                </h2>
            </div>
        );
    }

    return (
        <>
            <div className='max-w-4xl mx-auto text-center text-2xl mb-5'>
                {region} cuisine:
            </div>
            {<MealsList meals={data}/>}
        </>
    );
};
