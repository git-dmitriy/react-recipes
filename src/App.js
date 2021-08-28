import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <main className='container mx-auto pb-10 pt-5'>
              <Switch>
                <Route exact path='/' component={Categories} />
                <Route path='/favorites' component={Favorites} />
                <Route path='/recipes' component={SearchResults} />
                <Route path='/category/:name' component={Category} />
                <Route path='/country/:region' component={SearchByCountry} />
                <Route path='/meal/:idMeal' component={Recipe} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
          <Footer />
        </Router>
      </FavoritesState>
    </div>
  );
}

export default App;
