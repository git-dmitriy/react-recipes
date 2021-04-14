import { Link } from 'react-router-dom';

export function Meal({ idMeal, strMeal, strMealThumb }) {
  return (
    <>
      <div class='card'>
        <div class='card-image'>
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div class='card-content'>
          <span class='card-title'>{strMeal}</span>
        </div>
        <div className='card-action'>
          <Link to={`/meal/${idMeal}`} className='btn'>
            Watch recipe
          </Link>
        </div>
      </div>
    </>
  );
}
