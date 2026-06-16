import {getMealIngredients} from '@/utils/getMealIngredients';
import type {MealDetailTypes} from '@/appTypes';

type Props = {
    meal: MealDetailTypes;
};

export const Ingredients: React.FC<Props> = ({meal}) => {
    const ingredients = getMealIngredients(meal);

    return (
        <table
            className='w-full ms:w-auto table-fixed bg-yellow-100 dark:bg-yellow-100/80 dark:text-gray-900 border-collapse mx-auto rounded-3xl overflow-hidden mt-4'>
            <thead>
            <tr>
                <th className='w-3/5 md:w-2/4'>Ingredients</th>
                <th className='w-2/5 md:w-2/4'>Measure</th>
            </tr>
            </thead>
            <tbody>
            {ingredients.map(({name, measure}, index) => (
                <tr
                    key={name}
                    className={(index + 1) % 2 !== 0 ? 'bg-yellow-200' : ''}
                >
                    <td className='pl-6'>{name}</td>
                    <td className='pl-6 border-l border-yellow-100'>{measure}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
