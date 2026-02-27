import {
    BsFillBookmarkPlusFill,
    BsFillBookmarkCheckFill,
} from 'react-icons/bs';
import {useAppStore} from '@/store/useAppStore';
import type {MealItemTypes} from '@/appTypes';

type P = {
    meal: MealItemTypes;
    isDark?: boolean;
};

export const FavoriteToggle: React.FC<P> = ({meal, isDark = false}) => {
    const favorites = useAppStore((store) => store.favorites);
    const addToFavorites = useAppStore((store) => store.addToFavorites);
    const removeFromFavorites = useAppStore((store) => store.removeFromFavorites);

    const isFavorite = favorites.some((item) => item.idMeal === meal.idMeal);

    const addToFavorite = () => {
        addToFavorites(meal);
    };

    const removeFromFavorite = () => {
        removeFromFavorites(meal);
    };

    return (
        <div className='mx-2 mt-2'>
            {isFavorite ? (
                <button
                    className='cursor-pointer text-2xl text-red-500 transition duration-200 uppercase'
                    onClick={removeFromFavorite}
                >
                    <BsFillBookmarkCheckFill className='fill-current'/>
                </button>
            ) : (
                <button
                    className={`cursor-pointer text-2xl text-gray-900 ${
                        isDark ? '' : 'dark:text-orange-200'
                    } hover:text-red-500 transition duration-200 uppercase`}
                    onClick={addToFavorite}
                >
                    <BsFillBookmarkPlusFill className='fill-current'/>
                </button>
            )}
        </div>
    );
};
