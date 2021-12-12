import { useEffect, useState } from 'react';
import { getRandomMeal } from '../../helpers/api';
import { Meal } from '../meals/Meal';

export const NotFound = ({ target }) => {
  const [randomMeal, setRandomMeal] = useState();
  useEffect(() => {
    getRandomMeal().then((data) => {
      setRandomMeal(data.meals[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col-reverse justify-around items-center my-6 px-2'>
      <ul className='rounded-lg overflow-hidden w-4/6 sm:w-1/2'>
        {randomMeal && <Meal {...randomMeal} />}
      </ul>
      <div className='w-full sm:w-1/2 pl-2 flex flex-col items-center text-center'>
        <h2 className=''>
          <span className='font-bold block'>Nothing found</span> for "{target}"
        </h2>
        <div>Try to cook this </div>
        <div className='w-12 h-1 bg-red-500 rounded mt-2 mb-4' />
      </div>
    </div>
  );
};
