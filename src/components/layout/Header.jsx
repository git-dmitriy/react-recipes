import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className='#546e7a blue-grey darken-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          React Recipes
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Recipes</Link>
          </li>
          <li>
            <Link to='/categories'>Categories</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
