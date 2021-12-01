import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from 'helpers/api';
import { FavoriteContext } from 'context/favoritesContext';
import { Loader } from 'components/Loader/Loader';
import { Ingredients } from 'components/Recipe/Ingredients';
import { YoutubeIframe } from 'components/Youtube/YoutubeIframe';
import { RecipeImage } from 'components/Recipe/RecipeImage';
import { AddToFavorite } from 'components/layout/AddToFavorite';
import { CategoriesLink } from 'components/Recipe/CategoriesLink';
import { Layout } from 'components/layout/Layout';

export const Recipe = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isFavorite, setIsFavorite] = useState(null);

  const { state, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const [imgPlaceholder, setImgPlaceholder] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const placeholder = 'https://via.placeholder.com/500.png/546E7A?text=';

  useEffect(() => {
    getMealById(idMeal).then((data) => {
      setRecipe(data.meals[0]);
      setImgPlaceholder(placeholder + data.meals[0].strMeal);
      setYoutubeLink(data.meals[0].strYoutube);
    });

    setIsFavorite(!!state.favorites.find((item) => item.idMeal === idMeal));
  }, [idMeal, state]);

  return (
    <>
      {!Object.keys(recipe).length ? (
        <Loader />
      ) : (
        <Layout>
          <div className='flex flex-col items-center mb-10'>
            <div className='flex justify-center items-center mb-5'>
              <h2 className='text-gray-900 font-semibold text-3xl'>
                {recipe.strMeal}
              </h2>

              <AddToFavorite
                addToFavorites={() => addToFavorites(recipe)}
                removeFromFavorites={() => removeFromFavorites(recipe)}
                isFavorite={isFavorite}
              />
            </div>

            <CategoriesLink
              category={recipe.strCategory}
              country={recipe.strArea}
            />
          </div>

          <div className='flex flex-col-reverse sm:grid grid-cols-2 gap-10'>
            <div className=''>
              <p className='leading-relaxed text-xl text-justify mb-4'>
                {recipe.strInstructions}
              </p>
            </div>

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

          {youtubeLink.length ? (
            <YoutubeIframe address={youtubeLink.slice(32)} />
          ) : null}
        </Layout>
      )}
    </>
  );
};
