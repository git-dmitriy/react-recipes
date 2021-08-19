import { Link } from 'react-router-dom';

export function Meal({ idMeal, strMeal, strMealThumb }) {
  return (
    <>
      <li className='flex flex-col bg-green-100 rounded-lg p-4 m-2'>
        <div className=' bg-green-100 rounded-lg'>
          <img className='w-full' src={strMealThumb} alt={strMeal} />
        </div>
        <div className='flex flex-col items-start mt-4'>
          <h4 className='text-xl font-semibold'>{strMeal}</h4>
          <Link
            to={`/meal/${idMeal}`}
            className='p-2 leading-none rounded font-medium mt-3 bg-yellow-300 hover:bg-yellow-200 transition duration-200 text-xs uppercase'
          >
            View recipe
          </Link>
        </div>
      </li>
    </>
  );
}
