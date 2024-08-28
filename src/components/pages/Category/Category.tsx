import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Meal from '../../../models/Meal.model';
import { THE_MEALDB_ENDPOINT } from '../../../utils/Constants';
import { sortElementListByName } from '../../../utils/StringUtils';
import HomeButton from '../../common/HomeButton/HomeButton';
import LoadingLabel from '../../common/LoadingLabel/LoadingLabel';
import MealItem from '../../common/MealItem/MealItem';

const CategoryPage: React.FC = () => {
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [mealList, setMealList] = useState<Meal[]>([]);

    useEffect(() => {
        const fetchMealsByCategory = async () => {
            if (category === undefined) return;
            setIsLoading(true);
            try {
                const response = await axios.get(`${THE_MEALDB_ENDPOINT}/filter.php?c=${category}`);
                if (response.data.meals != null) {
                    let tempList = generateMealListFromApiResponse(response.data.meals);
                    tempList = sortElementListByName(tempList);
                    setIsLoading(false);
                    setMealList(tempList);

                } else {
                    setIsLoading(false);
                    setMealList([]);
                }

            } catch (fetchError) {
                setIsLoading(false);
                setMealList([]);
            }
        }

        fetchMealsByCategory();

    }, [category]);


    const generateMealListFromApiResponse = (apiMealList: any[]): Meal[] => {
        return apiMealList.map(apiMeal => new Meal(apiMeal));
    }



    return (
        <div>
            {isLoading &&
                <LoadingLabel />
            }
            {!isLoading &&
                <>
                    <HomeButton />

                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold capitalize pb-3 font-title">
                        {category} Recipes
                    </h1>

                    <div className="item-list">
                        <ul>
                            {mealList.map((meal: any) => (
                                <MealItem key={meal.id} meal={meal} />
                            ))}
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}

export default CategoryPage;