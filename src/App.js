import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Favorites from './pages/Favorites';
import { Categories } from './pages/Categories';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import SearchResults from './pages/SearchResults';
import ScrollToTop from './components/layout/ScrollToTop';
import { FavoritesState } from './context/favoritesState';
import SearchByCountry from './pages/SearchByCountry';

function App() {
  return (
    <div className='bg-yellow-50 text-gray-900'>
      <FavoritesState>
        <Router>
          <div className='content'>
            <Header />
            <ScrollToTop />
            <main className='container mx-auto py-5 mt-20'>
              <Routes>
                <Route exact path='/' element={<Categories />} />
                <Route path='favorites' element={<Favorites />} />
                <Route path='recipes' element={<SearchResults />} />
                <Route path='category/:name' element={<Category />} />
                <Route path='country/:region' element={<SearchByCountry />} />
                <Route path='meal/:idMeal' element={<Recipe />} />
                <Route element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
      </FavoritesState>
    </div>
  );
}

export default App;
