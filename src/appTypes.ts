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


export type RecipeImageTypes = {
    imgLink?: string;
    altText: string;
};
