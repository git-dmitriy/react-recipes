import { useEffect, useState } from 'react';
import { getRandomMeal } from '../../helpers/api';
import { Meal } from '../Meals/Meal';

export const NotFound = ({ target, meal }) => {
  const [randomMeal, setRandomMeal] = useState();
  useEffect(() => {
    getRandomMeal().then((data) => {
      setRandomMeal(data.meals[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='mx-auto lg:w-2/4 flex flex-col-reverse sm:flex-row justify-around items-center my-6 px-2'>
        <div className='rounded-lg overflow-hidden w-full sm:w-1/2'>
          {randomMeal && <Meal {...randomMeal} />}
        </div>
        <div className='w-full sm:w-1/2 pl-2 flex flex-col items-center'>
          <h2 className=''>
            <span className='font-bold block'>Nothing found</span> for "{target}
            "{' '}
          </h2>
          <div>Try to cook this </div>
          <div className='w-12 h-1 bg-red-500 rounded mt-2 mb-4' />
        </div>
      </div>
      {/* {randomMeal ? <MealsList meals={randomMeal} /> : null} */}
    </>
  );
};
