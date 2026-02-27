import {useContext, useEffect, useState} from 'react';
import {getRandomMeal} from '@/api-utils';
import {Meal} from '@components/Meal';
import {LostConnection} from '@components/LostConnection';
import {AppContext} from '@context/AppContext';
import {MealItemTypes} from '@/appTypes';

type P = {
    target: string;
};

export const NotFound: React.FC<P> = ({target}) => {
    const [randomMeal, setRandomMeal] = useState<MealItemTypes | null>(null);
    const [disconnected, setDisconnected] = useState(false);

    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {
        let cancelled = false;

        setIsLoading(true);

        getRandomMeal()
            .then((response) => {
                const meal = response?.meals?.[0];
                if (!cancelled && meal) {
                    setRandomMeal(meal);
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setDisconnected(true);
                }
            })
            .finally(() => setIsLoading(false));

        return () => {
            cancelled = true;
        };
    }, []);

    if (disconnected) {
        return <LostConnection/>;
    }

    return (
        <div
            className='h-full grid place-items-center content-center my-6 px-2'
        >
            <div className='w-full sm:w-1/2 pl-2 grid justify-items-center text-center'>
                <h2 className=''>
                    <span className='font-bold block'>Nothing found</span> for &quot;
                    {target}&quot;
                </h2>
                <div>Try to cook this</div>
                <div className='w-12 h-1 bg-red-500 rounded-xs mt-2 mb-4'/>
            </div>
            <ul className="rounded-lg overflow-hidden w-4/6 sm:w-2/3 md:2/4 lg:w-md">
                {randomMeal ? <Meal {...randomMeal} /> : null}
            </ul>
        </div>
    );
};
