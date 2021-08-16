import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <ul className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <li>
          <NavLink
            activeClassName='border-b-2 border-blue-500'
            exact
            to='/'
            className='text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6'
          >
            Find Recipe
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName='border-b-2 border-blue-500'
            to='/categories'
            className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
          >
            Categories
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName='border-b-2 border-blue-500'
            to='/about'
            className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
