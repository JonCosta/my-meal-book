import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from '../../../models/Category.model';
import { THE_MEALDB_ENDPOINT } from '../../../utils/Constants';
import { sortElementListByName } from '../../../utils/StringUtils';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoryList: React.FC = () => {
    const [items, setItems] = useState<Category[]>([]);

    const generateCategoryListFromApiResponse = (apiCategoryList: any[]) => {
        return apiCategoryList.map(apiCategory => new Category(apiCategory));
    }

    useEffect(() => {
        const fetchCategoryList = async () => {
            console.log('CategoryList');

            try {
                const response = await axios.get(`${THE_MEALDB_ENDPOINT}/categories.php`);
                let categoryList = generateCategoryListFromApiResponse(response.data.categories);
                categoryList = sortElementListByName(categoryList);
                setItems(categoryList);

            } catch (fetchError) {
                console.error(fetchError);
            }
        }

        fetchCategoryList();
    }, []);

    return (
        <>
            {items.length !== 0 &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                    {items.map((category: Category) => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </div>
            }
        </>
    );
}

export default CategoryList;