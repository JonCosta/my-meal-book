import axios from "axios";
import { Component } from "react";
import { THE_MEALDB_ENDPOINT } from "../../../utils/Constants";
import { createMealFromMealApiObject, sortElementListByName } from "../../../utils/StringUtils";
import CategoryList from "../../common/CategoryList/CategoryList";
import LoadingLabel from "../../common/LoadingLabel/LoadingLabel";
import MealList from "../../common/MealList/MealList";
import SurpriseMeButton from "../../common/SurpriseMeButton/SurpriseMeButton";

class HomePage extends Component {

    state = {
        isLoading: false,
        mealList: [],
        searchQuery: ''
    };

    searchTimer: any = null;

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
                mealList = sortElementListByName(mealList);

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
        return apiMealList.map(apiMeal => createMealFromMealApiObject(apiMeal));
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
            <div>
                <h1 className="text-4xl text-center text-white font-bold font-title
                    md:text-5xl lg:text-6xl">
                    My Meal Book
                </h1>
                <h2 className="text-md text-center text-white mt-2 font-semibold font-body
                    md:text-lg lg:text-xl">
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
                        <CategoryList />
                        <SurpriseMeButton />
                    </>
                }

                {isLoading &&
                    <LoadingLabel labelText="Searching..." />
                }

                <MealList items={mealList} />
            </div>
        )
    }
}

export default HomePage;