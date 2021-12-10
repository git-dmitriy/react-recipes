import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory, getAllCategories } from 'helpers/api';
import { Loader } from 'components/Loader';
import { MealsList } from 'components/meals/MealsList';
import { AboutCategory } from 'components/category/AboutCategory';
import { Layout } from 'components/layout/Layout';

export const Category = () => {
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
    <Layout>
      {!meals.length ? (
        <Loader />
      ) : (
        <>
          <AboutCategory categoryInfo={categoryInfo} />
          <MealsList meals={meals} />
        </>
      )}
    </Layout>
  );
};
