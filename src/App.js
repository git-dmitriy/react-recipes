import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Categories } from './pages/Categories';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <main className='container content'>
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
    </>
  );
}

export default App;
