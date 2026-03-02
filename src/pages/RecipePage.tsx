import {useParams} from 'react-router-dom';
import {getMealById} from '@/api-utils';
import {Ingredients} from '@components/Ingredients';
import {YoutubeIframe} from '@components/YoutubeIframe';
import {RecipeImage} from '@components/RecipeImage';
import {FavoriteToggle} from '@components/FavoriteToggle';
import {CategoriesLink} from '@components/CategoriesLink';
import {useQuery} from '@tanstack/react-query';
import {Loader} from '@components/Loader';

export const RecipePage: React.FC = () => {
    const {idMeal} = useParams();

    const {status, data} = useQuery({
        queryKey: ['recipe', idMeal],
        queryFn: async () => {
            const response = await getMealById(idMeal as string);
            if (!response?.meals || !Array.isArray(response.meals)) {
                throw new Error('Recipe not found');
            }
            const meal = response.meals[0];
            if (!meal) {
                throw new Error('Recipe not found');
            }
            return meal;
        },
    });

    if (status === 'pending') {
        return <Loader/>;
    }

    if (status === 'error') {
        return (
            <div className="h-100 grid place-items-center">
                <h2 className="text-2xl text-center">There is no such recipe</h2>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="h-100 grid place-items-center">
                <h2 className="text-2xl text-center">Recipe data is missing</h2>
            </div>
        );
    }

    return (
        <>
            <div
                className='flex flex-col items-center mb-10'
            >
                <div className='flex justify-center mb-5'>
                    <h2 className='font-semibold text-center text-2xl sm:text-3xl'>
                        {data.strMeal}
                    </h2>

                    <FavoriteToggle meal={data}/>
                </div>

                <CategoriesLink
                    category={data.strCategory || ''}
                    country={data.strArea || ''}
                />

                <div className='flex flex-col-reverse mt-6 sm:grid grid-cols-2 gap-10'>
                    <p className='leading-relaxed text-xl text-justify mb-4'>
                        {data.strInstructions}
                    </p>

                    <div>
                        <div className='rounded-3xl overflow-hidden mb-10'>
                            <RecipeImage
                                imgLink={data.strMealThumb}
                                altText={data.strMeal}
                            />
                        </div>
                        <Ingredients props={data}/>
                    </div>
                </div>

                {data.strYoutube ? (
                    <YoutubeIframe src={data.strYoutube} />
                ) : null}
            </div>


        </>
    );

};
