import { useContext, useEffect, useState } from 'react';
import { getMealByName } from '@shared/api/apiUtils/apiUtils.ts';
import { useSearchQuery } from '@shared/hooks/useSearchQuery/useSearchQuery.tsx';
import { MealsList } from '@entities/meals/MealsList';
import { Loader } from '@shared/ui/Loader';
import { NotFound } from '@entities/NotFound';
import { Layout } from '@shared/ui/Layout';
import { MealItemTypes } from '@shared/model/appTypes/appTypes.ts';
import { LostConnection } from '@shared/ui/LostConnection';
import { AppContext } from '@app/context/AppContext.ts';

export const SearchResultsPage: React.FC = () => {
    const query = useSearchQuery();
    const searchQuery = query.get('search');
    const [searchResults, setSearchResults] = useState<null | MealItemTypes[]>(
        null
    );
    const [disconnected, setDisconnected] = useState(false);
    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {
        let cleanupFuse = true;

        setIsLoading(true);

        if (searchQuery) {
            getMealByName(searchQuery)
                .then((data) => {
                    cleanupFuse && setSearchResults(data.meals);
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
    }, [searchQuery]);

    if (searchResults === null) {
        return (
            <Layout>
                <NotFound target={searchQuery || ''} />
            </Layout>
        );
    }

    if (disconnected) {
        return (
            <Layout>
                <LostConnection />{' '}
            </Layout>
        );
    }

    return (
        <Layout>
            {!searchResults.length ? <Loader /> : <MealsList meals={searchResults} />}
        </Layout>
    );
};
