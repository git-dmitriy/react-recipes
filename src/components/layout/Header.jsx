import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <nav className='bg-yellow-200 shadow dark:bg-gray-800'>
      <ul className='container flex items-center text-lg justify-center p-6 mx-auto capitalize dark:text-gray-300'>
        <li>
          <NavLink
            activeClassName='border-b-2 border-red-500 font-bold'
            exact
            to='/'
            className=' dark:text-gray-200 mx-1.5 sm:mx-6'
          >
            Find Recipe
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName='border-b-2 border-red-500 font-bold'
            to='/categories'
            className='border-b-2 border-transparent hover:border-red-500 mx-1.5 sm:mx-6'
          >
            Categories
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName='border-b-2 border-red-500 font-bold'
            to='/about'
            className='border-b-2 border-transparent  hover:border-red-500 mx-1.5 sm:mx-6'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
