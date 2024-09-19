import { HeartIcon } from "@heroicons/react/16/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import Meal from '../../../models/Meal.model';
import { addMealToFavorites, fetchFavoriteMealIdList, removeMealFromFavorites, setCookie } from "../../../services/cookiesService";
import { COOKIE_FAVORITES } from '../../../utils/Constants';

type FavoriteButtonProps = {
    meal: Meal
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ meal }) => {
    const [cookies] = useCookies([COOKIE_FAVORITES]);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickFavorite = () => {
        if (Object.prototype.hasOwnProperty.call(cookies, COOKIE_FAVORITES)) {
            const favoriteMealsList = fetchFavoriteMealIdList();
            if (favoriteMealsList.includes(meal.id)) {
                removeMealFromFavorites(meal);
                setIsFavorite(false);
                toast.info("Meal removed from favorites!");
            } else {
                addMealToFavorites(meal);
                setIsFavorite(true);
                toast.success("Meal added to favorites!");
            }

        } else {
            createFavoritesCookie();
            setIsFavorite(true);
        }
    }

    const createFavoritesCookie = () => {
        let favoriteList: string = `${meal.id}`;
        setCookie(COOKIE_FAVORITES, favoriteList);
    }

    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(cookies, COOKIE_FAVORITES)) {
            const favoriteMealsList = fetchFavoriteMealIdList();
            if (favoriteMealsList.includes(meal.id)) {
                setIsFavorite(true);
            }
        }
    }, [cookies, meal.id]);

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