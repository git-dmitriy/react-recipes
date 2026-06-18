import type {MealDetailTypes} from '@/appTypes';

export type Ingredient = {
    name: string;
    measure: string;
};

export function getMealIngredients(
    meal: MealDetailTypes | Record<string, string | undefined>,
): Ingredient[] {
    const fields = meal as Record<string, string | undefined>;
    const result: Ingredient[] = [];

    for (let i = 1; i <= 20; i++) {
        const name = fields[`strIngredient${i}`]?.trim();
        if (name) {
            result.push({
                name,
                measure: fields[`strMeasure${i}`]?.trim() ?? '',
            });
        }
    }

    return result;
}
