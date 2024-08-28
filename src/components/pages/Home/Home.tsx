import axios from "axios";
import { Component } from "react";
import Category from "../../../models/Category.model";
import Meal from "../../../models/Meal.model";
import { THE_MEALDB_ENDPOINT } from "../../../utils/Constants";
import CategoryItem from "../../common/CategoryItem/CategoryItem";
import LoadingLabel from "../../common/LoadingLabel/LoadingLabel";
import MealItem from "../../common/MealItem/MealItem";
import SurpriseMeButton from "../../common/SurpriseMeButton/SurpriseMeButton";

class HomePage extends Component {

    state = {
        categoryList: [],
        isLoading: false,
        mealList: [],
        searchQuery: ''
    };

    searchTimer: any = null;

    componentDidMount(): void {
        this.fetchCategoryList();
    }

    handleChangeSearch = (event: any) => {
        const query = event.target.value;
        clearTimeout(this.searchTimer);

        if (query === '') {
            this.clearSearch();
            return;
        }

        this.searchTimer = setTimeout(() => {
            this.fetchMealList(query);
        }, 300);
    }

    fetchMealList = async (query: string) => {
        try {
            this.setState({ isLoading: true });
            const response = await axios.get(`${THE_MEALDB_ENDPOINT}/search.php?s=${query}`);

            if (response.data.meals != null) {
                let mealList = this.generateMealListFromApiResponse(response.data.meals);
                mealList = this.sortElementListByName(mealList);

                this.setState({
                    isLoading: false,
                    mealList: mealList,
                    searchQuery: query
                });

            } else {
                this.setState({
                    isLoading: false,
                    mealList: []
                });
            }

        } catch (fetchError) {
            console.error(fetchError);
            this.setState({
                isLoading: false
            });
        }
    }

    fetchCategoryList = async () => {
        try {
            const response = await axios.get(`${THE_MEALDB_ENDPOINT}/categories.php`);
            let categoryList = this.generateCategoryListFromApiResponse(response.data.categories);
            categoryList = this.sortElementListByName(categoryList);

            this.setState({
                categoryList: categoryList,
            });

        } catch (fetchError) {
            console.error(fetchError);
        }
    }

    generateMealListFromApiResponse(apiMealList: any[]) {
        return apiMealList.map(apiMeal => new Meal(apiMeal));
    }

    generateCategoryListFromApiResponse(apiCategoryList: any[]) {
        return apiCategoryList.map(apiCategory => new Category(apiCategory));
    }

    sortElementListByName(elementList: any[]) {
        elementList = elementList.sort((elementA, elementB) => {
            return elementA.name.localeCompare(elementB.name);
        });
        return elementList;
    }

    clearSearch = () => {
        this.setState({
            mealList: [],
            searchQuery: ''
        });
    }

    render() {
        const { mealList, isLoading, categoryList } = this.state;

        return (
            <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-bold font-title">
                    My Meal Book
                </h1>
                <h2 className="text-md md:text-lg lg:text-xl text-center text-white mt-2 font-semibold font-body">
                    Looking for delicious meals and recipes?
                    <br />
                    We got your back!
                </h2>

                <div className="relative my-6 rounded-md shadow-sm">
                    <input type="text" name="search" id="search" className="block w-full rounded-md p-3
                        text-gray-900 placeholder:text-gray-500 placeholder:text-sm lg:placeholder:text-md"
                        placeholder="What would you like to eat? :)" autoComplete="off"
                        onInput={this.handleChangeSearch}></input>
                </div>

                {(!isLoading && mealList.length === 0) &&
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                            {categoryList.map((category: Category) => (
                                <CategoryItem key={category.id} category={category} />
                            ))}
                        </div>

                        <SurpriseMeButton />
                    </>
                }

                {isLoading &&
                    <LoadingLabel labelText="Searching..." />
                }

                <div className="item-list">
                    <ul>
                        {mealList.map((meal: Meal) => (
                            <MealItem key={meal.id} meal={meal} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomePage;