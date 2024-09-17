import { HeartIcon } from "@heroicons/react/16/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Meal from '../../../models/Meal.model';
import { COOKIE_FAVORITES } from '../../../utils/Constants';

type FavoriteButtonProps = {
    meal: Meal
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ meal }) => {
    const [cookies, setCookies] = useCookies([COOKIE_FAVORITES]);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickFavorite = () => {
        if (Object.prototype.hasOwnProperty.call(cookies, COOKIE_FAVORITES)) {
            const favoriteMealsList = getFavoriteMealsFromCookies();
            console.log(favoriteMealsList, favoriteMealsList.includes(meal.id));

            if (favoriteMealsList.includes(meal.id)) {
                removeMealFromFavorites();
                setIsFavorite(false);
            } else {
                addMealToFavorites();
                setIsFavorite(true);
            }

        } else {
            createFavoritesCookie();
            setIsFavorite(true);
        }
    }

    const addMealToFavorites = () => {
        let favoriteMealsList: number[] = getFavoriteMealsFromCookies();
        favoriteMealsList.push(meal.id);
        updateFavoriteMealsCookie(favoriteMealsList);
    }

    const removeMealFromFavorites = () => {
        let favoriteMealsList: number[] = getFavoriteMealsFromCookies();
        favoriteMealsList = favoriteMealsList.filter(favorite => favorite !== meal.id);
        updateFavoriteMealsCookie(favoriteMealsList);
    }

    const updateFavoriteMealsCookie = (favoriteMealsList: number[]) => {
        let favoritesString: string = favoriteMealsList.join(':');
        setCookies(COOKIE_FAVORITES, favoritesString);
    }

    const getFavoriteMealsFromCookies = useCallback((): number[] => {
        let favoritesString: string = "" + cookies[COOKIE_FAVORITES];
        let favoriteStrList = favoritesString.split(':');
        let favoriteMealsList: number[] = favoriteStrList.map(f => Number(f));
        return favoriteMealsList;
    }, [cookies]);

    const createFavoritesCookie = () => {
        let favoriteList: string = `${meal.id}`;
        setCookies(COOKIE_FAVORITES, favoriteList);
    }

    useEffect(() => {
        console.log('FavoriteButton::useEffect');

        if (Object.prototype.hasOwnProperty.call(cookies, COOKIE_FAVORITES)) {
            const favoriteMealsList = getFavoriteMealsFromCookies();
            if (favoriteMealsList.includes(meal.id)) {
                setIsFavorite(true);
            }
        }
    }, [cookies, getFavoriteMealsFromCookies, meal.id]);

    return (
        <>
            {isFavorite ?
                <HeartIcon className="size-8 text-pink-600 cursor-pointer" onClick={handleClickFavorite} />
                :
                <HeartIconOutline className="size-8 text-white cursor-pointer" onClick={handleClickFavorite} />
            }
        </>
    )
}

export default FavoriteButton;