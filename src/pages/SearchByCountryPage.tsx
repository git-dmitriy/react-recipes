import {useParams} from 'react-router';
import {useState, useEffect, useContext} from 'react';
import {getFilteredCategoryByCountry} from '@/api-utils.ts';
import {MealsList} from '@components/MealsList';
import {AppContext} from '@context/AppContext';

export const SearchByCountryPage: React.FC = () => {
    const {region} = useParams();
    const [meals, setMeals] = useState();
    const [isCountryExist, setIsCountryExist] = useState(true);
    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);

        if (region) {
            getFilteredCategoryByCountry(region)
                .then((data) => {
                    if (!data.meals) {
                        setIsCountryExist(false);
                        return;
                    }
                    setMeals(data.meals);
                })
                .catch((e) => {
                    console.warn(e);
                })
                .finally(() => setIsLoading(false));
        }

        return () => {
        };
    }, [region]);

    if (!isCountryExist) {
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
            {meals && <MealsList meals={meals}/>}
        </>
    );
};
