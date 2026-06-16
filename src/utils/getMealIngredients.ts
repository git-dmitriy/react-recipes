export type Ingredient = {
    name: string;
    measure: string;
};

export function getMealIngredients(meal: Record<string, string | undefined>): Ingredient[] {
    const result: Ingredient[] = [];

    for (let i = 1; i <= 20; i++) {
        const name = meal[`strIngredient${i}`]?.trim();
        if (name) {
            result.push({
                name,
                measure: meal[`strMeasure${i}`]?.trim() ?? '',
            });
        }
    }

    return result;
}
