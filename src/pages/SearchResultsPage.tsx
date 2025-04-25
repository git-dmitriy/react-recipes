import {useContext, useEffect, useState} from 'react';
import {getMealByName} from '@/api-utils.ts';
import {useSearchQuery} from '@hooks/useSearchQuery';
import {MealsList} from '@components/MealsList';
import {NotFound} from '@components/NotFound';
import {MealItemTypes} from '@/appTypes';
import {AppContext} from '@context/AppContext';

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search');
    const [searchResults, setSearchResults] = useState<null | MealItemTypes[]>(null);
    const {setIsLoading} = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        if (searchQuery) {
            getMealByName(searchQuery)
                .then((data) => {
                    setSearchResults(data.meals);
                })
                .catch((e) => {
                    console.warn(e);
                })
                .finally(() => setIsLoading(false));
        }

        return () => {
        };
    }, [searchQuery]);

    if (searchResults === null) {
        return (
            <NotFound target={searchQuery || ''}/>
        );
    }

    return (
        <>
            {!!searchResults.length && <MealsList meals={searchResults}/>}
        </>
    );
};
