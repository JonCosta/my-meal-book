import axios from "axios";
import { useEffect, useState } from "react";
import { THE_MEALDB_ENDPOINT } from "../../../utils/Constants";
import { createMealFromMealApiObject, isStringEmpty, sortElementListByName } from "../../../utils/StringUtils";
import CategoryList from "../../common/CategoryList/CategoryList";
import LoadingLabel from "../../common/LoadingLabel/LoadingLabel";
import MealList from "../../common/MealList/MealList";
import SurpriseMeButton from "../../common/SurpriseMeButton/SurpriseMeButton";

import { FaceFrownIcon } from "@heroicons/react/16/solid";
import React from 'react';
import Meal from "../../../models/Meal.model";

const HomePage: React.FC = () => {

    const [isSearchingMeals, setIsSearchingMeals] = useState(false);
    const [isShowCategoryList, setIsShowCategoryList] = useState(true);
    const [isShowNotFoundMessage, setIsShowNotFoundMessage] = useState(false);
    const [isShowSurpriseMeButton, setIsShowSurpriseMeButton] = useState(true);
    const [mealList, setMealList] = useState<Meal[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    var searchTimer: any = null;

    useEffect(() => {
        const isShowNotFoundMessage = mealList.length === 0 && !isSearchingMeals && !isStringEmpty(searchQuery);
        const isShowSurpriseMeButton = mealList.length === 0 && !isSearchingMeals && isStringEmpty(searchQuery);
        const isShowCategoryList = mealList.length === 0 && !isSearchingMeals && isStringEmpty(searchQuery);
        setIsShowCategoryList(isShowCategoryList);
        setIsShowSurpriseMeButton(isShowSurpriseMeButton);
        setIsShowNotFoundMessage(isShowNotFoundMessage);

    }, [isSearchingMeals, mealList, searchQuery]);

    const handleChangeSearch = (event: any) => {
        const query = event.target.value;
        clearTimeout(searchTimer);

        if (isStringEmpty(query)) {
            clearSearch();
            return;
        }

        searchTimer = setTimeout(() => {
            fetchMealList(query);
        }, 300);
    }

    const fetchMealList = async (query: string) => {
        try {
            setSearchQuery(query);
            setIsSearchingMeals(true);
            const response = await axios.get(`${THE_MEALDB_ENDPOINT}/search.php?s=${query}`);

            if (response.data.meals != null) {
                let mealList = generateMealListFromApiResponse(response.data.meals);
                mealList = sortElementListByName(mealList);
                setMealList(mealList);
            } else {
                setMealList([]);
            }

            setIsSearchingMeals(false);

        } catch (fetchError) {
            console.error(fetchError);
            setIsSearchingMeals(false);
        }
    }

    const generateMealListFromApiResponse = (apiMealList: any[]) => {
        return apiMealList.map(apiMeal => createMealFromMealApiObject(apiMeal));
    }

    const clearSearch = () => {
        setMealList([]);
        setSearchQuery('');
    }

    return (
        <div>
            <h1 className="text-4xl text-center text-white font-bold font-title
                    md:text-5xl lg:text-6xl">
                My Meal Book
            </h1>
            <h2 className="text-md text-center text-white mt-2 font-semibold font-body
                    md:text-lg lg:text-xl">
                Looking for delicious meals and recipes?
                <br />
                We got your back!
            </h2>

            <div className="relative my-6 rounded-md shadow-sm">
                <input type="text" name="search" id="search" className="block w-full rounded-md p-3
                        text-gray-900 placeholder:text-gray-500 placeholder:text-sm lg:placeholder:text-md"
                    placeholder="What would you like to eat? :)" autoComplete="off"
                    onInput={handleChangeSearch}></input>
            </div>

            {isShowCategoryList &&
                <CategoryList />
            }

            {isShowSurpriseMeButton &&
                <SurpriseMeButton />
            }

            {isSearchingMeals &&
                <LoadingLabel labelText={`Searching for '${searchQuery}'...`} />
            }

            {isShowNotFoundMessage &&
                <div className="flex flex-row justify-center items-center my-4
                text-center text-lg text-white font-title">
                    <p className="text-white">
                        Sorry, we couldn't find anything...
                    </p>
                    &nbsp;
                    <FaceFrownIcon className="size-6" />
                </div>
            }

            <MealList items={mealList} />
        </div>
    )
}

export default HomePage;