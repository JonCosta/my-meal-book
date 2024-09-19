import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from '../../../models/Meal.model';
import { fetchFavoriteMealIdList } from '../../../services/cookiesService';
import { THE_MEALDB_ENDPOINT } from '../../../utils/Constants';
import { createMealFromMealApiObject, sortElementListByName } from '../../../utils/StringUtils';
import BackButton from '../../common/BackButton/BackButton';
import LoadingLabel from '../../common/LoadingLabel/LoadingLabel';
import MealList from '../../common/MealList/MealList';
import Title from '../../common/Title/Title';

const FavoritePage: React.FC = () => {

    const [isSearchingMeals, setIsSearchingMeals] = useState(false);
    const [mealList, setMealList] = useState<Meal[]>([]);

    useEffect(() => {
        setIsSearchingMeals(true);
        let tempMealList: Meal[] = []
        let favoriteMealIdList: number[] = fetchFavoriteMealIdList();
        let fetchRequestList = createMealFetchList(favoriteMealIdList);

        Promise.all(fetchRequestList).then((responseList: any[]) => {
            responseList.forEach(response => {
                const mealFromAPI = response.data.meals[0];
                const meal: Meal = createMealFromMealApiObject(mealFromAPI);
                tempMealList.push(meal);
            });

            tempMealList = sortElementListByName(tempMealList);
            setMealList(tempMealList);
            setIsSearchingMeals(false);

        }).catch(resError => {
            console.log(resError);
        });
    }, []);

    const createMealFetchList = (idList: number[]) => {
        let fetchRequestList: any[] = [];
        idList.forEach(id => {
            const request = axios.get(`${THE_MEALDB_ENDPOINT}/lookup.php?i=${id}`);
            fetchRequestList.push(request);
        });
        return fetchRequestList;
    }

    return (
        <>
            {isSearchingMeals &&
                <LoadingLabel />
            }
            {!isSearchingMeals &&
                <>
                    <BackButton />
                    <Title label="Your Favorite Recipes" />
                    <MealList items={mealList} />
                </>
            }
        </>
    )
}

export default FavoritePage;