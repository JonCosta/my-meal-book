import "./MealItem.css";

function MealItem(props: any) {
    const handleItemClick = () => {
        console.log("Redirect to Details of Meal #" + props.meal.id);

    }

    return (
        <li className="meal-list-item flex mb-1 justify-between gap-x-6 py-5 rounded-md"
            onClick={handleItemClick}>
            <div className="flex min-w-0 gap-x-4">
                <img className="h-24 w-24 ml-4 flex-none rounded-full bg-gray-50"
                    src={props.meal.urlThumbnail} alt="" />
                <div className="min-w-0 flex-auto">
                    <a className="meal-title text-lg font-semibold leading-6 text-white"
                        href={"/meal/" + props.meal.id}>
                        {props.meal.name}
                    </a>
                    {props.meal.area &&
                        <p className="mt-1 truncate text-xs leading-5 text-white">
                            <b>Area:</b> {props.meal.area}
                        </p>
                    }
                    {props.meal.category &&
                        <p className="mt-1 truncate text-xs leading-5 text-white">
                            <b>Category:</b> {props.meal.category}
                        </p>
                    }
                </div>
            </div>
        </li>
    );
}

export default MealItem;