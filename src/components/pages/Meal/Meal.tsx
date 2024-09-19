import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredient from "../../../models/Ingredient";
import Meal from "../../../models/Meal.model";
import { THE_MEALDB_ENDPOINT } from "../../../utils/Constants";
import { createMealFromMealApiObject } from "../../../utils/StringUtils";
import BackButton from "../../common/BackButton/BackButton";
import FavoriteButton from "../../common/FavoriteButton/FavoriteButton";
import LoadingLabel from "../../common/LoadingLabel/LoadingLabel";
import Title from "../../common/Title/Title";
import "./Meal.css";

const MealPage: React.FC = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(new Meal());
    const [isLoading, setIsLoading] = useState(false);

    const fetchMealById = async (id: string | undefined) => {
        if (id === undefined) return;
        setIsLoading(true);

        try {
            const response = await axios.get(`${THE_MEALDB_ENDPOINT}/lookup.php?i=${id}`);
            const mealFromAPI = response.data.meals[0];
            const meal = createMealFromMealApiObject(mealFromAPI);
            setMeal(meal);
            setIsLoading(false);

        } catch (fetchError) {
            console.error(fetchError);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log('MealPage::useEffect');
        fetchMealById(id);
    }, [id]);

    return (
        <div>
            {isLoading &&
                <LoadingLabel />
            }
            {(meal.id !== 0 && !isLoading) &&
                <>
                    <div className="flex flex-row justify-between">
                        <BackButton />
                        <FavoriteButton meal={meal} />
                    </div>

                    <Title label={meal.name} />
                    <img className="h-32 w-32 md:h-48 md:w-48 lg:h-60 lg:w-60 rounded mx-auto mb-5"
                        src={meal.urlThumbnail} alt="" />

                    <div className="mb-5">
                        <h2 className="font-bold text-lg md:text-xl pb-3">
                            Ingredients
                        </h2>
                        <ul className="divide-y divide-gray-700 list-disc ml-4">
                            {meal.ingredients.map((ingredient: Ingredient, index: number) => (
                                <li className="py-2 text-xs md:text-base font-body" key={index}>
                                    <span className="capitalize">{ingredient.name}</span>
                                    &nbsp;
                                    {ingredient.measure &&
                                        <>
                                            ({ingredient.measure})
                                        </>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h2 className="font-bold text-lg md:text-xl pb-3">
                            How to prepare
                        </h2>
                        <p className="whitespace-pre-wrap text-xs md:text-base font-body">
                            {meal.instructions}
                        </p>
                    </div>

                    {meal.youtubeLink &&
                        <div className="mb-5 h-96">
                            <iframe id="meal-video" title="Instructions Video" className="mx-auto" width="100%" height="100%"
                                src={meal.youtubeLink}>
                            </iframe>
                        </div>
                    }
                </>
            }
        </div>
    );
}

export default MealPage;