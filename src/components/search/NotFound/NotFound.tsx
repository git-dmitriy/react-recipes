import { useContext, useEffect, useState } from 'react';
import { getRandomMeal } from 'helpers/api';
import { Meal } from 'components/meals/Meals';
import { Layout } from 'components/layout/Layout';
import { LostConnection } from 'components/LostConnection';
import { AppContext } from 'context/AppContext';
import { MealItemTypes } from 'appTypes';
import { motion } from 'framer-motion';

type P = {
  target: string;
};

export const NotFound: React.FC<P> = ({ target }) => {
  const [randomMeal, setRandomMeal] = useState<MealItemTypes>();
  const [disconnected, setDisconnected] = useState(false);

  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    let cleanupFuse = true;

    setIsLoading(true);

    getRandomMeal()
      .then((data) => {
        cleanupFuse && setRandomMeal(data.meals[0]);
      })
      .catch((e) => {
        console.warn(e);
        setDisconnected(true);
      })
      .finally(() => setIsLoading(false));

    return () => {
      cleanupFuse = false;
    };
  }, []);

  if (disconnected) {
    return (
      <Layout>
        <LostConnection />
      </Layout>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='flex flex-col justify-around items-center my-6 px-2'
    >
      <div className='w-full sm:w-1/2 pl-2 flex flex-col items-center text-center'>
        <h2 className=''>
          <span className='font-bold block'>Nothing found</span> for &quot;
          {target}&quot;
        </h2>
        <div>Try to cook this </div>
        <div className='w-12 h-1 bg-red-500 rounded mt-2 mb-4' />
      </div>
      <ul className='rounded-lg overflow-hidden w-4/6 sm:w-1/2'>
        {randomMeal && <Meal {...randomMeal} />}
      </ul>
    </motion.div>
  );
};
