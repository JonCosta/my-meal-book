import React from 'react';
import Meal from '../../../models/Meal.model';
import MealItem from '../MealItem/MealItem';

type MealListProps = {
    items: Meal[]
}

const MealList: React.FC<MealListProps> = ({ items }) => {
    return (
        <div className="item-list">
            <ul>
                {items.map((meal: any) => (
                    <MealItem key={meal.id} meal={meal} />
                ))}
            </ul>
        </div>
    )
}

export default MealList;