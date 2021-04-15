import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Ingredients } from '../components/Recipe/Ingredients';

export function Recipe() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({});
  const [imgPlaceholder, setImgPlaceholder] = useState('');
  const placeholder = 'https://via.placeholder.com/500.png/546E7A?text=';

  useEffect(() => {
    getMealById(idMeal).then((data) => {
      setRecipe(data.meals[0]);
      setImgPlaceholder(data.meals[0].strMeal);
    });
    console.log('recipe:', recipe);
  }, [idMeal]);

  return (
    <>
      <div className='row'>
        <div className='col xl6 l6 m12'>
          {recipe.strMealThumb ? (
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          ) : (
            <img src={placeholder + imgPlaceholder} alt={recipe.strMeal} />
          )}
        </div>

        <div className='col xl6 l6 m12'>
          <h2>{recipe.strMeal}</h2>
          <h3>Category: {recipe.strCategory || 'unknown'}</h3>
          <h3>Country of origin: {recipe.strArea || 'unknown'}</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col xl12'>
          <p className='flow-text'>{recipe.strInstructions}</p>
        </div>
        <div className='col xl12 m12 s12'>
          <Ingredients props={recipe} />
        </div>
      </div>
    </>
  );
}
