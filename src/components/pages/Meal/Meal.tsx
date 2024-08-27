import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredient from "../../../models/Ingredient";
import Meal from "../../../models/Meal.model";
import { theMealDbEndpoint } from "../../../utils/Constants";
import HomeButton from "../../common/HomeButton/HomeButton";
import LoadingLabel from "../../common/LoadingLabel/LoadingLabel";
import "./Meal.css";

const MealPage: React.FC = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(new Meal());
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchRecipeById(id);
    }, [id]);

    const fetchRecipeById = async (id: string | undefined) => {
        if (id === undefined) return;
        setIsLoading(true);

        try {
            const response = await axios.get(`${theMealDbEndpoint}/lookup.php?i=${id}`);
            const mealFromAPI = response.data.meals[0];
            setMeal(new Meal(mealFromAPI));
            setIsLoading(false);

        } catch (fetchError) {
            console.error(fetchError);
            setIsLoading(false);
        }
    }

    return (
        <div>
            {isLoading &&
                <LoadingLabel />
            }
            {(meal && !isLoading) &&
                <>
                    <HomeButton />

                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold capitalize pb-3 font-title">
                        {meal.name}
                    </h1>
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