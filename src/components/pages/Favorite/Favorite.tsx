import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from '../../../models/Meal.model';
import { THE_MEALDB_ENDPOINT } from '../../../utils/Constants';
import BackButton from '../../common/BackButton/BackButton';
import MealList from '../../common/MealList/MealList';
import Title from '../../common/Title/Title';

const FavoritePage: React.FC = () => {

    const [mealList, setMealList] = useState<Meal[]>([]);

    useEffect(() => {
        fetchTest();
    }, []);

    const fetchTest = async () => {
        try {
            const response = await axios.get(`${THE_MEALDB_ENDPOINT}/lookup.php?i=52874,52878,53076`);
            console.log(response);

        } catch (fetchError) {
            console.log(fetchError);

        }
    }

    return (
        <>
            <BackButton />
            <Title label="Your Favorite Recipes" />
            <MealList items={mealList} />
        </>
    )
}

export default FavoritePage;