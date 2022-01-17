import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getFilteredCategoryByCountry } from 'helpers/api';
import { MealsList } from 'components/meals/MealsList';
import { Layout } from 'components/layout/Layout';

export const SearchByCountry: React.FC = () => {
  const { region } = useParams();
  const [meals, setMeals] = useState();

  useEffect(() => {
    (async () => {
      try {
        if (region) {
          const data = await getFilteredCategoryByCountry(region);
          setMeals(await data.meals);
        }
      } catch (err) {
        console.warn('Something went wrong.', err);
      }
    })();
  }, [region]);

  return (
    <Layout>
      <div className='max-w-4xl mx-auto text-center text-2xl mb-5'>
        {region} cuisine:
      </div>
      {meals && <MealsList meals={meals} />}
    </Layout>
  );
};
