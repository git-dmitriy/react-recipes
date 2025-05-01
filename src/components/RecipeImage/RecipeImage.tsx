import {RecipeImageTypes} from '@/appTypes';
import mealPlaceholder from '@assets/meal-placeholder.svg'

export const RecipeImage: React.FC<RecipeImageTypes> = (
    {
        imgLink,
        altText
    }) => {
    if (!imgLink) {
        return (
            <img
                className='object-cover object-center w-full bg-white'
                src={mealPlaceholder}
                alt={altText}
                loading="lazy"
            />
        );
    }

    return (
        <img
            className='object-cover object-center w-full'
            src={imgLink}
            alt={altText}
            loading="lazy"
        />
    );
};
