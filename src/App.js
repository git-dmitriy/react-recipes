import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
