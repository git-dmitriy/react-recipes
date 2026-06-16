export type CategoryItemTypes = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

export type CategoryLinkTypes = {
    country: string;
    category: string;
};

export type MealItemTypes = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory?: string;
    strArea?: string;
    strInstructions?: string;
    strYoutube?: string;
};

type IngredientIndex =
    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

type MealIngredientFields = {
    [K in IngredientIndex as `strIngredient${K}` | `strMeasure${K}`]?: string;
};

export type MealDetailTypes = MealItemTypes & MealIngredientFields;


export type RecipeImageTypes = {
    imgLink?: string;
    altText: string;
};
