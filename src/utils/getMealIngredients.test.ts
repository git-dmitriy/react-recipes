import {getMealIngredients} from './getMealIngredients';
import {it, expect, describe} from 'vitest';

describe('getMealIngredients', () => {
    it('extracts paired ingredients and measures', () => {
        const result = getMealIngredients({
            idMeal: '1',
            strMeal: 'Test',
            strMealThumb: 'https://example.com/meal.jpg',
            strIngredient1: 'Sausages',
            strMeasure1: '2',
            strIngredient2: 'Bacon',
            strMeasure2: ' 3 ',
        });

        expect(result).toEqual([
            {name: 'Sausages', measure: '2'},
            {name: 'Bacon', measure: '3'},
        ]);
    });

    it('skips empty ingredient slots', () => {
        const result = getMealIngredients({
            idMeal: '1',
            strMeal: 'Test',
            strMealThumb: 'https://example.com/meal.jpg',
            strIngredient1: '  ',
            strIngredient2: 'Eggs',
            strMeasure2: '2',
        });

        expect(result).toEqual([{name: 'Eggs', measure: '2'}]);
    });

    it('returns empty measure when measure field is missing', () => {
        const result = getMealIngredients({
            idMeal: '1',
            strMeal: 'Test',
            strMealThumb: 'https://example.com/meal.jpg',
            strIngredient1: 'Salt',
        });

        expect(result).toEqual([{name: 'Salt', measure: ''}]);
    });
});
