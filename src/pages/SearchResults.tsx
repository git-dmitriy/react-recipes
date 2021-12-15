import { useEffect, useState } from 'react';
import { getMealByName } from 'helpers/api';
import { useSearchQuery } from 'hooks/customHooks';
import { MealsList } from 'components/meals/MealsList';
import { Loader } from 'components/Loader';
import { NotFound } from 'components/search/NotFound';
import { Layout } from 'components/layout/Layout';

import { MealItemTypes } from 'appTypes';

export const SearchResults: React.FC = () => {
  const query = useSearchQuery();
  const searchQuery = query.get('search');
  const [searchResults, setSearchResults] = useState<null | MealItemTypes[]>(
    null
  );

  useEffect(() => {
    if (searchQuery) {
      getMealByName(searchQuery).then((data) => {
        setSearchResults(data.meals);
      });
    }
  }, [searchQuery]);

  if (searchResults === null) {
    return (
      <Layout>
        <NotFound target={searchQuery || ''} />
      </Layout>
    );
  }

  return (
    <Layout>
      {!searchResults.length ? <Loader /> : <MealsList meals={searchResults} />}
    </Layout>
  );
};