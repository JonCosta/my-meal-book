import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredient from "../../../models/Ingredient";
import Meal from "../../../models/Meal.model";
import { theMealDbEndpoint } from "../../../utils/Constants";
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
        <div className="center-container">
            {isLoading &&
                <LoadingLabel />
            }
            {(meal && !isLoading) &&
                <>
                    <h1 className="meal-name font-title">
                        {meal.name}
                    </h1>
                    <img className="h-60 w-60 rounded mx-auto mb-5"
                        src={meal.urlThumbnail} alt="" />

                    <div className="mb-5">
                        <h2 className="meal-subtitle">
                            Ingredients
                        </h2>
                        <ul className="divide-y divide-gray-700 list-disc ml-5 font-body">
                            {meal.ingredients.map((ingredient: Ingredient, index: number) => (
                                <li className="py-2" key={index}>
                                    <span className="capitalize">{ingredient.name}</span> ({ingredient.measure})
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h2 className="meal-subtitle">
                            How to prepare
                        </h2>
                        <p className="whitespace-pre-wrap font-body">
                            {meal.instructions}
                        </p>
                    </div>

                    {meal.youtubeLink &&
                        <div className="mb-5 h-96">
                            <iframe className="mx-auto" width="100%" height="100%"
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