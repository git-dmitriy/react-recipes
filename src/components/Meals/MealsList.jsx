import { useHistory } from 'react-router';
import { Meal } from './Meal';

export function MealsList({ meals }) {
  const { goBack } = useHistory();
  return (
    <>
      <button
        className='btn '
        style={{ marginBottom: '1rem' }}
        onClick={goBack}>
        GO BACK
      </button>
      <div className='list'>
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}
