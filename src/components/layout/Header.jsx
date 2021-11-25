import { useNavigate, NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import { GoBack } from './GoBack';
import { BsFillBookmarkFill } from 'react-icons/bs';

export const Header = () => {
  const { push } = useNavigate();

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim().length !== 0) {
      push({
        pathname: '/recipes',
        search: `search=${searchQuery}`,
      });
    }
  };

  const textLinkClassName =
    'border-b-2 border-transparent font-bold outline-none hover:border-red-500 mx-1.5 sm:mx-6 focus:outline-none focus:border-red-500 transition';
  const iconLinkClassName =
    'border-b-2 border-transparent outline-none hover:text-red-500 mx-1.5 sm:mx-6 focus:outline-none focus:text-red-500 transition text-2xl';
  const activeTextLink = ' border-b-2 border-red-500';
  const activeIconLink = ' text-red-500';

  return (
    <nav className='bg-yellow-300 shadow dark:bg-gray-800 fixed top-0 w-full backdrop-blur-md backdrop-filter bg-opacity-50'>
      <ul className='container flex items-center text-lg justify-around sm:justify-center px-2 sm:px-6 mx-auto capitalize dark:text-gray-300'>
        <li>
          <GoBack />
        </li>
        <li>
          <Search cb={handleSearch} />
        </li>

        <li>
          <NavLink
            end
            to='/'
            className={({ isActive }) =>
              textLinkClassName + (isActive ? activeTextLink : '')
            }
          >
            Recipes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='favorites'
            className={({ isActive }) =>
              iconLinkClassName + (isActive ? activeIconLink : '')
            }
          >
            <BsFillBookmarkFill className='fill-current' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
