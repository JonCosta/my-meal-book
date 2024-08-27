import { isStringEmpty } from "../utils/StringUtils";
import Ingredient from "./Ingredient";

class Meal {
    id: number;
    name: string;
    urlThumbnail: string;
    area: string;
    category: string;
    instructions: string;
    source: string;
    youtubeLink: string;
    ingredients: Ingredient[];

    constructor(mealFromAPI?: any) {
        this.id = 0;
        this.name = '';
        this.urlThumbnail = '';
        this.area = '';
        this.category = '';
        this.instructions = '';
        this.source = '';
        this.youtubeLink = '';
        this.ingredients = [];

        if (mealFromAPI) {
            this.setPropertiesFromObject(mealFromAPI);
            this.setIngredientListFromObject(mealFromAPI);
        }
    }

    private setPropertiesFromObject(mealFromApi: any) {
        for (const key in mealFromApi) {
            if (Object.prototype.hasOwnProperty.call(mealFromApi, key)) {
                const mealProperty = mealFromApi[key];
                switch (key) {
                    case "idMeal":
                        this.id = mealProperty;
                        break;

                    case "strMeal":
                        this.name = mealProperty;
                        break;

                    case "strArea":
                        this.area = mealProperty;
                        break;

                    case "strCategory":
                        this.category = mealProperty;
                        break;

                    case "strMealThumb":
                        this.urlThumbnail = mealProperty;
                        break;

                    case "strInstructions":
                        this.instructions = mealProperty;
                        break;

                    case "strSource":
                        this.source = mealProperty;
                        break;

                    case "strYoutube":
                        this.youtubeLink = this.formatYoutubeLink(mealProperty);
                        break;

                    default:
                        break;
                }
            }
        }
    }

    private setIngredientListFromObject(mealFromApi: any) {
        for (let index = 1; index <= 20; index++) {
            const ingredientAtIndex = mealFromApi["strIngredient" + index];
            const measureAtIndex = mealFromApi["strMeasure" + index];

            if (!isStringEmpty(ingredientAtIndex)) {
                let ingredient = new Ingredient(ingredientAtIndex, measureAtIndex);
                this.ingredients.push(ingredient);
            }
        }
    }

    private formatYoutubeLink(youtubeLink: string) {
        return youtubeLink.replaceAll("watch?v=", "embed/");
    }

}

export default Meal;