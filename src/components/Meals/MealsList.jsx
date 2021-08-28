import { Meal } from './Meal';

export function MealsList({ meals }) {
  return (
    <>
      <ul className='mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 xl:max-w-6xl max-w-4xl'>
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </ul>
    </>
  );
}
