import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Categories } from './pages/Categories';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <div className='bg-yellow-50 text-gray-900'>
      <Router>
        <Header />
        <ScrollToTop />
        <main className='container mx-auto pb-10'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/categories' component={Categories} />
            <Route path='/category/:name' component={Category} />
            <Route path='/meal/:idMeal' component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
