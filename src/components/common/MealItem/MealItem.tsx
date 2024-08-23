import { useNavigate } from "react-router-dom";
import Meal from "../../../models/Meal.model";

type MealItemProps = {
    meal: Meal
}

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate('/meal/' + meal.id);
    }

    return (
        <li className="bg-list-item flex mb-1 justify-between gap-x-6 py-5 rounded-md cursor-pointer"
            onClick={handleItemClick}>
            <div className="flex min-w-0 gap-x-4">
                <img className="h-24 w-24 ml-4 flex-none rounded-full bg-gray-50"
                    src={meal.urlThumbnail} alt="" />
                <div className="min-w-0 flex-auto">
                    <span className="meal-title text-2xl font-semibold leading-6 text-white"
                        onClick={handleItemClick}>
                        {meal.name}
                    </span>
                    {meal.area &&
                        <p className="mt-1 truncate text-md leading-5 text-white">
                            <b>Area:</b> {meal.area}
                        </p>
                    }
                    {meal.category &&
                        <p className="mt-1 truncate text-md leading-5 text-white">
                            <b>Category:</b> {meal.category}
                        </p>
                    }
                </div>
            </div>
        </li>
    );
}

export default MealItem;