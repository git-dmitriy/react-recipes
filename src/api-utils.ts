const API_KEY = '1';
const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;

export const getMealById = async (mealId: string) => {
    const response = await fetch(API_URL + `/lookup.php?i=${mealId}`);
    return await response.json();
};

export const getMealByName = async (name: string) => {
    const response = await fetch(API_URL + `/search.php?s=${name}`);
    return await response.json();
};

export const getAllCategories = async () => {
    const response = await fetch(API_URL + '/categories.php');
    return await response.json();
};

export const getListOfCountries = async () => {
    const response = await fetch(API_URL + '/list.php?a=list');
    return await response.json();
};

export const getFilteredCategory = async (catName: string) => {
    const response = await fetch(API_URL + `/filter.php?c=${catName}`);
    return await response.json();
};

export const getFilteredCategoryByCountry = async (area: string) => {
    const response = await fetch(API_URL + `/filter.php?a=${area}`);
    return await response.json();
};

export const getRandomMeal = async () => {
    const response = await fetch(API_URL + '/random.php');
    return await response.json();
};
