import { useEffect, useState } from 'react';
import { getMealByName } from '../helpers/api';
import { useSearchQuery } from '../hooks/customHooks';
import { MealsList } from '../components/Meals/MealsList';
import { Preloader } from '../components/Preloader/Preloader';
import { NotFound } from '../components/Search/NotFound';

const SearchResults = () => {
  const query = useSearchQuery();
  const searchQuery = query.get('search');
  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {
    getMealByName(searchQuery).then((data) => {
      setSearchResults(data.meals);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  if (searchResults === null) {
    return <NotFound target={searchQuery} />;
  }

  return (
    <div>
      {!searchResults.length ? (
        <Preloader />
      ) : (
        <MealsList meals={searchResults} />
      )}
    </div>
  );
};

export default SearchResults;
