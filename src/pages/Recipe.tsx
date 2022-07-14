import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from 'helpers/api';
import { Ingredients } from 'components/recipe/Ingredients';
import { YoutubeIframe } from 'components/YoutubeIframe';
import { RecipeImage } from 'components/recipe/RecipeImage';
import { FavoriteToggle } from 'components/FavoriteToggle';
import { CategoriesLink } from 'components/recipe/CategoriesLink';
import { Layout } from 'components/layout/Layout';
import { MealItemTypes } from 'appTypes';
import { LostConnection } from 'components/LostConnection';
import { AppContext } from 'context/AppContext';
import { motion } from 'framer-motion';

export const Recipe: React.FC = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState<MealItemTypes | null>(null);
  const [isRecipeExist, setIsRecipeExist] = useState(true);
  const [imgPlaceholder, setImgPlaceholder] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [disconnected, setDisconnected] = useState(false);
  const placeholder = 'https://via.placeholder.com/500.png/546E7A?text=';
  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    let cleanupFuse = true;

    setIsLoading(true);

    if (idMeal) {
      getMealById(idMeal)
        .then((data) => {
          if (!data.meals) {
            cleanupFuse && setIsRecipeExist(false);
          }

          if (cleanupFuse) {
            setRecipe(data.meals[0]);
            setImgPlaceholder(placeholder + data.meals[0].strMeal);
            setYoutubeLink(data.meals[0].strYoutube);
          }
        })
        .catch((e) => {
          console.warn(e);
          setDisconnected(true);
        })
        .finally(() => setIsLoading(false));
    }
    return () => {
      cleanupFuse = false;
    };
  }, [idMeal]);

  if (!isRecipeExist) {
    return (
      <Layout>
        <h2 className='text-2xl text-center'>There is no such recipe</h2>
      </Layout>
    );
  }

  if (disconnected) {
    return (
      <Layout>
        <LostConnection />
      </Layout>
    );
  }

  return (
    <>
      {recipe && (
        <Layout>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col items-center mb-10'
          >
            <div className='flex justify-center mb-5'>
              <h2 className='font-semibold text-center text-2xl sm:text-3xl'>
                {recipe.strMeal}
              </h2>

              <FavoriteToggle meal={recipe} />
            </div>

            <CategoriesLink
              category={recipe.strCategory || ''}
              country={recipe.strArea || ''}
            />

            <div className='flex flex-col-reverse mt-6 sm:grid grid-cols-2 gap-10'>
              <p className='leading-relaxed text-xl text-justify mb-4'>
                {recipe.strInstructions}
              </p>

              <div>
                <div className='rounded-3xl overflow-hidden mb-10'>
                  <RecipeImage
                    imgLink={recipe.strMealThumb}
                    altText={recipe.strMeal}
                    imgPlaceholder={imgPlaceholder}
                  />
                </div>
                <Ingredients props={recipe} />
              </div>
            </div>
          </motion.div>
          {youtubeLink.length ? (
            <YoutubeIframe address={youtubeLink.slice(32)} />
          ) : null}
        </Layout>
      )}
    </>
  );
};
