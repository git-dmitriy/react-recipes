import {queryOptions} from '@tanstack/react-query';
import {
    getAllCategories,
    getFilteredCategory,
    getFilteredCategoryByCountry,
    getMealById,
    getMealByName,
    getMealsByIngredient,
} from '@/api-utils';
import type {CategoryItemTypes, MealItemTypes} from '@/appTypes';

function mergeMealsByName(mealsByName: MealItemTypes[], mealsByIngredient: MealItemTypes[]): MealItemTypes[] {
    const byId = new Map<string, MealItemTypes>();
    for (const m of mealsByName) byId.set(m.idMeal, m);
    for (const m of mealsByIngredient) if (!byId.has(m.idMeal)) byId.set(m.idMeal, m);
    return Array.from(byId.values());
}

export const categoriesQueryOptions = queryOptions({
    queryKey: ['categories'] as const,
    queryFn: async (): Promise<CategoryItemTypes[]> => {
        const response = await getAllCategories();
        if (!response?.categories || !Array.isArray(response.categories)) {
            throw new Error('Invalid categories response');
        }
        return response.categories;
    },
});

export const recipeQueryOptions = (idMeal: string) =>
    queryOptions({
        queryKey: ['recipe', idMeal] as const,
        queryFn: async (): Promise<MealItemTypes> => {
            const response = await getMealById(idMeal);
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

export const mealsByCategoryQueryOptions = (name: string) =>
    queryOptions({
        queryKey: ['meals', name] as const,
        queryFn: async (): Promise<MealItemTypes[]> => {
            const response = await getFilteredCategory(name);
            if (!response?.meals || !Array.isArray(response.meals)) {
                return [];
            }
            return response.meals;
        },
    });

export const searchQueryOptions = (query: string) =>
    queryOptions({
        queryKey: ['search', query] as const,
        queryFn: async (): Promise<MealItemTypes[]> => {
            const [byNameRes, byIngredientRes] = await Promise.all([
                getMealByName(query),
                getMealsByIngredient(query),
            ]);
            const mealsByName = Array.isArray(byNameRes?.meals) ? byNameRes.meals : [];
            const mealsByIngredient = Array.isArray(byIngredientRes?.meals) ? byIngredientRes.meals : [];
            const merged = mergeMealsByName(mealsByName, mealsByIngredient);
            if (merged.length === 0) {
                throw new Error('No meals found');
            }
            return merged;
        },
    });

export const countryMealsQueryOptions = (region: string) =>
    queryOptions({
        queryKey: ['country', region] as const,
        queryFn: async (): Promise<MealItemTypes[]> => {
            const response = await getFilteredCategoryByCountry(region);
            if (!response?.meals || !Array.isArray(response.meals)) {
                return [];
            }
            return response.meals;
        },
    });
