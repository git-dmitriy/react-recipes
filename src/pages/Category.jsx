import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory, getAllCategories } from '../helpers/api';
import { Preloader } from '../components/Preloader/Preloader';
import { MealsList } from '../components/Meals/MealsList';
import AboutCategory from '../components/Category/AboutCategory';

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCategories();
        const category = data.categories.filter(
          (item) => item.strCategory === name
        );
        console.log('🚀 ~ file: Category.jsx ~ line 24 ~ category', category);
        setCategoryInfo(category[0]);
      } catch (err) {
        console.warn(
          'Something went wrong with fetching categories info.',
          err
        );
      }

      try {
        const meals = await getFilteredCategory(name);
        setMeals(meals.meals);
      } catch (err) {
        console.warn('Something went wrong with fetching meals.', err);
      }
    })();
  }, [name]);

  return (
    <>
      <AboutCategory categoryInfo={categoryInfo} />
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}
