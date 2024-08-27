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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className="font-semibold text-sm md:text-base">{meal.area}</span>
                            </div>
                        }
                        {meal.category &&
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                                </svg>
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