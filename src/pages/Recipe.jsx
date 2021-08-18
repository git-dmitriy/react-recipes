import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../helpers/api';
import { Preloader } from '../components/Preloader/Preloader';
import { Ingredients } from '../components/Recipe/Ingredients';
import { YoutubeIframe } from '../components/Youtube/YoutubeIframe';
import { RecipeImage } from '../components/Recipe/RecipeImage';

export function Recipe() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({});
  const [imgPlaceholder, setImgPlaceholder] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const placeholder = 'https://via.placeholder.com/500.png/546E7A?text=';
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(idMeal).then((data) => {
      setRecipe(data.meals[0]);
      setImgPlaceholder(placeholder + data.meals[0].strMeal);
      setYoutubeLink(data.meals[0].strYoutube);
    });
  }, [idMeal]);

  return (
    <>
      {!Object.keys(recipe).length ? (
        <Preloader />
      ) : (
        <>
          <section className='text-gray-600 body-font'>
            <div className='container px-5 pt-14 pb-24 mx-auto flex flex-col'>
              <div className='w-full lg:w-6/6 2xl:w-4/6 mx-auto'>
                <div className='rounded-lg h-full overflow-hidden'>
                  <RecipeImage
                    imgLink={recipe.strMealThumb}
                    altText={recipe.strMeal}
                    imgPlaceholder={imgPlaceholder}
                  />
                </div>
                <div className='flex flex-col sm:flex-row mt-10'>
                  <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                    <div className='flex flex-col items-center text-center justify-center'>
                      <h2 className='font-medium title-font mt-4 text-gray-900 text-2xl'>
                        {recipe.strMeal}
                      </h2>
                      <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                      <p className='text-base'>
                        Country:{' '}
                        <span className='font-bold'>
                          {recipe.strArea === 'Unknown'
                            ? 'Origin not establish'
                            : recipe.strArea}
                        </span>
                      </p>
                      <p className='text-base'>
                        Category:{' '}
                        <span className='font-bold'>{recipe.strCategory}</span>
                      </p>
                    </div>
                    <Ingredients props={recipe} />
                  </div>
                  <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                    <p className='leading-relaxed text-xl text-justify mb-4'>
                      {recipe.strInstructions}
                    </p>
                  </div>
                </div>
                {youtubeLink.length ? (
                  <YoutubeIframe address={youtubeLink.slice(32)} />
                ) : null}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
