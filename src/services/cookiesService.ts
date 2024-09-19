import { Cookies } from "react-cookie";
import Meal from "../models/Meal.model";
import { COOKIE_FAVORITES } from "../utils/Constants";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options: object = {}) => {
    cookies.set(name, value, { path: '/', ...options });
}

export const getCookie = (name: string): string | undefined => {
    return cookies.get(name);
};

export const removeCookie = (name: string, options: object = {}) => {
    cookies.remove(name, { path: '/', ...options });
};

export const fetchFavoriteMealIdList = (): number[] => {
    const favoriteMealString: string = "" + cookies.get(COOKIE_FAVORITES);
    const favoriteMealStringList = favoriteMealString.split(':');
    const favoriteMealIdList: number[] = favoriteMealStringList.map(f => Number(f));
    return favoriteMealIdList;
}

export const addMealToFavorites = (meal: Meal) => {
    let favoriteMealIdList: number[] = fetchFavoriteMealIdList();
    favoriteMealIdList.push(meal.id);
    updateFavoriteMealsCookie(favoriteMealIdList);
}

export const removeMealFromFavorites = (meal: Meal) => {
    let favoriteMealsList: number[] = fetchFavoriteMealIdList();
    favoriteMealsList = favoriteMealsList.filter(favorite => favorite !== meal.id);
    updateFavoriteMealsCookie(favoriteMealsList);
}

export const updateFavoriteMealsCookie = (mealIdList: number[]) => {
    const favoritesString: string = mealIdList.join(':');
    setCookie(COOKIE_FAVORITES, favoritesString);
}

