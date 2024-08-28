import { MapPinIcon, TagIcon } from "@heroicons/react/16/solid";
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
        <li className="bg-list-item mb-2 py-2 md:py-3 rounded cursor-pointer"
            onClick={handleItemClick}>
            <div className="flex min-w-0 gap-x-2 md:gap-x-4 items-center">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50 items-center
                    md:h-24 md:w-24 ml-2 md:ml-3"
                    src={meal.urlThumbnail} alt="" />
                <div className="min-w-0 flex-auto">
                    <span className="meal-title text-base md:text-2xl font-semibold leading-6 text-white"
                        onClick={handleItemClick}>
                        {meal.name}
                    </span>
                    <div className="flex flex-row gap-3">
                        {meal.area &&
                            <div className="flex flex-row items-center">
                                <MapPinIcon className="size-4 mr-1" />
                                <span className="font-semibold text-sm md:text-base">{meal.area}</span>
                            </div>
                        }
                        {meal.category &&
                            <div className="flex flex-row items-center">
                                <TagIcon className="size-4 mr-1" />
                                <span className="font-semibold text-sm md:text-base">{meal.category}</span>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </li>
    );
}

export default MealItem;