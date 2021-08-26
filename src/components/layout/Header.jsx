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
            activeClassName='border-b-2 border-red-500'
            exact
            to='/'
            className='border-b-2 border-transparent font-bold outline-none hover:border-red-500 mx-1.5 sm:mx-6 focus:outline-none focus:ring-2 focus:border-red-500'
          >
            Recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName='text-red-500'
            to='/favorites'
            className='border-b-2 border-transparent  outline-none hover:text-red-500 mx-1.5 sm:mx-6 focus:outline-none focus:text-red-500'
          >
            <svg viewBox='0 0 212.045 212.045' className='w-6 fill-current'>
              <path
                d='M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
	c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
	c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z'
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
