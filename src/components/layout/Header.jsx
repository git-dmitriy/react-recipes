import { useHistory, NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';

export function Header() {
  const { push } = useHistory();

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim().length !== 0) {
      push({
        pathname: '/recipes',
        search: `search=${searchQuery}`,
      });
    }
  };

  return (
    <nav className='bg-yellow-200 shadow dark:bg-gray-800'>
      <ul className='container flex items-center text-lg justify-center p-6 mx-auto capitalize dark:text-gray-300'>
        <li>
          <Search cb={handleSearch} />
        </li>

        <li>
          <NavLink
            activeClassName='border-b-2 border-red-500 font-bold'
            to='/categories'
            className='border-b-2 border-transparent hover:border-red-500 mx-1.5 sm:mx-6'
          >
            Recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName='border-b-2 border-red-500 font-bold'
            to='/about'
            className='border-b-2 border-transparent  hover:border-red-500 mx-1.5 sm:mx-6'
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
