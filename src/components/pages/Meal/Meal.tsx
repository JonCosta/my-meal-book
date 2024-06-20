import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredient from "../../../models/Ingredient";
import Meal from "../../../models/Meal";
import { theMealDbEndpoint } from "../../../utils/Constants";

const MealPage: React.FC = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(new Meal());
    const [isLoading, setIsLoading] = useState(false);

    const cssContainer = "mx-auto px-4 py-6 max-w-4xl text-white";
    const cssMealTitle = "text-center text-3xl font-semibold capitalize";

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
        <div className={cssContainer}>
            {isLoading &&
                <h1 className={cssMealTitle}>
                    Loading...
                </h1>
            }
            {meal &&
                <>
                    <img className="h-52 w-52 rounded-full mx-auto"
                        src={meal.urlThumbnail} alt="" />
                    <h1 className={cssMealTitle}>
                        {meal.name}
                    </h1>

                    <div className="mb-5">
                        <h2 className="font-bold">
                            Ingredients:
                        </h2>
                        <ul>
                            {meal.ingredients.map((ingredient: Ingredient) => (
                                <li key={ingredient.name} className="capitalize">
                                    - {ingredient.name} ({ingredient.measure})
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-5">
                        <h2 className="font-bold">
                            Instructions:
                        </h2>
                        <p>
                            {meal.instructions}
                        </p>
                    </div>
                </>
            }
        </div>
    );
}

export default MealPage;