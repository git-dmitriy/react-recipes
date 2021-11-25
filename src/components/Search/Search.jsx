import { useState, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export const Search = ({ cb = Function.prototype }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInput = useRef();

  const handleSubmit = () => {
    cb(searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
      setSearchQuery('');
      searchInput.current.blur();
    }
  };

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <div className='relative my-2 mx-auto'>
        <input
          role='searchbox'
          type='text'
          className='focus:outline-none focus:ring-2 focus:ring-red-500 shadow rounded-full w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96 border-0 p-3 pl-9 min-w-full'
          placeholder='Search by name...'
          value={searchQuery}
          ref={searchInput}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <span
          className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 '
          onClick={handleSubmit}
        >
          <BsSearch className='fill-current' />
        </span>
      </div>
    </form>
  );
};


