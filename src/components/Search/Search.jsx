import { useState, useRef } from 'react';

export function Search({ cb = Function.prototype }) {
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
          type='search'
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
          className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 text-purple-lighter'
          onClick={handleSubmit}
        >
          <svg
            version='1.1'
            className='h-4 text-dark'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 52.966 52.966'
          >
            <path
              d='M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z'
            />
          </svg>
        </span>
      </div>
    </form>
  );
}
