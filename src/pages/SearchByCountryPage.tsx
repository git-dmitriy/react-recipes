import {useParams} from 'react-router';
import {useState, useEffect, useContext} from 'react';
import {getFilteredCategoryByCountry} from '@/api-utils.ts';
import {MealsList} from '@components/MealsList';
import {Layout} from '@components/Layout';
import {LostConnection} from '@components/LostConnection';
import {AppContext} from '@context/AppContext';

export const SearchByCountryPage: React.FC = () => {
    const {region} = useParams();
    const [meals, setMeals] = useState();
    const [isCountryExist, setIsCountryExist] = useState(true);
    const [disconnected, setDisconnected] = useState(false);
    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {
        let cleanupFuse = true;

        setIsLoading(true);

        if (region) {
            getFilteredCategoryByCountry(region)
                .then((data) => {
                    if (!data.meals) {
                        setIsCountryExist(false);
                        return;
                    }
                    cleanupFuse && setMeals(data.meals);
                })
                .catch((e) => {
                    console.warn(e);
                    setDisconnected(true);
                })
                .finally(() => setIsLoading(false));
        }

        return () => {
            cleanupFuse = false;
        };
    }, [region]);

    if (!isCountryExist) {
        return (
            <Layout>
                <h2 className='text-2xl text-center'>
                    There are no recipes for {region} cuisine
                </h2>
            </Layout>
        );
    }

    if (disconnected) {
        return (
            <Layout>
                <LostConnection/>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className='max-w-4xl mx-auto text-center text-2xl mb-5'>
                {region} cuisine:
            </div>
            {meals && <MealsList meals={meals}/>}
        </Layout>
    );
};
