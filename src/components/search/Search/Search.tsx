import {
  useState,
  useRef,
  KeyboardEventHandler,
  ChangeEventHandler,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim().length !== 0) {
      navigate({
        pathname: '/recipes',
        search: `search=${searchQuery}`,
      });
    }
  };

  const onChangeHanlder: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const onSubmitHanlder = () => {
    handleSearch(searchQuery);
  };

  const onKeyDownHanlder: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmitHanlder();
      setSearchQuery('');
      if (searchInputRef.current !== null) searchInputRef.current.blur();
    }
  };

  return (
    <form className='flex' onSubmit={onSubmitHanlder}>
      <div className='relative my-2 mx-auto dark:text-gray-900'>
        <input
          role='searchbox'
          type='text'
          className='focus:outline-none focus:ring-2 dark:placeholder:text-gray-600 dark:bg-gray-100 focus:ring-red-500 shadow rounded-full w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96 border-0 p-3 pl-9 min-w-full'
          placeholder='Search by name...'
          value={searchQuery}
          ref={searchInputRef}
          onChange={onChangeHanlder}
          onKeyDown={onKeyDownHanlder}
        />
        <span
          className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 '
          onClick={onSubmitHanlder}
        >
          <BsSearch className='fill-current' />
        </span>
      </div>
    </form>
  );
};
