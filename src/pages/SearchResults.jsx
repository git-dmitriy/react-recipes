import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMealByName } from '../helpers/api';
import { useSearchQuery } from '../hooks/customHooks';
import { MealsList } from '../components/Meals/MealsList';
import { Preloader } from '../components/Preloader/Preloader';
import { NotFound } from '../components/Search/NotFound';

const SearchResults = () => {
  const query = useSearchQuery();
  const location = useLocation();
  const searchQuery = query.get('search');

  const [searchResults, setSearchResults] = useState('');

  useEffect(() => {
    getMealByName(searchQuery).then((data) => {
      setSearchResults(data.meals);
      console.log(searchResults);
    });
  }, [location]);

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
