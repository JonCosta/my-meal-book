import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Meal from "../../../models/Meal.model"
import MealItem from "./MealItem"

const mockMeal = new Meal({
    id: 1,
    name: "Steak",
    urlThumbnail: "",
    area: "",
    category: "",
    instructions: "",
    source: "",
    youtubeLink: "",
    ingredients: []
})

describe('Meal Item', () => {
    it('should render with Meal object properties', async () => {
        let meal: Meal = new Meal(mockMeal);
        render(
            <BrowserRouter>
                <MealItem meal={meal} />
            </BrowserRouter>
        );

        const renderedItem = screen.getByRole("listitem");
        const mealThumb = screen.getByAltText(/meal thumbnail/i);
        const titleRegex = new RegExp(String.raw`${meal.name}`, "i");
        const mealTitle = screen.getByText(titleRegex);

        expect(renderedItem).toBeInTheDocument();
        expect(mealThumb).toBeInTheDocument();
        expect(mealTitle).toBeInTheDocument();
    });
})