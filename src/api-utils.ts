import type {CategoryItemTypes, MealItemTypes} from '@/appTypes';

const API_KEY = '1';
const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;

export type MealDbMealsResponse = {
    meals: MealItemTypes[] | null;
};

export type MealDbCategoriesResponse = {
    categories: CategoryItemTypes[];
};

export type MealDbAreaListItem = { strArea: string };

export type MealDbAreasResponse = {
    meals: MealDbAreaListItem[];
};

export class ApiError extends Error {
    constructor(
        message: string,
        public readonly status?: number,
        public readonly cause?: unknown
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

async function apiFetch<T>(url: string): Promise<T> {
    let response: Response;

    try {
        response = await fetch(url);
    } catch (cause) {
        throw new ApiError('Network request failed', undefined, cause);
    }

    if (!response.ok) {
        throw new ApiError(
            `Request failed: ${response.status} ${response.statusText}`,
            response.status
        );
    }

    try {
        return (await response.json()) as T;
    } catch (cause) {
        throw new ApiError('Invalid JSON response', response.status, cause);
    }
}

export const getMealById = async (mealId: string): Promise<MealDbMealsResponse> => {
    const url = `${API_URL}/lookup.php?i=${encodeURIComponent(mealId)}`;
    return apiFetch<MealDbMealsResponse>(url);
};

export const getMealByName = async (name: string): Promise<MealDbMealsResponse> => {
    const url = `${API_URL}/search.php?s=${encodeURIComponent(name)}`;
    return apiFetch<MealDbMealsResponse>(url);
};

export const getAllCategories = async (): Promise<MealDbCategoriesResponse> => {
    const url = `${API_URL}/categories.php`;
    return apiFetch<MealDbCategoriesResponse>(url);
};

export const getListOfCountries = async (): Promise<MealDbAreasResponse> => {
    const url = `${API_URL}/list.php?a=list`;
    return apiFetch<MealDbAreasResponse>(url);
};

export const getFilteredCategory = async (catName: string): Promise<MealDbMealsResponse> => {
    const url = `${API_URL}/filter.php?c=${encodeURIComponent(catName)}`;
    return apiFetch<MealDbMealsResponse>(url);
};

export const getFilteredCategoryByCountry = async (area: string): Promise<MealDbMealsResponse> => {
    const url = `${API_URL}/filter.php?a=${encodeURIComponent(area)}`;
    return apiFetch<MealDbMealsResponse>(url);
};

export const getMealsByIngredient = async (ingredient: string): Promise<MealDbMealsResponse> => {
    const url = `${API_URL}/filter.php?i=${encodeURIComponent(ingredient)}`;
    return apiFetch<MealDbMealsResponse>(url);
};

export const getRandomMeal = async (): Promise<MealDbMealsResponse> => {
    const url = `${API_URL}/random.php`;
    return apiFetch<MealDbMealsResponse>(url);
};
