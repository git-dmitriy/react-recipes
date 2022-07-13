import { Meal } from 'components/meals/Meals';
import { MealItemTypes } from 'appTypes';
import { motion } from 'framer-motion';

type P = {
  meals: MealItemTypes[];
};

export const MealsList: React.FC<P> = ({ meals }) => {
  const variants = {
    visible: (item: number) => ({
      opacity: 1,
      transition: {
        delay: item * 0.03,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <ul className='mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center xl:max-w-6xl max-w-4xl'>
      {meals.map((meal, idx) => (
        <motion.li
          key={meal.idMeal}
          className='flex'
          variants={variants}
          initial='hidden'
          animate='visible'
          custom={idx}
        >
          <Meal {...meal} />
        </motion.li>
      ))}
    </ul>
  );
};
