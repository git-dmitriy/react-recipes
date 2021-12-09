import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesState } from 'context/favoritesState';

import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { Favorites } from 'pages/Favorites';
import { Categories } from 'pages/Categories';
import { Category } from 'pages/Category';
import { Recipe } from 'pages/Recipe';
import { SearchResults } from 'pages/SearchResults';
import { ScrollToTop } from 'components/layout/ScrollToTop';
import { SearchByCountry } from 'pages/SearchByCountry';

export default function App() {
  return (
    <div className='bg-gray-100 text-gray-900'>
      <FavoritesState>
        <Router>
          <div className='content'>
            <ScrollToTop />
            <main>
              <Routes>
                <Route path='/' element={<Categories />} />
                <Route path='favorites' element={<Favorites />} />
                <Route path='recipes' element={<SearchResults />} />
                <Route path='category/:name' element={<Category />} />
                <Route path='country/:region' element={<SearchByCountry />} />
                <Route path='meal/:idMeal' element={<Recipe />} />
                <Route path='/*' element={<Categories />} />
              </Routes>
            </main>
          </div>
          <Header />
          <Footer />
        </Router>
      </FavoritesState>
    </div>
  );
}
