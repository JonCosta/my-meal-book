import axios from "axios";
import { Component } from "react";
import Meal from "../../../models/Meal";
import { cssCenterDiv } from "../../../utils/Constants";
import MealItem from "../../common/MealItem/MealItem";
import SurpriseMeButton from "../../common/SurpriseMeButton/SurpriseMeButton";

class HomePage extends Component {

    state = {
        isLoading: false,
        mealList: [],
        searchQuery: ''
    };

    endpointUrl: string = "https://themealdb.com/api/json/v1/1";
    searchTimer: any = null;

    handleChangeSearch = (event: any) => {
        const query = event.target.value;
        if (query === '') {
            this.clearSearch();
            return;
        }

        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(() => {
            this.fetchMealList(query);
        }, 300);
    }

    fetchMealList = async (query: string) => {
        try {
            this.setState({ isLoading: true });
            const response = await axios.get(`${this.endpointUrl}/search.php?s=${query}`);

            if (response.data.meals != null) {
                let mealList = this.generateMealListFromApiResponse(response.data.meals);
                mealList = this.sortMealListByName(mealList);

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

    generateMealListFromApiResponse(apiMealList: any[]) {
        return apiMealList.map(apiMeal => new Meal(apiMeal));
    }

    sortMealListByName(mealList: Meal[]) {
        mealList = mealList.sort((mealA, mealB) => {
            return mealA.name.localeCompare(mealB.name);
        });
        return mealList;
    }

    clearSearch = () => {
        this.setState({
            mealList: [],
            searchQuery: ''
        });
    }

    render() {
        const { mealList, isLoading } = this.state;

        return (
            <div className={cssCenterDiv}>
                <h1 className="text-4xl md:text-7xl text-center text-white font-bold font-title">
                    My Meal Book
                </h1>
                <h2 className="text-lg md:text-2xl text-center text-white mt-2 font-bold">
                    Looking for delicious meals and recipes? We got your back!
                </h2>
                {isLoading &&
                    <p className="text-white">Searching...</p>
                }

                <div className="relative my-6 rounded-md shadow-sm">
                    <input type="text" name="search" id="search" className="block w-full rounded-md p-4 
                        text-gray-900 placeholder:text-gray-500 sm:text-sm"
                        placeholder="What would you like to eat? :)" autoComplete="off"
                        onInput={this.handleChangeSearch}></input>
                </div>

                {mealList.length === 0 &&
                    <SurpriseMeButton />
                }

                <div className="item-list">
                    <ul>
                        {mealList.map((meal: any) => (
                            <MealItem key={meal.id} meal={meal} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomePage;