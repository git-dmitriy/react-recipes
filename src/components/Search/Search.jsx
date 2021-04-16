import { useState } from 'react';

export function Search({ cb = Function.prototype }) {
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    cb(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const closeBtn = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0',
    color: '#9E9E9E',
  };

  const searchInput = { borderBottom: 'none', transition: '.3s' };

  return (
    <form>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}>
        <label className='' htmlFor='search'>
          <i className='material-icons'>search</i>
        </label>
        <input
          id='search'
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          value={search}
          required
          autoComplete='off'
          style={searchInput}
        />
        {!search ? null : (
          <div onClick={() => setSearch('')} style={closeBtn}>
            <i className='material-icons'>close</i>
          </div>
        )}
      </div>
    </form>
  );
}
