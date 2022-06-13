import { NavLink } from 'react-router-dom';
import { Search } from 'components/search/Search';
import { GoBack } from 'components/layout/GoBack';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

export const Header: React.FC = () => {
  const textLinkClassName =
    'border-b-2 border-transparent font-bold ' +
    'outline-none hover:opacity-70 mx-1.5 sm:mx-6 transition-opacity';
  const iconLinkClassName =
    'block border-b-2 border-transparent outline-none hover:opacity-70 ' +
    'ml-1.5 mr-0.5 sm:ml-6 sm:mr-2 transition-opacity text-2xl';
  const activeTextLink = ' border-b-2 border-red-500';
  const activeIconLink = ' text-red-500';

  return (
    <nav className='bg-yellow-300 shadow dark:bg-gray-800 fixed top-0 w-full backdrop-blur-md backdrop-filter bg-opacity-50'>
      <ul className='container flex items-center text-lg justify-around sm:justify-center px-2 sm:px-6 mx-auto capitalize'>
        <li className='fixed top-28 left-4 sm:static'>
          <GoBack />
        </li>
        <li>
          <Search />
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
        <li className='flex items-center'>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};
