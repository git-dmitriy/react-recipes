import { Meal } from './Meal';

export const MealsList = ({ meals }) => {
  return (
    <>
      <ul className='mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center xl:max-w-6xl max-w-4xl'>
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </ul>
    </>
  );
};
