import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategories } from '../api';
import { Preloader } from '../components/Preloader/Preloader';
import { MealsList } from '../components/Meals/MealsList';

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategories(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}
