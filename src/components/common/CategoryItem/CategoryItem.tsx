import React from 'react';
import { useNavigate } from 'react-router-dom';
import Category from '../../../models/Category.model';

type CategoryItemProps = {
    category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    const navigate = useNavigate();

    const handleClickCategory = () => {

    }

    return (
        <div className="flex-1 bg-list-item px-3 py-2.5 rounded-lg font-bold cursor-pointer flex flex-row gap-4"
            onClick={handleClickCategory}>
            <img src={category.urlThumbnail} alt="" className='rounded-full w-auto h-16 flex-none' />
            <span className='text-xl font-title my-auto font-body'>{category.name}</span>
        </div>
    )
}

export default CategoryItem;