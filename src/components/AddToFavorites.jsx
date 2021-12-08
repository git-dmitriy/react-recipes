import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkCheckFill,
} from 'react-icons/bs';

export const AddToFavorite = ({
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  return (
    <div className='mx-2 mt-2'>
      {isFavorite ? (
        <button
          className='text-2xl text-red-500 transition duration-200 uppercase'
          onClick={removeFromFavorites}
        >
          <BsFillBookmarkCheckFill className='fill-current' />
        </button>
      ) : (
        <button
          className='text-2xl text-gray-900 hover:text-red-500 transition duration-200 uppercase'
          onClick={addToFavorites}
        >
          <BsFillBookmarkPlusFill className='fill-current' />
        </button>
      )}
    </div>
  );
};
