import notFoundImage from '../../images/not-found.jpg';
import { useEffect, useState } from 'react';
import { getRandomMeal } from '../../helpers/api';
import { MealsList } from '../Meals/MealsList';

export const NotFound = ({ target }) => {
  const [randomMeal, setRandomMeal] = useState();
  useEffect(() => {
    getRandomMeal().then((data) => {
      setRandomMeal(data.meals);
    });
  }, []);

  return (
    <>
      <div className='flex justify-around my-6 px-2'>
        <div className='rounded-lg overflow-hidden w-1/2 hidden sm:block'>
          <img src={notFoundImage} alt='Spices in teaspoons' />
        </div>
        <div className='w-full sm:w-1/2 pl-2 flex flex-col items-center'>
          <h2 className=''>
            <span className='font-bold block'>Nothing found</span> for "{target}
            "{' '}
          </h2>
          <div>Try to cook this 👇</div>
          <div className='w-12 h-1 bg-red-500 rounded mt-2 mb-4' />
        </div>
      </div>
      {randomMeal ? <MealsList meals={randomMeal} /> : null}
    </>
  );
};
