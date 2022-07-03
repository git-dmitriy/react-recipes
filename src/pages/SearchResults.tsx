import { useContext, useEffect, useState } from 'react';
import { getMealByName } from 'helpers/api';
import { useSearchQuery } from 'hooks/customHooks';
import { MealsList } from 'components/meals/MealsList';
import { Loader } from 'components/Loader';
import { NotFound } from 'components/search/NotFound';
import { Layout } from 'components/layout/Layout';
import { MealItemTypes } from 'appTypes';
import { LostConnection } from 'components/LostConnection';
import { AppContext } from 'context/AppContext';

export const SearchResults: React.FC = () => {
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
