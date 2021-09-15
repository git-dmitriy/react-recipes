import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritesContext';
import LazyLoad from 'react-lazyload';

export function Meal(props) {
  const { idMeal, strMeal, strMealThumb } = props;
  const { addToFavorites, removeFromFavorites, state } =
    useContext(FavoriteContext);

  return (
    <>
      <li className='flex flex-col justify-between bg-yellow-200 rounded-lg p-4 m-2'>
        <Link
          to={`/meal/${idMeal}`}
          className='bg-yellow-100 rounded-lg overflow-hidden flex block min-h-300'
        >
          <LazyLoad height={300} once>
            <img className='w-full' src={strMealThumb} alt={strMeal} />
          </LazyLoad>
        </Link>
        <div className='flex flex-col items-start mt-4'>
          <div className='flex items-center justify-between w-full'>
            <h4 className='text-xl font-semibold w-11/12'>{strMeal}</h4>
            {!state.favorites.find((item) => item.idMeal === idMeal) ? (
              <button
                className='w-1/12 leading-none rounded font-medium bg-transparent hover:text-yellow-400 transition duration-200 text-xs uppercase'
                onClick={() => {
                  addToFavorites(props);
                }}
              >
                <svg
                  className='fill-current w-full'
                  viewBox='0 -10 511.98685 511'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0' />
                </svg>
              </button>
            ) : (
              <button
                className='w-1/12 leading-none rounded font-medium bg-transparent text-yellow-400 transition duration-200 text-xs uppercase'
                onClick={() => {
                  removeFromFavorites(props);
                }}
              >
                <svg
                  viewBox='0 -10 511.98685 511'
                  className='fill-current w-full'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0' />
                </svg>
              </button>
            )}
          </div>
          <Link
            to={`/meal/${idMeal}`}
            className='w-full text-center py-5 leading-none rounded font-medium mt-3 bg-yellow-400 hover:bg-yellow-300 transition duration-200 text-md uppercase'
          >
            Watch the recipe
          </Link>
        </div>
      </li>
    </>
  );
}
